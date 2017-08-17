// FB api
//var FB = require('fb');
//  fb = new FB.Facebook(options);
// mongodb
var categories = require('./categories.js');
var MongoClient = require('mongodb').MongoClient;
var mongoUtil = require( './mongoUtil.js' );
var helpers = require( './helpers.js' );
var DHL = require( './dhlrate.js' );
var Logger = require( './logger.js' );
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var mongodbUrl = 'mongodb://heroku_lrtnbx3s:5c5t5gtstipg3k6b9n6721mfpn@ds149412.mlab.com:49412/heroku_lrtnbx3s';
var db;

const globalparams = {
  category_match_percentage: 0.85
}

var callCount = 0;
var amazonClient ;
// parse URL
var parseDomain = require("parse-domain");
//add all of code
const express = require('express');
const bodyParser = require('body-parser');

const cheerio = require('cheerio');
const request = require('request');
const app = express();
var amazon = require('amazon-product-api');
const warranty_price = '15';
var logger = new Logger("MyLogFile");

      var pricingDetailMsg_en =
      "Chargable weight: <chargableWeight>kg. Shipping weight may be higher than actual product weight\n"+
      "Price at origin:$<price> ;includes shipping at origin of:$<shippping>\n"+
      "Category: <category_name>\n"+
      "Amman customs of <amm_customs>% and tax:<tax_amm>%\n" +
      "Aqaba customs 0% and tax <aqaba_customs>%\n"+
      "Warranty is at source country (add ${warranty_price}% for local warranty)\n"+
      "Prices include the actual item price + all shipping + all taxes and expenses.\n" +
      "Our guarantee 1. best price 2. price will not change upon arrival 3. arrival with no breakage";

// get token from the environment
const firebase_auth_uri = process.env.FIREBASE_AUTH_URI
const token = process.env.FB_VERIFY_TOKEN
const fb_access_token = process.env.FB_ACCESS_TOKEN
//const wit_access_token = process.env.WIT_ACCESS_TOKEN
app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())


// Wit.ai bot specific code

// This will contain all user sessions.
// Each session has an entry:
// sessionId -> {fbid: facebookUserId, context: sessionState}
const sessions = {};
var sessionId = ""
var userObj;
var action = "";




// test webpage CALL
app.get('/', function(req, res) {
  res.send('Hello - It is now working!')
})

/***********************************
THIS IS THE CALL FROM FACEBOOK
*************************************/

app.get('/webhook/', function(req, res) {
  console.log("****** webhook", req);
  if (req.query['hub.verify_token'] === token) {
    res.send(req.query['hub.challenge'])
  }
  res.send('No entry')
})
// start of copied code from quick start (Seema)
app.post('/webhook', function(req, res) {
  var data = req.body;

  // Make sure this is a page subscription
  if (data.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(function(entry) {
      var pageID = entry.id;
      var timeOfEvent = entry.time;

      // Iterate over each messaging event
      entry.messaging.forEach(function(event) {
        if (event.message && event.message.is_echo != "true") {
          receivedMessage(event);
        } else if (event.postback) {
          // postback
          console.log("Webhook received postback event");
          receivedMessage(event);
        } else {
          console.log("Webhook received unknown event: "); // event.message);
        }
      });
    });

    // Assume all went well.
    //
    // You must send back a 200, within 20 seconds, to let us know
    // you've successfully received the callback. Otherwise, the request
    // will time out and we will keep trying to resend.
    res.sendStatus(200);
  }
});



/*****************************************************
handle message recevied from facebook
***************************************************/
function receivedMessage(event) {
//  logger.log("in ReceiveMessage ","testing Logger","********************").log("in ReceiveMessage ","testing Logger","********************")
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;

  var message = event.message;
  action = "";
  if (echoOnly(event)) {
    return;
  }

  console.log("==========================>>> in Received message for user %d and page %d at %d with message:",
    senderID, recipientID, timeOfMessage);

// connect do db
db = mongoUtil.getDb(function() {
  if (db) {
    console.log(" ++++++++++++ :) ++++++  CONNECTED TO DB +++ :) ++++++++++++")
  //  db = mongoUtil.getDb()
  } else {
    console.log(" -------------------------- ERROR CONNECTING TO DB -------------------")
  }
});



  if (typeof event == 'undefined') {
    console.log(" receivedMessage ---> EVENT is Undefined <><>")
  } else {
    console.log("-receivedMessage --->---------=> EVENT STRUCTURE:")
    console.log(JSON.stringify(event));
  }

  if (typeof message == 'undefined') {
    console.log('receivedMessage ---> Message is undefined =====><><>')
  } else {
    console.log("- receivedMessage --->-----> Message STRUCTURE:")
    console.log(JSON.stringify(message));
    var messageId = message.mid;

    var messageText = message.text;
    var messageAttachments = message.attachments;
  }

  const findOrCreateSession = (fbid, callback) => {
    console.log("========> in findOrCreateSession ");
    let sessionId;
    // Let's see if we already have a session for the user fbid
    Object.keys(sessions).forEach(k => {
      if (sessions[k].fbid === fbid) {
        // Yep, got it!
        console.log("Found Session");
        //console.log(" ****findOrCreateSession*** context:", sessions[k].context);
        sessionId = k;
      }
    });
    if (!sessionId) {
      console.log(" ****findOrCreateSession*** session not found");
      // No session found for user fbid, let's create a new one
      sessionId = new Date().toISOString();
      sessions[sessionId] = {
        fbid: fbid,
        context: {}
      };
    }
    callback(sessionId)
  }; //  enf findOrCreateSession


  // call findOrCreateSession
  findOrCreateSession(senderID, function(thisSessionId) {
    sessionId = thisSessionId;
    if (sessions[sessionId].context.action == "set_entity_msg") {
      // user already known and is admin
      console.log("   ++++++++++++++++  user already known and is admin - conext says set_entity_msg")
      console.log("   ++++++++++++++++  session  content: ", sessions[sessionId]);

      // update entity message to what the user just sent TODO
      action = "set_entity_msg";
    } // sessions[sessionId].context == "set_entity"

    // get user public profile
    // if already in session, this function will just return what in the session

    getUserPublicInfo(senderID, function(fbprofile) {
      //console.log("_____ after getUserPublicInfo - fbprofile:", fbprofile);

      if (typeof fbprofile != 'undefined' && fbprofile) {
        console.log("fbprofile first_name:", fbprofile.first_name);
      //  console.log("fbprofile last_name:", fbprofile.last_name);
        //console.log("fbprofile last_name:", fbprofile.locale);
        //console.log("fbprofile last_name:", fbprofile.gender);
        //  sessions[sessionId].fbprofile = fbprofile;

        /*  if (fbprofile.locale && fbprofile.locale.toLowerCase().includes("en")) {
            sendTextMessage(senderID, "Hello ",fbprofile.first_name);
          } else {
            sendTextMessage(senderID, fbprofile.first_name,  " مرحبا ");
          }*/

        // create user if new

        MongoClient.connect(mongodbUrl, function(err, db) {
          assert.equal(null, err);
          //console.log("------ call findOrCreateUser");
          // this function will return userObj in session if found
          findOrCreateUser(senderID, fbprofile, db, function(dbUserObj) {
            // set user info
            userObj = dbUserObj;
            console.log("***after findOrCreateUser *** userObj:", userObj)
            db.close();


            // at this point we have user information.
            // check if event is a postback
            if (typeof event != 'undefined' && event.postback) {
              handleEvent(senderID, event);
            } // if (typeof event != 'undefined' && event.postback)

            if (messageText) {
              //  call function to determine what response to give based on messagae text
              console.log("-------------- Call determineResponse ", callCount)

              determineResponse(event);
            } else if (messageAttachments) {
              sendTextMessage(senderID, "Message with attachment received");
            } // (messageText)
          }); // findOrCreateUser
        }); // connect

      } //  if (typeof fbprofile != 'undefined' && fbprofile)

    }); // end getUserPublicInfo

  }); // end findOrCreateSession

  // create or get user
  var findOrCreateUser = function(senderID, fbprofile, db, callback) {
    console.log("=====>   in findOrCreateUser - senderID:", senderID);
    if (sessions[sessionId].userObj) {
      console.log("**** findOrCreateUser -  user already known:", sessions[sessionId].userObj)
      return callback(sessions[sessionId].userObj);
    }
    // Peform a simple find and return one  documents
    db.collection('users').find({
      "userId": senderID
    }).limit(1).toArray().then(function(docs) {
      console.log("___user____ docs:", docs);

      if (docs && docs.length > 0) {
        //  console.log("*** docs:", docs);
        //  assert.equal(null, err);
        // user found
        userObj = docs;
        sessions[sessionId].newUser = false;
        sessions[sessionId].userObj = docs[0];
        return callback(docs[0]);


      } else if (docs && docs.length == 0) { // no match for user name
        //add new user
        docs = {
          "userId": senderID,
          "first_name": fbprofile.first_name,
          "last_name": fbprofile.last_name,
          "locale": fbprofile.locale,
          "gender": fbprofile.gender,
          "timezone": fbprofile.timezone,
          "role": "user",
          "dateCreated": new Date()
        };
        console.log(" ************** Insert new User:", fbprofile.first_name);
        db.collection('users').insertOne(docs, function(err, result) {
          // assert.equal(err, null);
          console.log("Inserted a document into the users table");
          sessions[sessionId].newUser = true;
          sessions[sessionId].userObj = docs;
          return callback(docs);
        });
      }
    });

  }; // insertMesssageText



}

/**************************************************************
  AI ENGINE (Artificial Intelligence)
  function to determine what response to give based on messagae text
****************************************************************/
function handleEvent(senderID, event) {
  console.log("==================> IN handleEvent:--->");
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;

  let payloadText;

  //console.log('Check postback Text==>');
  if (typeof event != 'undefined' && event.postback && event.postback.payload) {

    payloadText = event.postback.payload;
    console.log('-------> postback payload Text::', JSON.stringify(payloadText));
  } else {
    // not a postback - return
    return;
  }

  // at this point we know user send a postback with a paylaod
  // we need to know what was the context of this payload and take proper action
  // i would like the payload to contain the action (i.e. setCategory) and the context
  // (i.e. user was pricing an item)
  // should the context be in the payload of the session? If in session then session may expire.
  // if in payload, user can click on the response and we have all the informaiton needed there and then
  // Lets hope the payload can take enough informaiton to do what is needed.
  // for now let me design a pricing payload.
  // payload: { action:getPrice, item: { price: val, categor_name: val, weight:val etc}}

  // check if postback is JSON STRUCTURE
  jsonpayload = false;
  try {
    payloadMsg = JSON.parse(payloadText);
    jsonpayload = true;
  } catch(e) {
    console.log("Payload is not JSON structure");
  }

  if(jsonpayload && payloadMsg.action == 'getHelp') {
    // this is a pricing payload. Need to check if all pricing data is available
    // ignore check for now - just go ahead with pricing
    if (payloadMsg.subject == "categories") {
      // either ask user for the category or get a human to help
      return sendTextMessage(senderID,helpers.getMessage(sessions[sessionId],"1001"));

    }
    return calculatePricing(senderID,payloadMsg.item);
  }
  if(jsonpayload && payloadMsg.action == 'getPricing') {
    // this is a pricing payload. Need to check if all pricing data is available
    // ignore check for now - just go ahead with pricing calculation
    return calculatePricing(senderID,payloadMsg.item);
  }
  if(jsonpayload && payloadMsg.action == 'getMorePrices') {
    // return a lis of valid prices to select from


      var buttonList=[]
      var getPricingDetailsPayload = {action: 'getPricingDetails', quotation: payloadMsg.quotation}

      buttonList.push(helpers.getButton(sessions[sessionId],'getPricingDetails',getPricingDetailsPayload));

    //  var getMorePricesPayload = {action: 'getMorePrices',quotation: quote_obj }
    //  buttonList.push(helpers.getButton(sessions[sessionId],
      //      'getMorePrices',getMorePricesPayload,lowestPrice));
    //  btnTxt = "Final Amman Price:"+finalAmmanPriceStdwTax.toFixed(2) + '\n' + pricingMessage;
    //  btnTxt = "Amman Express 3-5 days:"+finalAmmanPriceStdwTax.toFixed(2);

    msgCode = "1010"; // all prices
    valParams = {
      val1: payloadMsg.quotation.price.amm_exp,
      val2: payloadMsg.quotation.price.amm_std,
      val3: payloadMsg.quotation.price.aq_std,
      val4: payloadMsg.quotation.price.aq_exp
    }

    btnTxt = helpers.getMessage(sessions[sessionId],msgCode,valParams); // pricing message
    btnTxt = payloadMsg.quotation.item.title.substring(0,60) + "\n" + btnTxt;
    sendPriceButton(senderID,btnTxt,buttonList)
  }

  if(jsonpayload && payloadMsg.action == 'getPricingDetails') {
    // this is a pricing payload. Need to check if all pricing data is available
    // ignore check for now - just go ahead with pricing calculation

    var buttonList=[]
    var confirmOrderPayload = {action:'confirmOrder',quotation: payloadMsg.quotation }

    buttonList.push(helpers.getButton(sessions[sessionId],'confirmOrder',confirmOrderPayload));

    var getMorePricesPayload = {action: 'getMorePrices', quotation: payloadMsg.quotation }
    buttonList.push(helpers.getButton(sessions[sessionId],'getMorePrices',getMorePricesPayload,
        payloadMsg.quotation.price.min_price));
  //  btnTxt = "Final Amman Price:"+finalAmmanPriceStdwTax.toFixed(2) + '\n' + pricingMessage;
  var pricing = {
    title: payloadMsg.quotation.item.title.substring(0,60) + '...',
    chargableWeight: payloadMsg.quotation.item.chargableWeight,
    shipping: payloadMsg.quotation.item.shipping,
    shippingAtOriginMsg_ar: (payloadMsg.quotation.item.shipping >-1?     "يتضمن الشحن داخل بلد المصدر وقيمته  $<شحن> ":"ولا بشمل سعر الشحن فى بلد المصدر"),
    shippingAtOriginMsg: (payloadMsg.quotation.item.shipping <0? 'does not include shipping at origin (if any)':
            'includes shipping at origin of:' +payloadMsg.quotation.item.shipping +' USD'),
    price: payloadMsg.quotation.item.price,
    category_name: payloadMsg.quotation.item.category_info.category_name,
    category_name_ar: payloadMsg.quotation.item.category_info.category_name_ar,
    amm_customs: (payloadMsg.quotation.item.category_info.customs * 100).toFixed(1),
    tax_amm: (payloadMsg.quotation.item.category_info.tax_amm * 100).toFixed(1),
    tax_aqaba: (payloadMsg.quotation.item.category_info.tax_aqaba * 100).toFixed(1),
    aqaba_customs: "0",
    packageDimensions: payloadMsg.quotation.item.length.toFixed(1) + 'x' +
        payloadMsg.quotation.item.width.toFixed(1) + 'x' +
        payloadMsg.quotation.item.height.toFixed(1)

  }
  shortTitle = pricing.title.substring(0,80);
  var detailsMsg_en =
  `${shortTitle}
Price at origin:${pricing.price} USD ;${pricing.shippingAtOriginMsg}
Chargable weight: ${pricing.chargableWeight} KG. (shipping weight may be higher than actual product weight)
Dimensions ${pricing.packageDimensions} inch
Category: ${pricing.category_name}
Amman customs of ${pricing.amm_customs}% and tax:${pricing.tax_amm}%
Aqaba customs 0% and tax ${pricing.aqaba_tax}%
Warranty is at origin (add ${warranty_price}% for local warranty)
Prices include the actual item price + all shipping + all taxes and expenses.
Our guarantee:
1. best price
2. price will not change upon arrival
3. arrival with no breakage`;
   /*detailsMsg_en = pricingDetailMsg_en.replace("<price>",payloadMsg.quotation.item.price).
    replace(" <chargableWeight>",payloadMsg.quotation.item.chargableWeight).
    replace(" <shippping>",payloadMsg.quotation.item.shipping).
      replace(" <category_name>",payloadMsg.quotation.item.category_info.category_name).
      replace(" <amm_customs>",payloadMsg.quotation.item.category_info.category_name).
*/

var pricingDetailMsg_ar =
  pricing.title.substring(0,80)+
       "\n" +
      "  السعر من المصدر$<سعر>" +
             "\n" +
   pricing.shippingAtOriginMsg_ar +
       "\n" +
      "  وزن الشحن: <وزن>كغم قد يكون أعلى من وزن القطعة"+
         "\n" +
            "   <ابعاد> "+
           "\n" +
           " الصنف: <صنف> " +
           "\n" +
           "عمان: الجمرك <عمان جمرك>% ،ضريبةالمبيعات %<عمان مبيعات>" +
           "\n" +
           "العقبة: الجمرك 0% وضريبةالمبيعات %<عقبة مبيعات>  "+
           "\n" +
			" السعر يشمل سعر القطعة+الشحن+الجمرك+الضريبة+ كل المصاريف"	+
      "\n" +
      "الكفالة فى بلد المصدر. للكفالة المحلية الإختيارية أضف %15.0"+
          "\n" +
".نضمن الوصول وغير مكسور إن شاء الله  - سعر القطعة  شامل ومضمون الا يتغير - نضمن أفضل الأسعار";
var detailsMsg_ar = pricingDetailMsg_ar;



detailsMsg_ar = detailsMsg_ar.replace("<ابعاد>",pricing.packageDimensions + " بوصة");
detailsMsg_ar = detailsMsg_ar.replace("<سعر>",pricing.price);
detailsMsg_ar = detailsMsg_ar.replace("<شحن>",pricing.shipping);
detailsMsg_ar = detailsMsg_ar.replace("<صنف>",pricing.category_name_ar);
detailsMsg_ar = detailsMsg_ar.replace("<وزن>",pricing.chargableWeight);
detailsMsg_ar = detailsMsg_ar.replace("<عمان جمرك>",pricing.amm_customs);
detailsMsg_ar = detailsMsg_ar.replace("<عمان مبيعات>",pricing.tax_amm);

detailsMsg_ar = detailsMsg_ar.replace("<عقبة مبيعات>",pricing.tax_aqaba);

  //  btnTxt = JSON.stringify(detailsMsg_en);

detailsMsg =  (language() == "english"? detailsMsg_en:detailsMsg_ar);

return sendPriceButton(senderID, detailsMsg, buttonList);
}

  // check the action from the postback if any
  if (typeof payloadText != 'undefined' && payloadText == 'yes_confirm_order') {
  }

  // check if 'yes_confirm_order' postback
  if (typeof payloadText != 'undefined' && payloadText == 'yes_confirm_order') {
    //  let postbackText = JSON.stringify(event.postback);
    //  if (messageText.toLowerCase().includes("confirm order")) {
    sendTextMessage(senderID, "Thank You");

    // insert order request to database
    //
    MongoClient.connect(mongodbUrl, function(err, db) {
      assert.equal(null, err);
      insertOrderRequest(db, function() {
        db.close();
      });
    });

    // insertDocument copied example fromhttps://docs.mongodb.com/getting-started/node/insert/
    var insertOrderRequest = function(db, callback) {
      db.collection('order_request').insertOne({
        "senderId": senderID,
        "recipientId": recipientID,
        "orderItem": payloadText,
        "messageId": "",
        "timestamp": new Date(timeOfMessage),
        "dateCreated": new Date()
      }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the order_request collection.");
        callback();
      });
    }; // end of insertOrderRequest
    // "timestamp" : new Date(timeOfMessage).toString("<YYYY-mm-ddTHH:MM:ss>"),
  } else if (typeof payloadText != 'undefined' && payloadText == 'not_now') {
    sendTextMessage(senderID, "WHY WHY WHY???!!!");
    // ask WHY
    // insert follow up to why user did not buy
  }
}






/*********************************
Function determineResponse
*********************************/

function determineResponse(event) {
  console.log("================================> IN determineResponse:--->");
  callCount = callCount + 1;
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  var message = event.message;
  var messageId = message.mid;

  var messageText = message.text;
  var messageAttachments = message.attachments;

  let compareText = messageText.toLowerCase();
  console.log("<><><><><>   compareText:", compareText);
  var userMsg;


  if (message.text) {
    // store all text messages
    console.log("<<<<<<< insert message:", message.text);

    MongoClient.connect(mongodbUrl, function(err, db) {
      assert.equal(null, err);
      insertuserMsg(db, function() {
        db.close();
      });


    }); // connect

    // insertDocument copied example fromhttps://docs.mongodb.com/getting-started/node/insert/
    var insertuserMsg = function(db, callback) {
      db.collection('user_messages').insertOne({
        "senderId": senderID,
        "recipientId": recipientID,
        "messageText": message.text,
        "messageId": messageId,
        "timestamp": new Date(timeOfMessage),
        "dateCreated": new Date()
      }, function(err, result) {
        //  assert.equal(err, null);
        console.log("Inserted a document into the user_messages");
        callback();
      });
    }; // insertMesssageText

  } // message.text

  // check if message from user is a JSON formatted message (i.e. Command)
  try {
    if (message.text) {
      console.log("do JSON parse of message.text");
      userMsg = JSON.parse(message.text);
      console.log("after JSON parse of compareText");
      if (typeof userMsg != 'undefined' && userMsg.action) {
        console.log('action = ', userMsg.action);
      }
    }
  } catch (e) {
    console.log("message.text not a JSON string - not a problem");
  } // end  of try block if compareMessage

  console.log("sessions[sessionId];:", sessions[sessionId])
  console.log("********** newUser?",sessions[sessionId].newUser);
  if (sessions[sessionId].newUser) {
    // follow welcome protocol for newUser

    //sendTextMessage(senderID,sessions[sessionId].fbprofile.first_name+", welcome to TechTown MailOrder Service");

    matchEntity("how_to_order", language(), function(doc) {
      console.log("after matchEntity(how_to_order");
      sessions[sessionId].newUser = false; // welcome message sent
      sendWatchVideoButton(senderID, "", helpers.getMessage(sessions[sessionId],"1011"));
      sendTextMessage(senderID, doc[0].messageText);
    });
  }

  // If we receive a text message, check to see if it matches a keyword
  // and send back the example. Otherwise, just echo the text we received.

  if (compareText.includes("button")) {
    //  console.log("before insertAllCats")
  //  let n = categories.insertAllCats();
  //  let n = categories.insertAllCatsArabic();
  //categories.updateCatArabicName();
  //  console.log("after insertAllCats:",n)
    //console.log("*************************cat ",allcats[0]);
     if (sessions[sessionId].userObj.locale.toUpperCase().includes('EN')) {
       sessions[sessionId].userObj.locale = 'ar_US';
     } else {
       sessions[sessionId].userObj.locale = 'en_US'
     };
     sendButton(senderID, 'Would you like to confirm order?');
  }


  /*---------------------------------
   check if this is a pricing request
   ---------------------------------*/
  if (typeof userMsg != 'undefined' && userMsg.action === "*pr") {
    getPricing(senderID,userMsg);
    return;
  } // action *pr


  if (typeof userMsg != 'undefined' && userMsg.action === "*report") {
  //  sendTextMessage(senderID, 'I understand that you want me to give you a PR report .. please wait');
    console.log("Report for days back:", userMsg.days)
    daysBack = 1;
    if (userMsg.days) {
      daysBack = userMsg.days
    };
    genNewUserReport(senderID, daysBack, function(imsg) {
      console.log("++++++++++++++++ message fro genNewUserReport:",imsg)
      genPrReport(senderID, daysBack,function(pmsg) {
          console.log("++++++++++++++++ message fro genPrReport:",pmsg)
      });
    });



  } // if *report action

  // if message contains http, then it is a pricing request
  if (compareText.includes("http")) {
    console.log("got HTTP message");
    sendTextMessage(senderID,"Pricing now...")
    return processHttpRequest(event);
  } // end of if http

  //
  if (message.nlp) {
    var witNlp = message.nlp;
    console.log("<><> --> witNlp:", witNlp);
    var entList = message.nlp.entities;
    if (entList ) {
      console.log("EntList______", entList);

    } else {
      console.log("EntList could not be determined")
    }

    console.log(" ********** sessions[sessionId].context", sessions[sessionId].context);

    if (sessions[sessionId].context && sessions[sessionId].context.action == "set_entity_msg") {
      // update witentities table and return

      console.log("+++++++++++++++++++++++++++++  updateEntity now ");
      updateEntity(sessions[sessionId].context.intent, sessions[sessionId].context.intentValue, messageText,
        function(doc) {
          console.log("+++++++++++++++++++++++++++++  updateEntity done  doc updated:", doc)
          // clear context

          action = ""
          sendTextMessage(senderID, sessions[sessionId].context.intent + " updated");
          sessions[sessionId].context = {}
          return;
        });

    } else {

      findHighestConfidence(message.nlp.entities, function(intent, intentValue, highConfidence) {
        console.log("--after findHighestConfidence ---- Intent:", intent);
        if (intent == "change_intent" && intentValue == "message" && sessions[sessionId].context.intent) {
          // update intent message
          sendTextMessage(senderID, "how should i respond to " + sessions[sessionId].context.intent + "?");
          sessions[sessionId].context = {
            "action": "set_entity_msg",
            "intent": sessions[sessionId].context.intent,
            "intentValue": sessions[sessionId].context.intentValue
          };
        } else if (intent != '') {
          matchEntity(intent, intentValue, function(doc) {
            console.log(">>>>>>>>> matchEntity response:", doc);
            // send message only if highConfidence is higher than the stored entity THRESHOLD
            console.log("storedThreshold <> highConfidence => ", doc[0].threshold + " <> ", highConfidence)
            if (doc && doc[0] && doc[0].messageText && doc[0].messageText.includes("not sure")) {
              sendTextMessage(senderID, "how should i respond?");
              // set session context to expect entity respose TODO
              console.log(" &&&&&&&&&& ASK how to respond. UserObj:", userObj)
              sessions[sessionId].context = {
                "action": "set_entity_msg",
                "intent": intent,
                "intentValue": intentValue
              };


            }
            if (highConfidence > doc[0].threshold) {

              sendTextMessage(senderID, doc[0].messageText);
            } else if (doc[0].entity_name != '') {
              console.log(" Found entity but threshold is lower.  ");
              console.log(" ++ user intent was:", intent);
            }

          });
        } // intent != ''
        else {
              // intent is blank
              console.log(" ******** NO Intents Found  ***********");
        }
      }); // end findHighestConfidence
    }
    /*
       const greetings_ar = firstEntity(message.nlp, 'greetings_ar');
       if (greetings_ar && greetings_ar.confidence > 0.75) {
         if (greetings_ar.value == 'islamic') {
            sendTextMessage(senderID,'وعليكم السلام');
         } else {
           sendTextMessage(senderID,'اهلا وسهلا');
        }
       } else {
         console.log ("Not a greetings_ar  ************ ");
       }



       const company_hours = firstEntity(message.nlp, 'company_hours');
       if (company_hours && company_hours.confidence > 0.75) {
         if (company_hours.value == 'general') {
         sendTextMessage(senderID,'amman: 9am-8pm Sat-Thu Friday 4pm-8pm');
          sendTextMessage(senderID,'aqaba: 10am-11pm Sat-Thu Friday: closed ');
        } else if (company_hours.value == 'amman') {
           sendTextMessage(senderID,'amman: 9am-8pm Sat-Thu Friday 4pm-8pm');
        } else if (company_hours.value == 'aqaba') {
          sendTextMessage(senderID,'aqaba: 10am-11pm Sat-Thu Friday: closed ');
        }
       } else {
         console.log ("Not a company_hours  ************ "  );
       }

       const company_phone = firstEntity(message.nlp, 'company_phone');
       if (company_phone && company_phone.confidence > 0.75) {
         if (company_phone.value == 'amman') {
               sendTextMessage(senderID,'amman: 0785000010');
         } else if (company_phone.value == 'aqaba') {
             sendTextMessage(senderID,'aqaba: 0785000032 ');
         }  else  {
           sendTextMessage(senderID,'amman: 0785000010');
           sendTextMessage(senderID,'aqaba: 0785000032 ');
         }
       } else {
         console.log ("Not a company_phone  ************ "  );
       }

       const bye = firstEntity(message.nlp, 'bye');
       if (bye && bye.confidence > 0.75) {
         if (bye.value == 'true') {
         sendTextMessage(senderID,'see you soon!');
         }
       } else {
         console.log ("Not a bye  ************ confidence:");
       }

       const goodbye = firstEntity(message.nlp, 'goodbye');
       if (goodbye && goodbye.confidence > 0.75) {
        if (goodbye.value == 'formal') {
         sendTextMessage(senderID,'take care');
       } else if (goodbye.value == 'formal_ar') {
          sendTextMessage(senderID,'سلامات اهلا وسهلا');
        } else { // unknown value
          sendTextMessage(senderID,'اهلا وسهلا');
        }

       } else {
         console.log ("Not a goodbye  ************ ");
       }

       const company_location = firstEntity(message.nlp, 'company_location');
       if (company_location && company_location.confidence > 0.75) {
         if (company_location.value == 'aqaba') {
           sendTextMessage(senderID,'inside Dream Mall');
         } else if (company_location.value == 'amman') {
            sendTextMessage(senderID,'86 Gardens street ');

        } else {
         sendTextMessage(senderID,'Aqaba: inside Dream Mall');
         sendTextMessage(senderID,'Amman: 86 Gardens street ');
       }
       } else {
         console.log ("Not a company_location  ************" );
       }
    */

  } // if message.nlp
  else {
    console.log("NOT NLP message");
  }


} // end function determineResponse


function findHighestConfidence(entList, callback) {
  // find entity with highest confidence
  console.log(" =============> in findHighestConfidence");
  let intent = "";
  let highConfidence = 0;
  let intentValue = "";
  for (var key in entList) {
    // key is the entity
    if (entList.hasOwnProperty(key)) {
      console.log("key___________:", key + " -> " + entList[key]);
      console.log("confidence____________", entList[key][0].confidence);
      console.log("value__________", entList[key][0].value);
      // find entity with highest confidence
      if (entList[key][0].confidence > highConfidence) {
        highConfidence = entList[key][0].confidence;
        intent = key;
        intentValue = entList[key][0].value
      }
    }
  } // for key in entlist
  console.log("<><>  end of  findHighestConfidence intent,intentValue,highConfidence", intent + "," + intentValue + ",", highConfidence);
  callback(intent, intentValue, highConfidence);
} // end findHighestConfidence

function firstEntity(nlp, name) {
  return nlp && nlp.entities && nlp.entities && nlp.entities[name] && nlp.entities[name][0];
}


// MUST PASS ROOT TO BrowseNodes
function iterate(node, obj, stack) {
  //var cat = [];
  for (var property in obj) {
    // console.log("property:",property);
    if (obj.hasOwnProperty(property)) {
      if (property.includes(node)) {
        //  console.log(property + "// " + obj[property]);
        //stack = stack + '|' + obj[property]
        stack.push(obj[property]);
      }
      if (typeof obj[property] == "object") {

        iterate(node, obj[property], stack);

      } else {

      }

    }
  }
} // end iteterate function

/*.......................................
          screen scraper function
.......................................*/

function sendGenericMessage(recipientId, messageText) {
  // To be expanded in later sections
}

function sendWatchVideoButton(recipientId, btnText, title) {
  console.log("=================> In   sendWatchVideoButton() ");
  let messageData = {
    "recipient": {
      "id": recipientId
    },
    "message": {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "button",
          "text": "Click on the viedo below to learn how to order, we are always here to help you place your orders! "
        + "\n"+ " اضغط على الفيديو لمشاهدة اجراءات الطلب ونحن دائما معك لمساعدتك ",
          "buttons": [{
            "type": "web_url",
            "url": "http://techtownjo.com/import/TechtownMailOrder-720p.mp4",
            "title": title
          }]
        }
      }
    }
  }
  callSendAPI(messageData);
} // sendWatchVideoButton

function sendPriceButton(recipientId, btnText,buttonList) {
  console.log("===============> in  sendPriceButton buttonList:",buttonList);
    console.log("===============> in  sendPriceButton btnTxt:",btnText);
  let messageData = {
    "recipient": {
      "id": recipientId
    },
    "message": {
      "attachment":{
        "type":"template",
        "payload": {
          "template_type": "button",
          "text": btnText,
          "buttons":buttonList
        }
      }
      }
    }

  callSendAPI(messageData);
} // sendButton


function sendButton(recipientId, btnText) {
console.log("=====> in sendButton:",recipientId);
console.log("=====> in sendButton:",btnText);
  let messageData = {
    "recipient": {
      "id": recipientId
    },
    "message":{
    "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"What do you want to do next?",
        "buttons":[
          {
            "type":"web_url",
            "url":"http://www.techtownjo.com",
            "title":"Show Website"
          },
          {
            "type":"postback",
            "title":"Start Chatting",
            "payload":"USER_DEFINED_PAYLOAD"
          }
        ]
      }
    }
  }
}

  callSendAPI(messageData);
} // sendButton

function compactListBuilder(recipientId, compactListElements, moreButton) {
  console.log("=====> in compactListBuilder:", recipientId);

  var compactListMessage = {

    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "list",
        "top_element_style": "compact",
        // add elements here
        "elements": compactListElements,
        // next is the more button
        "buttons": moreButton
      }
    }

  };

  let messageData = {
    "recipient": {
      "id": recipientId
    },
  }
  messageData.message = compactListMessage;

  console.log("******************** before callSendAPI: messageData:", JSON.stringify(messageData));
  callSendAPI(messageData);
}

function compactList(recipientId, titleText) {
  console.log("=====> compactList",recipientId);
  let messageData = {
    "recipient": {
      "id": recipientId
    },
    "message": {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "list",
          "top_element_style": "compact",
          "elements": [{
              "title": "Trays, dishes, plates, cups and the like",
              "subtitle": "100% Cotton, 200% Comfortable",
              "buttons": [{
                "title": "Select",
                "type": "postback",
                "payload": "Select0"
              }]
            },
            {
              "title": "T-shirts, singlets and other vests, knitted or crocheted.",
              "subtitle": "100% Cotton, 200% Comfortable",
              "buttons": [{
                "title": "Select",
                "type": "postback",
                "payload": "Select1"
              }]
            },
            {
              "title": "Polyacetals, other polyethers and epoxide resins, \nin primary forms; polycarbonates, alkyd resins",
           "subtitle": "Polyacetals, other polyethers and epoxide resins, \nin primary forms; polycarbonates, alkyd resins",


              "buttons": [{
                "title": "Select",
                "type": "postback",
                "payload": "Select2"

              }]
            },
            {
              "title": "Protein concentrates and textured protein substances, other",
              "subtitle": "100% Cotton, 200% Comfortable",
              "buttons": [{
                "title": "Buy",
                "type": "postback",
                "payload": "payload"

              }]
            }],
          "buttons": [{
            "title": "View More",
            "type": "postback",
            "payload": "View"
          }]
        }
      }
    }
  }
  callSendAPI(messageData);
}

function quickReply(recipientId, titleText) {
  console.log("=====> quickReply");
  let messageData = {
    "recipient": {
      "id": recipientId
    },
    "message":{
      "text":titleText,
      "quick_replies":[
        {
          "content_type":"text",
          "title":"Trays, dishes, plates, cups and the like",
          "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
        },
        {
          "content_type":"text",
          "title":"Notebooks and Accessory",
          "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
        },
        {
          "content_type":"text",
          "title":"Watch (Mechanical display only)",
          "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_RED"
        },
        {
          "content_type":"text",
          "title":"US Made Cosmetics",
          "payload":"DEVELOPER_DEFINED_PAYLOAD_FOR_PICKING_GREEN"
        }
      ]
    }
    }

  callSendAPI(messageData);
} // sendButton


function sendTextMessage(recipientId, messageText) {
  console.log("in sendTextMessage function --> recipentID:", recipientId);
  var messageData = {
    recipient: {
      id: recipientId
    },
    message: {
      text: messageText
    }
  };

  callSendAPI(messageData);
} // sendTextMessage




function callSendAPI(messageData) {
  console.log("===========> in callSendAPI messageData:",JSON.stringify(messageData))
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: {
      access_token: fb_access_token
    },
    method: 'POST',
    json: messageData

  }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var recipientId = body.recipient_id;
      var messageId = body.message_id;

      console.log("Successfully sent generic message with id %s to recipient %s",
        messageId, recipientId);
    } else {
      console.error("<><><> Unable to send message. <><><>statusCode:", response.statusCode);
      console.error("<><><> Unable to send message. <><><>statusCode:", response);
      //console.error(response);
      //console.error(error);
    }
  });
}
// end of code that i copied from quick start (Seema)

app.listen(app.get('port'), function() {
  console.log('running on port', app.get('port'))
});


/*******************************************
  This is hte pricing MODULE
**********************************************/
function getRegularAmmanPrice(item) {
  // input price is in USD
  // return price in JD
  console.log("item price:",item.price);
   console.log("item price:",item.weight);
   console.log("item price:", item.shipping);
   console.log("item price:", item.category);
  console.log('in getRegularAmmanPrice *********** ')







}


// processHttpRequest function
function processHttpRequest(event,callback) {
  console.log("===================> in processHttpRequest");
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  var message = event.message;
  var messageId = message.mid;
  var messageText = message.text;
  var messageAttachments = message.attachments;
  let compareText = messageText.toLowerCase();
  let domainName = parseDomain(compareText);

  if (typeof domainName != 'undefined' && domainName) {
    console.log("<><><> Domain Name:", domainName.domain);
    // valid domainName
    // insert all http request in the database
    MongoClient.connect(mongodbUrl, function(err, db) {
      //assert.equal(null, err);
      insertMesssageText(db, function() {
        db.close();
      });
    }); // connect

    // insertDocument copied example fromhttps://docs.mongodb.com/getting-started/node/insert/
    var insertMesssageText = function(db, callback) {
      db.collection('pricing_request').insertOne({
        "senderId": senderID,
        "recipientId": recipientID,
        "domainName": domainName.domain,
        "messageText": messageText,
        "messageId": messageId,
        "timestamp": new Date(timeOfMessage),
        "dateCreated": new Date()
      }, function(err, result) {
        //assert.equal(err, null);
        console.log("Inserted a document into the pricing_request collection.");
        callback();
      });
    }; // insertMesssageText


    // check if this is a price request from Amazon or it is an Amazon product ID
    // extract  Amazon product ID in the url
    // asin match
    //    var compareText = "http://www.en-jo.alpha-secure.shop.cashbasha.com/s?field-keywords=B01AVXFD9S";



    var regex = RegExp("B[0-9]{2}[0-9A-Z]{7}|[0-9]{9}(X|0-9])/");

    //messageText = "https://www.amazon.com/4pk-Assorted-colors-Pocket-T-Shirt/dp/B00WK0ST3S/ref=sr_1_1?ie=";

    var asin = messageText.match(regex);
    console.log(">>>>>>>>>>>>>>>ASIN:", asin);
    // if ASIN is set then request if from amazon website
    // for now i will assume it is the USA AMAZON
    if (typeof asin != 'undefined' && asin) {
      // price from amazon
      console.log(">>>>>>>>>> AMAZON:", asin[0]);
       amazonClient = amazon.createClient({
        awsTag: "tech1",
        awsId: "AKIAIN3EIRW3VGI3UT2Q",
        awsSecret: "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"
      });


      var itemLookupOptions = {
        itemId: asin[0],
        MerchantId: 'Amazon',
        ResponseGroup: 'OfferListings ,ItemAttributes,BrowseNodes'
      }
      amazonItemLookup(itemLookupOptions,function(results) {
        if (!results) {
            console.log("********** No Results from Amazon!");
            return callback(null);
          }
        console.log(JSON.stringify(results));
        var res = JSON.stringify(results)
        object = JSON.parse(res);
        var itemPrice = -1;
        try {
            itemPrice = object[0].Offers[0].Offer[0].OfferListing[0].Price[0].Amount[0]*1.00/100.00;
            try {
              salePrice = object[0].Offers[0].Offer[0].OfferListing[0].SalePrice[0].Amount[0]*1.00/100.00;
            if (salePrice < itemPrice) {
              itemPrice = salePrice
              console.log("*** Using Sale Price salePrice:",salePrice)
            }
           } catch(e) { console.log("**** No sale price");}
          console.log(" ******* after get ItemPrice =",itemPrice);
        } catch (e) {
          console.log("***********=> could not find the price in OfferListing:");

        }



        var prime = "";
        var itemCondition=""


        if (prime == "") {
          try {
            prime =  object[0].Offers[0].Offer[0].OfferListing[0].IsEligibleForPrime[0];
            if (prime == "0") {
              prime = object[0].Offers[0].Offer[0].OfferListing[0].IsEligibleForSuperSaverShipping[0];
            }
          } catch (e) {console.log(" could not find IsEligibleForPrime/IsEligibleForSuperSaverShipping:");}
        }

        if (itemCondition == "") {
          try {
            itemCondition = object[0].Offers[0].Offer[0].OfferAttributes[0].Condition[0];
          } catch (e) {console.log(" could not find itemCondition");}
        }
        if (itemPrice < 0) {
          try {
            itemPrice = object[0].OfferSummary[0].LowestNewPrice[0].Amount[0] * 1.00 / 100.00;

          } catch (e) {
            console.log(" could not find the price in LowestNewPrice:")
          }
        }
        shippingCost = -1; // unknown
        if (prime == "1") {
          shippingCost = 0;
        }
        console.log("***** itemPrice:", itemPrice);
        console.log("******* Prime eligible:", prime);
        console.log("****** itemPrice:", itemPrice);

        try {
          itemheight = 1 * object[0].ItemAttributes[0].ItemDimensions[0].Height[0]._;

          itemlength = 1 * object[0].ItemAttributes[0].ItemDimensions[0].Length[0]._;

          itemwidth = 1 * object[0].ItemAttributes[0].ItemDimensions[0].Width[0]._;
        } catch (e) {
          itemheight = -1;
          itemwidth = -1;
          itemlength = -1;
        }

        try {
          itemWeight = 1 * object[0].ItemAttributes[0].ItemDimensions[0].Weight[0]._ / 100.00
        } catch (e) {
          itemWeight = -1;
        }

        try {
         height = 1 * object[0].ItemAttributes[0].PackageDimensions[0].Height[0]._/ 100.00;
         length = 1 * object[0].ItemAttributes[0].PackageDimensions[0].Length[0]._/ 100.00;
         width = 1 * object[0].ItemAttributes[0].PackageDimensions[0].Width[0]._/ 100.00;

         // apply min Dimensions

      } catch (e) {
        height = 0;
        length = 0;
        width = 0;
      }
       try {
            weight = 1 * object[0].ItemAttributes[0].PackageDimensions[0].Weight[0]._ / 100.00;
       } catch (e) {
           weight = 0;
         }

        console.log("package HxLxW", length, "x", width, "x", height, " wt", weight);
        packageDimensions = "package dimensions " + length+"x"+ width+ "x"+height+ ' inch';

        console.log("item HxLxW", itemlength, "x", itemwidth, "x", itemheight, " itemWeight:", itemWeight);
        if (!length || length <=0 || !width || width<=0 || !height || height<=0  ) {
           packageDimensions = "item dimensions " +itemlength+"x"+ itemwidth+ "x"+ itemheight
        }
        var volWeightKG = (Math.max(length*1.05,length + 1.00) *
        Math.max(width*1.05,width + 1.00) *
        Math.max(height*1.05,height + 1.00) *
             Math.pow(2.54, 3)) / (5000.00);
        console.log("volWeightKG:", volWeightKG);
        var chargableWeight = 1 * Math.max(volWeightKG * 1, weight/2.20).toFixed(2);
        console.log("x volWeight:", volWeightKG.toFixed(2));
        console.log("x chargableWeight:", chargableWeight.toFixed(2));

        // part#
        try {
        var MPN = object[0].ItemAttributes[0].MPN[0]
      } catch(e) {
        MPN="";
      }
        console.log("MPN:", MPN);
        var available="";
        try {
        var available = object[0].Offers[0].Offer[0].OfferListing[0].AvailabilityAttributes[0].AvailabilityType[0]
      } catch (e) {}
        console.log("Availability:", available);

        // size of item
        var sizeofitem = "NONE"
        try {
          sizeofitem = object[0].ItemAttributes[0].Size[0];
          // sizeofitem = object[0].ItemAttributes[0].ClothingSize[0];
        } catch (e) {

        }
        console.log("<> size of item:", sizeofitem)
/*
        var category = "";
         try {
           category = object[0].BrowseNodes[0].BrowseNode[0].Name[0]
           console.log("category:", category);
         } catch(e) { console.log("No category for this item! ");}

        */
        var cat = [];
        try {
          iterate("Name", object[0].BrowseNodes[0], cat)
        } catch(e) { console.log("No category or this item"); }
        console.log(" Categories: ", cat);
        // find Matching categories
          var itemToCheck = {
            category: []
          };
        cat.forEach(function(a) {
          for (var n =0 ; n<a.length; n++) {
              if (typeof a[n] != 'undefined' && a[n]) {
                console.log("add category:",a[n]);
                itemToCheck.category.push(a[n]);
              }
          }

        });
        var title = "";
        try {

            console.log("**Title:",object[0].ItemAttributes[0].Title[0]);
          itemToCheck.category.push(object[0].ItemAttributes[0].Title[0]);
          title = object[0].ItemAttributes[0].Title[0] ;
        } catch(e) { console.log("____________ NO TITLE!!");
        }


        var msg = title +
        "\n" +
         "Price:" + itemPrice +
        "\n" +
           "Category:" + cat +  // when done debugging change to cat[0]
           "\n" +
           "Chargable weight:" + chargableWeight +
           "\n" +
            packageDimensions +
            "\n" +
            "Availablity:" + available +
           "\n" +
           "Condition:" + itemCondition +
          "\n" +
          " MPN/ASIN:" + MPN+'/'+asin;

          try {
            itemToCheck.title = title;
          } catch (e) {
            itemToCheck.title = ""
          }
          try {
            itemToCheck.price = itemPrice;
          } catch (e) {
            itemToCheck.price = -1;
          }
          try {
            itemToCheck.shipping = shippingCost;
          } catch (e) {
            itemToCheck.shipping = -1;
          }
          try {
            itemToCheck.chargableWeight = chargableWeight;
          } catch (e) {
            itemToCheck.chargableWeight = -1;
          }
          try {
            itemToCheck.MPN = MPN;
            itemToCheck.asin = asin;
          } catch (e) {
            itemToCheck.MPN = "";
            itemToCheck.asin = "";
          }

          try {
            itemToCheck.availability = available;
            itemToCheck.condition = itemCondition;
          } catch (e) {
            itemToCheck.availability = "No Info";
            itemToCheck.condition = "No Info";
          }
          try {
            itemToCheck.height = height;
            itemToCheck.length = length;
            itemToCheck.weight = weight;
            itemToCheck.width = width;
          } catch (e) {
            itemToCheck.height = -1;
            itemToCheck.length = -1;
            itemToCheck.weight = -1;
            itemToCheck.width = -1;
          }
          console.log("------> itemToCheck:", itemToCheck);



          // we do not know the category yet
          try {
            getPricing(senderID, itemToCheck);
          } catch (e) {
            console.log("Error getting pricing");

          }
        sendTextMessage(senderID, msg);
      });

    } // if (asin)  price from amazon
    else {
      console.log("not amazon");
    }

    /*
    var ourPrice =0;
    var dealPrice =0;
    var ebayPrice =0;
      console.log(" ************ Scrape for Price *********** url= ",compareText );
      request(httpUrl, function(error, response, html) {
        console.log("after request:",error,"******   statuscode:",response.statusCode);
      if (!error && response.statusCode == 200) {
      //    console.log("********** Load page HTML ---<>",html);
          var $ = cheerio.load(html);
          // ebay #prcIsum

          $('#vi-mskumap-none').each(function(i, element) {
            var el = $(this);
            ebayPrice = el.text();
            console.log("+++++++++++ebayPrice  ==>:",ebayPrice);
          }) // close function


    // <span id="priceblock_ourprice" class="a-size-medium a-color-price">$79.99</span>  span.a-size-medium', 'span.a-color-price', '#priceblock_ourprice
          $('td.a-span12 span.a-color-price').each(function(i, element) {
              var el = $(this);
              ourPrice = el.text();
              console.log("+++++++++++our price  ==>:",ourPrice);
          }) // close function

          $('priceblock_dealprice td.a-span12 span.a-color-price').each(function(i, element) {
              var el = $(this);
              dealPrice = el.text();
              console.log("+++++++++++deal price ==>:",dealPrice);
          }) // close function

      }

    }); // close request

    var msg =  'Item Price was:' + ourPrice + " deal price:" + dealPrice + " ebayPrice:" + ebayPrice
    */

  } // valid domainName
}

function amazonItemLookup(itemLookupOptions,callback) {
  if (!amazonClient) {
  amazonClient = amazon.createClient({
   awsTag: "tech1",
   awsId: "AKIAIN3EIRW3VGI3UT2Q",
   awsSecret: "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"
 });
 }


  console.log("************* BEFORE itemLookup 1");
   amazonClient.itemLookup(itemLookupOptions).then(function(results) {
     console.log(">>>>>>>>>>>>  Resulting Message from Amazon lookup 1>>>>>>>>>>>>>>>>");
     console.log(JSON.stringify(results));
     var res = JSON.stringify(results)
     object = JSON.parse(res);
     var itemPrice = -1;
     try {
         itemPrice = object[0].Offers[0].Offer[0].OfferListing[0].Price[0].Amount[0]*1.00/100.00;

         console.log(" ******* after get ItemPrice =",itemPrice);
         return callback(results);
     } catch (e) {
       console.log("***********=> could not find the price in OfferListing: itemPrice",itemPrice);
         // do another item lookup for all merchants
         var itemLookupOptions2 = {
           itemId: itemLookupOptions.itemId,
           ResponseGroup: 'OfferListings ,ItemAttributes,BrowseNodes'
         }
         console.log("************* BEFORE itemLookup 2");
         amazonClient.itemLookup(itemLookupOptions2).then(function(results2) {
           console.log(">>>>>>>>>>>>  Resulting Message from Amazon lookup2 >>>>>>>>>>>>>>>>");
           console.log(JSON.stringify(results2));
           var res = JSON.stringify(results2)
           object = JSON.parse(res);
           return callback(results2);
        }).catch(function(err) {
          console.log("ERROR from itemLookup2 ********** ",err)
          console.log(JSON.stringify(err));
          return callback(null);
        });
     } // catch (e)
  }).catch(function(err) {
    console.log("ERROR from itemLookup1 ********** ",err)
    console.log(JSON.stringify(err));
    return callback(null);
  });
}
/* genNewUserReport */
function genNewUserReport(senderID, daysBack,callback) {
  console.log("In genNewUserReport daysBack:", daysBack);

  MongoClient.connect(mongodbUrl, (err, db) => {
    //  assert.equal(null, err);

    newUsersSummary(db, (out) => {

      db.close();
      callback(out)
    }); // CALL pricingRequestSummary
  }); // db connect

  // pricingRequestSummary FUNCTION
  var newUsersSummary = (db, callback) => {
    console.log(" in newUsersSummary ");
    var agr = [{
        $match: {
          'dateCreated': {
            $gte: (new Date((new Date()).getTime() - (daysBack * 24 * 60 * 60 * 1000)))
          }
        }
      },
      {
        '$group': {
          '_id': {
            "year": {
              '$year': '$dateCreated'
            },
            "month": {
              '$month': '$dateCreated'
            },
            "day": {
              '$dayOfMonth': '$dateCreated'
            },
            "hour": {
              "$hour": "$dateCreated"
            }
          },
          'totalrequests': {
            '$sum': 1
          }
        }
      }
    ];
    var out = [];
    var cursor = db.collection('users').aggregate(agr).toArray((err, res) => {

      //  assert.equal(err, null);
      console.log(JSON.stringify(res));
      var obj = JSON.parse(JSON.stringify(res));
      out.push("New users report for the last "+daysBack + " days back");
      obj.forEach(function(a) {

        out.push(a._id.day + "/" + a._id.month + "/" +
          a._id.year + "-" + a._id.hour + ": NEW=" + a.totalrequests );


      //  sendTextMessage(senderID, a._id.day + "/" + a._id.month + "/" + a._id.year + "-" + a._id.hour + ": NEW=" + a.totalrequests);
      });
      sendTextMessage(senderID,JSON.stringify(out));
      console.log(out);


      // sendTextMessage(senderID, out);
      callback(out);
    }); // aggregate
  }; // DB callback , pricingRequestSummary

} //end function genNewReport

/* genPrReport */
function genPrReport(senderID, daysBack,callback) {
  console.log("In genPrReport daysBack:", daysBack);

  MongoClient.connect(mongodbUrl, (err, db) => {
    //  assert.equal(null, err);

    pricingRequestSummary(db, (msg) => {

      db.close();
      callback(msg);
    }); // CALL pricingRequestSummary
  }); // db connect

  // pricingRequestSummary FUNCTION
  var pricingRequestSummary = (db, callback) => {
    console.log(" in pricingRequestSummary ");
    var agr = [{
        $match: {
          'timestamp': {
            $gte: (new Date((new Date()).getTime() - (daysBack * 24 * 60 * 60 * 1000)))
          }
        }
      },
      {
        '$group': {
          '_id': {
            "year": {
              '$year': '$timestamp'
            },
            "month": {
              '$month': '$timestamp'
            },
            "day": {
              '$dayOfMonth': '$timestamp'
            },
            "hour": {
              "$hour": "$timestamp"
            }
          },
          'totalrequests': {
            '$sum': 1
          }
        }
      }
    ];
    var out = [];
    var cursor = db.collection('pricing_request').aggregate(agr).toArray((err, res) => {

      //  assert.equal(err, null);
      console.log(JSON.stringify(res));
      var obj = JSON.parse(JSON.stringify(res));
      out.push("Pricing Request report for the last "+daysBack + " days");
      obj.forEach(function(a) {

        out.push(a._id.day + "/" + a._id.month + "/" + a._id.year +
          "-" + a._id.hour + ": PR=" + a.totalrequests);
        //sendTextMessage(senderID, a._id.day + "/" + a._id.month + "/" + a._id.year + "-" + a._id.hour + ": PR=" + a.totalrequests);
      });

      console.log(out);
      sendTextMessage(senderID,JSON.stringify(out));
      // sendTextMessage(senderID, out);
      callback(out);
    }); // aggregate
  }; // DB callback , pricingRequestSummary

} //end function genPrReport

/*************************
getPricing
**************************/
function getPricing(senderID,item) {

  console.log(" =========> in getPricing, senderID",senderID);
  var catList = [];
  /*
  if (typeof item != 'undefined' && item.price) {
    console.log('price in USD:', item.price)
  }
  if (typeof item != 'undefined' && item.weight) {
    console.log('weight in lbs:', item.weight)
  }
  if (typeof item != 'undefined' && item.chargableWeight) {
    console.log('chargableWeight in KGs:', item.chargableWeight)
  }
  if (typeof item != 'undefined' && item.category) {
    console.log('category:', item.category)
  }
*/
  // find category

  categories.findCategory(item.category,function(cats) {
  //  console.log("***************** List all CATEGORIES MATCH:",cats);
    if(!cats) {
        console.log("***************** NO CATEGORIES - RETURNED NULL ********** ");
        sendTextMessage(senderID,"Could not find matching category")
    } else if (cats && cats.length == 0 ) {
      console.log("***************** NO CATEGORIES MATCH:",searchCat)
      sendTextMessage(senderID,"No matching category");
    }  if (cats && cats.length == 1 ) {
      // got one match - use it
      console.log(" ***> selected category:",cats[0].category_name)
      //sendTextMessage(senderID,"Category:"+cats[0].category_name+"  arabic:"+cats[0].category_name_ar)
      // do the pricing now TODO
      item.category = cats[0].category_name;
      item.category_info = cats[0];
      // REDUCE ITEM SIZE
      item.category_info._id = ''; // save space in messages
      item.category_info.keywords='';

      return calculatePricing(senderID,item);
    }
    else {
      // more than one - let user select the valid category
    console.log("number of cats:",cats.length);
    highScore = cats[0].score ;
    for (i=0 ; i < cats.length && i<3 && cats[i].score >  highScore*globalparams.category_match_percentage; i++) {
      console.log("+++++++++++++= ",cats[i]);
       cats[i].score=  cats[i].score.toFixed(2);
      item.category = cats[i].category_name;
      item.category_info = cats[i];
      // REDUCE ITEM SIZE
      item.category_info._id = ''; // save space in messages
      item.category_info.keywords='';

      payload = {action: 'getPricing',
          item: item
      }
      payloadStr = JSON.stringify(payload);
      catList.push({
          "title" : cats[i].category_name + "/"+ cats[i].score,
          "subtitle"  : cats[i].category_name_ar,
          buttons : [{
            "title": "Select إختر",
            "type": "postback",
            "payload": payloadStr
          }]
      });
      var moreButton = [{
        "title": helpers.getMessage(sessions[sessionId],"1002"), // category not listed
        "type": "postback",
        "payload": ' { "action" : "getHelp" , "subject" :"categories" }'
      }]
}
  if (catList.length == 1) {
    console.log("calc price for item:",item);
      return calculatePricing(senderID,item);
  } else {
     compactListBuilder(senderID,catList,moreButton);
   }
 }
  // compactList(senderID,"Which category best matches this item?");
    // build List template
    //sendTextMessage(senderID,"Pricing now...");

  });




//  sendTextMessage(senderID, getRegularAmmanPrice(userMsg));
} // end function getPricing


function getUserPublicInfo(fbId, callback) {
  var data;
  console.log('In getUserPublicInfo - fbId:', fbId);
  console.log('In getUserPublicInfo - session:', sessions[sessionId]);
  if (sessions[sessionId].fbprofile) {
    console.log('In getUserPublicInfo - fbprofile already defined:', sessions[sessionId].fbprofile.first_name);
    return callback(sessions[sessionId].fbprofile);
  }
  /*
  if (sessions[sessionId].userObj && sessions[sessionId].userObj.first_name) {
    // we have a userObj - copy data from DB usr to fbprofile
    // fbprofile may change - will need to change code to update with new data TODO
    sessions[sessionId].fbprofile.locale = sessions[sessionId].userObj.locale;
    sessions[sessionId].fbprofile.first_name = sessions[sessionId].userObj.first_name;
    return callback(sessions[sessionId].fbprofile);
  }*/

  var url = 'https://graph.facebook.com/v2.6/' + fbId;
  var qs = {
    fields: 'first_name,last_name,gender,locale,timezone',
    access_token: fb_access_token
  };

  request({

    url: url,
    method: 'GET',
    qs: qs,
    json: true
  }, function(error, response, body) {
    if (error) {
      console.log('Error getUserPublicInfo: ', error);
      return callback(null);

    } else if (response.body.error) {
      console.log('Body Error getUserPublicInfo: ', response.body.error);
      return callback(null);
    } else {
      //  console.log("**** response:",response);
      //  console.log("**** body:",body);
      data = JSON.parse(JSON.stringify(body));
      console.log("***getUserPublicInfo**** data:", data.first_name);
      //console.log("******* first_name:",data.first_name);
      //console.log("******* last_name:",data.last_name);
      //console.log("******* gender:",data.gender);
      //console.log("******* locale:",data.locale);
      sessions[sessionId].fbprofile = data;
      callback(data);
      //  sendTextMessage(recipientId, "Hello "+ name.first_name+", how can i help you ? ")
    }
  });
}



var matchEntity = function(entity_name, value, callback) {
  console.log("====> in matchEntity:", entity_name)
  var docs;

  if (entity_name == '') {
    console.log("****** entity_name is blank");
    return callback(docs);
  } else {
    // change language
    if (value && value.toLowerCase() == "arabic") {
      console.log("^^^^^^^^^^^^^^^ switch language to arabic");
      sessions[sessionId].userObj.locale = "ar_US"
    }
    if (value && value.toLowerCase() == "english") {
      console.log("^^^^^^^^^^^^^^^ switch language to english");
      sessions[sessionId].userObj.locale = "en_US"
    }
    MongoClient.connect(mongodbUrl, function(err, db) {
      //  assert.equal(null, err);
      // Create a collection we want to drop later
      var collection = db.collection('witentities');

      // Peform a simple find and return all the documents
      collection.find({
        "entity_name": entity_name,
        "value": value
      }).limit(1).toArray().then(function(docs) {
        console.log("_______ docs:", docs);

        if (docs && docs.length > 0) {
          console.log("*** wit entity:", docs);
          //    assert.equal(null, err);
          db.close();
          sessions[sessionId].context = {
            "action": "matched_response",
            "intent": entity_name,
            "intentValue": value
          }
          callback(docs);

        } else if (docs && docs.length == 0) { // no match for entity_name
          // how about creating an entry for it and let someone or figure a way later set the message? great idea!
          insertNewEntity(entity_name, value, db, function() {
            db.close();
          });
        }
      });
    });
  } // if entity_name == ''
} // end matchEntity

var updateEntity = function(entity_name, value, newMessage, callback) {
  console.log("===================> in updateEntity:", entity_name + " value:" + value)
  var docs;
  if (entity_name == '') {
    console.log("****** updateEntity entity_name is blank");
    return callback(docs);
  } else {
    MongoClient.connect(mongodbUrl, function(err, db) {
      //assert.equal(null, err);
      // Create a collection we want to drop later
      var collection = db.collection('witentities');

      // Peform a simple find and return all the documents
      collection.findAndModify({
        "entity_name": entity_name,
        "value": value
      }, [
        ['_id', 'asc']
      ], {
        $set: {
          messageText: newMessage
        }
      }, {}, function(err, docs) {
        if (err) {
          console.log(" +++++==== findAndModify NOT FOUND! ")
        } else {
          console.log("&&&&&&&& __updateEntity_____findAndModify __docs found and updated:", docs);
        }
        db.close();
        return callback(docs);
      });
    });
  } // if entity_name == ''
} // end matchEntity



var insertNewEntity = function(entity_name, value, db, callback) {
  console.log(">>> inside insertNewEntity");
  db.collection('witentities').insertOne({
    "entity_name": entity_name,
    "value": value,
    "threshold": 0.51,
    "messageText": "not sure"
  }, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the witentities collection.");
    callback();
  });
}; // end of insertNewEntity


function echoOnly(event) {
  // return if this is a message echo (message that we sent to user)
  if (event.message_is_echo) {
    console.log("receivedMessage **** event.message.is_echo?", event.message.is_echo);

    if (event.message.is_echo == "true") {
      console.log("receivedMessage  ECHO ONLY - Return");
      return true;
    }
  }
  return false;
}


function calculatePricing(senderID,item) {
  console.log("=====================> calculatePricing:",item)

   var pricing_params =   {// get from DB.
    shippingCostPerKgJDParam:  5.42 ,  // JD
    O2_AmmanDeliveryJDParam: 1.5, // JD
    AI2_clearancePercentParam: 0.01,
    handlingPerPackageUSDParam: 2.25, // USD
    heavyWeightSurchargeParam: 10, // USD
    heavyWeightThresholdParam: 44, // pounds
    J9_unerCostPercentageParam: 1, // percentage
    min_aqaba_marginParam: 0.02,
    min_taxable_amountParam : 140, // minimum tabable amount
    BN2_paperAWBFeesParam: 2.5+ 1.85,
    expressClearanceFeeParam: 25/0.71,  // USD
    expressMarginParam: 0.12 ,
    minExpressFeeParam: 5 ,// USD
    aqabaCleranceRateParam: 0.02  //
  }


  // user pricing formula
  pricingMessage = "Notes:"
  I2_quantity = 1;
  J2_unitCapacityPerBox = 1;
  numberOfPackages = Math.ceil((I2_quantity/J2_unitCapacityPerBox)*100)/100;
  console.log('numberOfPackages',numberOfPackages)
  K2_localWarranty = false;
  L2_Prime = false;
  H2_seller = "";
  F2_numberOfSeller = 1;
  M2_AmmanCost = -1;
  V2_marginAdjBasedOnPrice = 1;
  W2_marginAdjBasedOnWeight = 1;

  X2_marginAdjBasedOnQty = 1;
  var Z2_chargableWeight = item.chargableWeight * 1.00; // kg
  var AA2_weightRateAdjust = 1; // no adjustment for now
  var AB2_adjustedShippingCost = AA2_weightRateAdjust * pricing_params.shippingCostPerKgJDParam/0.71;
  var AD2_HandlingCostUSD = pricing_params.handlingPerPackageUSDParam * numberOfPackages;
  if (Z2_chargableWeight*2.2 > pricing_params.heavyWeightThresholdParam) {
    AD2_HandlingCostUSD = AD2_HandlingCostUSD + pricing_params.heavyWeightSurchargeParam;
  }
  var T2_AmmanCatMargin = item.category_info.margin_amm * 1.00;
  U2_AqabaCatMargin = item.category_info.margin_aqaba * 1.00;
  Q2_NetAqabaMargin = Math.max(pricing_params.min_aqaba_marginParam,U2_AqabaCatMargin*
      W2_marginAdjBasedOnWeight*
      X2_marginAdjBasedOnQty*
      V2_marginAdjBasedOnPrice);

   B2_price = item.price * 1.00;

   if (item.shipping < 0) {
     // unknown shipping cost
     C2_shipping = 0;
     if (language() == "english") {
     pricingMessage = pricingMessage + "/local shipping cost not included in price"
   } else {
     pricingMessage = pricingMessage + "/لا يشمل الشحن فى بلد المصدر"
   }
   } else {
     C2_shipping = item.shipping * 1.00;
   }
  packageDimensions = item.length + 'x'+item.width + 'x'+ item.height + 'inch' ;

  Y2_volumnWeight=-1; // already have chargableWeight
  console.log('Z2_chargableWeight/AD2_HandlingCostUSD:',Z2_chargableWeight.toFixed(2)+'/'+AD2_HandlingCostUSD.toFixed(2));
  AC2_ShipAndHandCostUSD =((AB2_adjustedShippingCost * Z2_chargableWeight)) + AD2_HandlingCostUSD;
  console.log("AC2_ShipAndHandCostUSD:",AC2_ShipAndHandCostUSD.toFixed(2));

  // B2 is item.price
  // C2 is item.shipping
  console.log("item.price +  item.shipping + AC2_ShipAndHandCostUSD:",
    item.price.toFixed(2) + "/" + item.shipping.toFixed(2) +"/"+ AC2_ShipAndHandCostUSD.toFixed(2));
  AE2_itemCostUSD = item.price +  C2_shipping + AC2_ShipAndHandCostUSD;
  console.log("AE2_itemCostUSD:",AE2_itemCostUSD.toFixed(2))
  // AF2 is item.customs Percent
  // customs USD =AF2*(B2+C2+AC2*0.5)*J9
  AF2_ammCustoms = item.category_info.customs * 1.00
  AG2_customsUSD = item.category_info.customs *
          (item.price + C2_shipping +AC2_ShipAndHandCostUSD*.5)*pricing_params.J9_unerCostPercentageParam;
// AH2 =AE2+AG2
  AH2_costWithCustomsUSD = AE2_itemCostUSD + AG2_customsUSD;
  // AJ2 = =AI2*AE2
  AJ2_clearanceCost = pricing_params.AI2_clearancePercentParam * AE2_itemCostUSD;
  // AK2 =AJ2+AH2
  console.log('AJ2_clearanceCost /AH2_costWithCustomsUSD',
    AJ2_clearanceCost.toFixed(2) +'/'+ AH2_costWithCustomsUSD.toFixed(2));
  AK2_loadedCost = AJ2_clearanceCost + AH2_costWithCustomsUSD;
  AL2_ammanSalesTax = 1.0*item.category_info.tax_amm.toFixed(2);
  P2_netAmmanMargin = T2_AmmanCatMargin*
    W2_marginAdjBasedOnWeight*
      X2_marginAdjBasedOnQty*
      V2_marginAdjBasedOnPrice;
  // M2_AmmanCost = =AK2*0.71+O2
  console.log('AK2_loadedCost / pricing_params.O2_AmmanDeliveryJDParam:',
    AK2_loadedCost.toFixed(2)+'/'+ pricing_params.O2_AmmanDeliveryJDParam.toFixed(2))
  M2_AmmanCost = AK2_loadedCost * 0.71 + pricing_params.O2_AmmanDeliveryJDParam;
  console.log("M2_AmmanCost/(1- P2_netAmmanMargin):",M2_AmmanCost.toFixed(2)+'/'+P2_netAmmanMargin.toFixed(2));
  AN2_ammanSalePricewoTax = M2_AmmanCost/(1- P2_netAmmanMargin);
  console.log("AN2_ammanSalePricewoTax:",AN2_ammanSalePricewoTax.toFixed(2));
  AO2_ammStdPriceWTax = AN2_ammanSalePricewoTax*(1+AL2_ammanSalesTax);
  AP2_capPrice = 9999999.00;
  if (B2_price + C2_shipping > 10 ) {
    AP2_capPrice = item.category_info.cap_amm * (B2_price + C2_shipping);
  }
AR2_usSalesTax = item.category_info.us_tax;
AQ2_usPriceWithUsTax = ((B2_price+C2_shipping) * (1+AR2_usSalesTax ));

AS2_aramexShippingCost = DHL.aramexShipRate(Z2_chargableWeight)/0.71; // iN USD
// AT2 = =IF(B2+C2+(B2+C2)*AR2>140,"Y","N")
AT2_subjectToCustoms = (B2_price+C2_shipping > pricing_params.min_taxable_amountParam ? true:false)
console.log("AP2_capPrice,AO2_ammStdPriceWTax",AP2_capPrice.toFixed(2)+'/'+AO2_ammStdPriceWTax.toFixed(2))
  finalAmmanPriceStdwTax = Math.min(AP2_capPrice,AO2_ammStdPriceWTax);
// BQ2  = =IF(BL2+BM2>140,AF2,0)

// BL2 = =B2+C2
BL2_itemPriceandShip = B2_price + C2_shipping;
// BM2 = =INDEX(DHL!L:L,MATCH(Z2*1.05,DHL!A:A))/0.71
BM2_DHLExpressRate = DHL.getDHLRate(Z2_chargableWeight*1.05)/0.71;
console.log("***** DHLRate:",BM2_DHLExpressRate);

BO2_usHandling = AD2_HandlingCostUSD + pricing_params.BN2_paperAWBFeesParam;
BP2_ShipHandling = BM2_DHLExpressRate+BO2_usHandling;

BQ2_customs = (BL2_itemPriceandShip+BM2_DHLExpressRate>pricing_params.min_taxable_amountParam?
    AF2_ammCustoms:0);
    console.log ("Q2_customs:",BQ2_customs);
    // AU2 =
    AU2_Customs = BQ2_customs;
    // BR2 = =IF(BL2+BM2>140,AL2,0)

    BR2_salesTax =  (BL2_itemPriceandShip + BM2_DHLExpressRate >pricing_params.min_taxable_amountParam?
      AL2_ammanSalesTax:0)

    AV2_salesTax = BR2_salesTax;
    //BS2 = =(BL2+BM2)*(BQ2)
    BS2_customsAmount = (BL2_itemPriceandShip + BM2_DHLExpressRate) * BQ2_customs;
    // BT2 = =(BS2+BL2+BM2)*BR2
    BT2_salesTaxAmount = (BS2_customsAmount + BL2_itemPriceandShip + BM2_DHLExpressRate) * BR2_salesTax;
    AY2_clearanceFee = pricing_params.expressClearanceFeeParam;
    BU2_clearanceFee = AY2_clearanceFee;
    BV2_expressMargin = pricing_params.expressMarginParam;
    // BW2_ =MAX(5,BV2*(BL2+BP2))
    BW2_marginNRisk = Math.max(pricing_params.minExpressFeeParam,
      (BV2_expressMargin * (BL2_itemPriceandShip + BP2_ShipHandling)));
    BX2_marginNRiskJD = BW2_marginNRisk * 0.71;
    // BY2 =BL2+BP2+BW2+BS2+BT2+IF(AT2="Y",AY2,0)

    BY2_finalExpPriceUSD = (BL2_itemPriceandShip + BP2_ShipHandling +
      BW2_marginNRisk + BS2_customsAmount + BT2_salesTaxAmount+
      (AT2_subjectToCustoms ? AY2_clearanceFee : 0));
    BZ2_finalExpPriceJD = BY2_finalExpPriceUSD * 0.71;
    finalExpPriceJD =BZ2_finalExpPriceJD;

  // CA2 = =IF(H2="Amazon", MIN(BC2*0.99,BZ2),BZ2)
  // AW2 = =AQ2*AU2
  AW2_customs = AQ2_usPriceWithUsTax * AU2_Customs;

  // AX2 = =(AQ2+AW2)*AV2
  AX2_salesTaxAmount = (AQ2_usPriceWithUsTax+AW2_customs)*AV2_salesTax;
  // BA2 = =MAX(5,(B2+C2)*(1+AR2)*0.1)
  BA2_cashBashaFees = Math.max(pricing_params.minExpressFeeParam,(B2_price+C2_shipping)*(1+AR2_usSalesTax)*0.1);
  // BB2 ==((B2)*(1+AR2)+C2)+AS2+AZ2+BA2+AW2+AX2+IF(AT2="Y",AY2,0)
  AZ2_usFees = 0; // fees charged by competitors in the USA
  BB2_expressPricing = ((B2_price)* (1+AR2_usSalesTax)+C2_shipping)+
    AS2_aramexShippingCost+AZ2_usFees+BA2_cashBashaFees+AW2_customs+AX2_salesTaxAmount+
    (AT2_subjectToCustoms?AY2_clearanceFee:0);
    BC2_competitorsExpPricingJD = BB2_expressPricing * 0.71;

  BD2_aqabaTax = 1.0*item.category_info.tax_aqaba.toFixed(2);
  BE2_aqabaClerance = pricing_params.aqabaCleranceRateParam*1.0;
  BF2_aqabaShipRate = DHL.getAqabaRate(Z2_chargableWeight)*1.0
  CA2_finalExpPriceMinJD = (H2_seller == "Amazon"?
      Math.min(BC2_competitorsExpPricingJD*0.99,BZ2_finalExpPriceJD):BZ2_finalExpPriceJD);


    finalExpPriceAmmJD = 1.00*CA2_finalExpPriceMinJD;
          console.log("******** Final Express Price:",finalExpPriceAmmJD);
  // BG2 = =AA2*BF2/0.71
  BG2_aqabaShipRate = AA2_weightRateAdjust*BF2_aqabaShipRate*1.0/0.71
  // BH2 = =BG2*Z2
  BH2_aqabaShipping = BG2_aqabaShipRate*Z2_chargableWeight;
// BI2 = =(BH2+AE2)*0.71*(1+BE2)
console.log("BH2_aqabaShipping/AE2_itemCostUSD/BE2_aqabaClerance",
BH2_aqabaShipping+'/'+AE2_itemCostUSD+'/'+BE2_aqabaClerance);

BI2_aqabaCostwoTaxJD = (BH2_aqabaShipping+AE2_itemCostUSD)*0.71*(1.0+BE2_aqabaClerance);
// BJ2 =BI2*(1+BD2)

console.log("BI2_aqabaCostwoTaxJD/BD2_aqabaTax:",BI2_aqabaCostwoTaxJD+'/'+BD2_aqabaTax);
  BJ2_aqabaCostwTaxJD = 1.0*BI2_aqabaCostwoTaxJD*(1+BD2_aqabaTax);

  //
  // AqabaPrice
  //=IF(B4<>"",B4,IF(MIN(AO2,AP2)>15+(B2+C2)*0.71*J10,
  //IF(B7="English","Too big or heavy, not cost effective to ship",
  //"  هذه القطعة وزنها الحجمي كبير جدا نسبة الى سعر القطعة. قد لا يكون طلبها مجدى"),
  //BJ2/(1-Q2)*IF(K2="Yes",(1+Options!B2),1)))
  console.log("BJ2_aqabaCostwTaxJD/Q2_NetAqabaMargin",BJ2_aqabaCostwTaxJD+"/"+Q2_NetAqabaMargin);
  E14_finalStdAqabaPriceJD = 1.0*(BJ2_aqabaCostwTaxJD/(1-Q2_NetAqabaMargin));
  var finalStdAqabaPriceJD = 1.0*E14_finalStdAqabaPriceJD.toFixed(2);
  console.log("Final Aqaba price: ",E14_finalStdAqabaPriceJD);
  console.log("Final Amman Price:", finalAmmanPriceStdwTax.toFixed(2));
  console.log("++++++ calculatePricing - send message:",JSON.stringify(item));
  pricingMessage = pricingMessage + packageDimensions;
  pricingMessage = pricingMessage + "\n price in USD:"+item.price + '\n';
  pricingMessage = pricingMessage.replace('/: \//g',':');

//E13 - MIN(MIN(AO2,AP2),9999)

E13_finalAmmStdPrice = Math.min(AO2_ammStdPriceWTax*1.0,AP2_capPrice*1.0);

var finalStandardAmmPrice = 1.00*E13_finalAmmStdPrice.toFixed(2);

finalExpPriceMinAqabaJD = 1.05*finalExpPriceAmmJD.toFixed(2);
console.log("************ finalStandardAmmPrice:",finalStandardAmmPrice);

lowestPrice = Math.min(finalExpPriceAmmJD.toFixed(2),
  finalStandardAmmPrice.toFixed(2),
finalStdAqabaPriceJD.toFixed(2));

console.log("M2_AmmanCost/O2_AmmanDeliveryJDParam/"+
"P2_netAmmanMargin/Q2_NetAqabaMargin/T2_AmmanCatMargin/"+
"U2_AqabaCatMargin/V2_marginAdjBasedOnPrice/W2_marginAdjBasedOnWeight/"+
"X2_marginAdjBasedOnQty/Y2_volumnWeight/Z2_chargableWeight",
  M2_AmmanCost+'/'+pricing_params.O2_AmmanDeliveryJDParam+'/'+P2_netAmmanMargin+'/'+Q2_NetAqabaMargin+'/'+T2_AmmanCatMargin+'/'+
  U2_AqabaCatMargin+'/'+V2_marginAdjBasedOnPrice+'/'+W2_marginAdjBasedOnWeight+'/'+X2_marginAdjBasedOnQty+'/'+
  Y2_volumnWeight+'/'+Z2_chargableWeight);

console.log("BL2_itemPriceandShip/BM2_DHLExpressRate/"+
"BN2_paperAWBFeesParam/BO2_usHandling/BP2_ShipHandling/BQ2_customs/"+
"BR2_salesTax/BS2_customsAmount/BT2_salesTaxAmount/"+
"BU2_clearanceFee/BV2_expressMargin/BW2_marginNRisk/BX2_marginNRiskJD/"+
"BY2_finalExpPriceUSD/BZ2_finalExpPriceJD/CA2_finalExpPriceMinJD",
BL2_itemPriceandShip+'/'+BM2_DHLExpressRate+'/'+pricing_params.BN2_paperAWBFeesParam+'/'+BO2_usHandling+'/'+BP2_ShipHandling+'/'+BQ2_customs+'/'+
BR2_salesTax+'/'+BS2_customsAmount+'/'+BT2_salesTaxAmount+'/'+
BU2_clearanceFee+'/'+BV2_expressMargin+'/'+BW2_marginNRisk+'/'+
BX2_marginNRiskJD+'/'+BY2_finalExpPriceUSD+'/'+
BZ2_finalExpPriceJD+'/'+CA2_finalExpPriceMinJD);
console.log("AA2_weightRateAdjust/AB2_adjustedShippingCost/"+
"AC2_ShipAndHandCostUSD/AD2_HandlingCostUSD/AE2_itemCostUSD/"+
"AF2_ammCustoms/AG2_customsUSD/AH2_costWithCustomsUSD/AI2_clearancePercentParam/"+
"AJ2_clearanceCost/AK2_loadedCost/AL2_ammanSalesTax",
AA2_weightRateAdjust+'/'+AB2_adjustedShippingCost+'/'+
AC2_ShipAndHandCostUSD+'/'+AD2_HandlingCostUSD+'/'+AE2_itemCostUSD+'/'+
AF2_ammCustoms+'/'+AG2_customsUSD+'/'+AH2_costWithCustomsUSD+'/'+
pricing_params.AI2_clearancePercentParam+'/'+AJ2_clearanceCost+'/'+AK2_loadedCost+'/'+
AL2_ammanSalesTax);
/*
if (sessions[sessionId].userObj && sessions[sessionId].userObj.locale &&
    sessions[sessionId].userObj.locale.toLowerCase().includes("en")) {
  btnTxt = "Personal express price 3-5 days: "+finalExpPriceAmmJD.toFixed(2) + " JOD" +
  "\n"+
  "Amman Price 7-14 days: "+finalStandardAmmPrice.toFixed(2) + " JOD" +
  "\n"+
  "Aqaba price 14-24 days: "+finalStdAqabaPriceJD.toFixed(2) + " JOD" ;

  priceDetailsLbl = "Price Details";
  morePricesLbl = "more prices";
} else {
  btnTxt =
  "   سعر الطلب الخاص 3-5 ايام: "+
  finalExpPriceAmmJD.toFixed(2) +  " دينار " ;
  btnTxt = btnTxt + "\n" +
  "   سعر الطلب 7-14 يوم: "+
  finalStandardAmmPrice.toFixed(2) +  " دينار " ;
  btnTxt = btnTxt + "\n" +
  "   سعر الطلب للعقبة 14-24 يوم: "+
  finalStdAqabaPriceJD.toFixed(2) +  " دينار " ;

  morePricesLbl = "اسعار اخرى"
  priceDetailsLbl = "تفاصيل السعر";
}*/
/*
var valParams = {
  val1: (finalExpPriceAmmJD<finalStandardAmmPrice? finalExpPriceAmmJD.toFixed(2):
  val2: finalStandardAmmPrice.toFixed(2),
  val3: finalStdAqabaPriceJD.toFixed(2)
}*/
var valParams = {
  val1: (finalExpPriceAmmJD<finalStandardAmmPrice? finalExpPriceAmmJD.toFixed(2):finalStandardAmmPrice.toFixed(2))
}
msgCode = (finalExpPriceAmmJD<finalStandardAmmPrice? "1003":"1004")
btnTxt = helpers.getMessage(sessions[sessionId],msgCode,valParams); // pricing message
btnTxt = item.title.substring(0,80) + "\n" + btnTxt;

var quote_obj = {
  quote_no: 0,
  quote_date: new Date(),
  item: item,
  price: {
    amm_exp: finalExpPriceAmmJD.toFixed(2),
    amm_std: finalStandardAmmPrice.toFixed(2),
    aq_exp: finalExpPriceMinAqabaJD.toFixed(2),
    aq_std: finalStdAqabaPriceJD.toFixed(2),
    min_price: Math.min(finalExpPriceAmmJD,
      finalStandardAmmPrice,
      finalExpPriceMinAqabaJD,
      finalStdAqabaPriceJD)
  },
  notes: pricingMessage
}

  lowestPrice = quote_obj.price.min_price;

  var buttonList=[]
  var getPricingDetailsPayload = {action: 'getPricingDetails', quotation: quote_obj}

  buttonList.push(helpers.getButton(sessions[sessionId],'getPricingDetails',getPricingDetailsPayload));

  var getMorePricesPayload = {action: 'getMorePrices',quotation: quote_obj }
  buttonList.push(helpers.getButton(sessions[sessionId],
        'getMorePrices',getMorePricesPayload,lowestPrice));
//  btnTxt = "Final Amman Price:"+finalAmmanPriceStdwTax.toFixed(2) + '\n' + pricingMessage;
//  btnTxt = "Amman Express 3-5 days:"+finalAmmanPriceStdwTax.toFixed(2);
// TODO
console.log("user locale:",JSON.stringify(sessions[sessionId]));

  sendPriceButton(senderID,btnTxt,buttonList)
//  sendTextMessage(senderID,"Final Amman Price:"+finalAmmanPriceStdwTax.toFixed(2) + '\n' + pricingMessage);
  console.log("************* send all itemInfo");
  //sendTextMessage(senderID,JSON.stringify(item));
}


var language = function() {
  if (sessions[sessionId].userObj.locale.toLowerCase().includes("en")) {
    return "english"
  }
  return "arabic"
}
var langCode = function() {
  if (sessions[sessionId].userObj.locale.toLowerCase().includes("en")) {
    return 0
  }
  return 1
}
