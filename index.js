

// FB api
//var FB = require('fb');
  //  fb = new FB.Facebook(options);
// mongodb
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var mongodbUrl = 'mongodb://heroku_lrtnbx3s:5c5t5gtstipg3k6b9n6721mfpn@ds149412.mlab.com:49412/heroku_lrtnbx3s';

var callCount = 0;
// parse URL
  var parseDomain = require("parse-domain");
//add all of code
const express = require('express');
const bodyParser = require('body-parser');

const cheerio = require('cheerio');
const request = require('request');
const app = express();
var amazon = require('amazon-product-api');


// get token from the environment
const firebase_auth_uri = process.env.FIREBASE_AUTH_URI
const token = process.env.FB_VERIFY_TOKEN
const fb_access_token = process.env.FB_ACCESS_TOKEN
//const wit_access_token = process.env.WIT_ACCESS_TOKEN
app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// Wit.ai bot specific code

// This will contain all user sessions.
// Each session has an entry:
// sessionId -> {fbid: facebookUserId, context: sessionState}
const sessions = {};
var sessionId = ""
var userObj ;
var action = "";




// test webpage CALL
app.get('/', function (req, res) {
  res.send ('Hello - It is now working!')
})

/***********************************
THIS IS THE CALL FROM FACEBOOK
*************************************/

app.get('/webhook/', function(req, res){
  console.log("****** webhook",req);
  if(req.query['hub.verify_token'] === token) {
  res.send (req.query['hub.challenge'])
}
res.send('No entry')
})

// start of copied code from quick start (Seema)
app.post('/webhook', function (req, res) {
  var data = req.body;

  // Make sure this is a page subscription
  if (data.object === 'page') {

    // Iterate over each entry - there may be multiple if batched
    data.entry.forEach(function(entry) {
      var pageID = entry.id;
      var timeOfEvent = entry.time;

      // Iterate over each messaging event
      entry.messaging.forEach(function(event) {
        if (event.message && event.message.is_echo!= "true") {
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
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  var message = event.message;
  action = "";
  if ( echoOnly(event)) {return; }

  console.log("==========================>>> in Received message for user %d and page %d at %d with message:",
    senderID, recipientID, timeOfMessage);
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


  if (typeof event != 'undefined'  && event.postback) {
      console.log("receivedMessage ---> POSTBACK:=====>");
        console.log("receivedMessage ---> event.postback" ,JSON.stringify(event.postback));
  } // if typeof event != 'undefined'  && event.postback

  const findOrCreateSession = (fbid,callback) => {
    console.log("========> in findOrCreateSession ");
    let sessionId;
    // Let's see if we already have a session for the user fbid
    Object.keys(sessions).forEach(k => {
      if (sessions[k].fbid === fbid) {
        // Yep, got it!
        console.log(" ****findOrCreateSession*** context:",sessions[k].context);
        sessionId = k;
      }
    });
    if (!sessionId) {
        console.log(" ****findOrCreateSession*** session not found");
      // No session found for user fbid, let's create a new one
      sessionId = new Date().toISOString();
      sessions[sessionId] = {fbid: fbid, fbprofile: {}, context: {}, userObj: {} };
    }
    callback(sessionId)
  }; //  enf findOrCreateSession


// call findOrCreateSession
   findOrCreateSession(senderID,function(thisSessionId) {
    sessionId = thisSessionId;
    if (sessions[sessionId].context.action == "set_entity_msg") {
      // user already known and is admin
      console.log("   ++++++++++++++++  user already known and is admin - conext says set_entity_msg")
        console.log("   ++++++++++++++++  session  content: ",sessions[sessionId]);

        // update entity message to what the user just sent TODO
        action = "set_entity_msg";
    } // sessions[sessionId].context == "set_entity"

    // get user public profile

      getUserPublicInfo(senderID, function(fbprofile) {
      console.log("_____ after getUserPublicInfo - fbprofile:", fbprofile);

      if (typeof fbprofile != 'undefined' && fbprofile) {
        console.log("fbprofile first_name:", fbprofile.first_name);
        console.log("fbprofile last_name:", fbprofile.last_name);
        console.log("fbprofile last_name:", fbprofile.locale);
        console.log("fbprofile last_name:", fbprofile.gender);
        sessions[sessionId].fbprofile = fbprofile;

      /*  if (fbprofile.locale && fbprofile.locale.toLowerCase().includes("en")) {
          sendTextMessage(senderID, "Hello ",fbprofile.first_name);
        } else {
          sendTextMessage(senderID, fbprofile.first_name,  " مرحبا ");
        }*/

      // create user if new

      MongoClient.connect(mongodbUrl, function(err, db) {
        assert.equal(null, err);
        console.log("------ call findOrCreateUser");
        findOrCreateUser(senderID,fbprofile,db, function(newUserObj) {
            // set user info
            userObj = newUserObj;
            console.log("***after findOrCreateUser *** userObj:",userObj)
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
    var findOrCreateUser = function(senderID,fbprofile,db, callback) {
      console.log("=====>   in findOrCreateUser - senderID:",senderID);
      if (!sessions[sessionId].userObj ) {
        console.log("**** findOrCreateUser -  user already known")
        return callback(sessions[sessionId].userObj);
      }
      // Peform a simple find and return all the documents
      db.collection('users').find({"userId" : senderID }).limit(1).toArray().then(function(docs) {
        console.log("___user____ docs:",docs);

        if (docs && docs.length > 0) {
        //  console.log("*** docs:", docs);
        //  assert.equal(null, err);
          // user found
          userObj = docs;
          sessions[sessionId].userObj = docs;
          callback(docs);

        } else if (docs && docs.length == 0 ){ // no match for entity_name
          // how about creating an entry for it and let someone or figure a way later set the message? great idea!
          docs = {
             "userId" : senderID,
             "first_name" : fbprofile.first_name,
             "last_name" : fbprofile.last_name,
             "locale": fbprofile.locale,
               "gender": fbprofile.gender,
                 "timezone": fbprofile.timezone,
               "role" : "",
             "dateCreated": new Date()
          };
          console.log(" ************** Insert new User:",fbprofile.first_name);
          db.collection('users').insertOne(docs , function(err, result) {
          // assert.equal(err, null);
           console.log("Inserted a document into the users table");
           callback(docs);
         });
        }
  });

    };  // insertMesssageText



}

/**************************************************************
  AI ENGINE (Artificial Intelligence)
  function to determine what response to give based on messagae text
****************************************************************/
function handleEvent(senderID, event) {
      console.log("IN handleEvent:--->");
      var senderID = event.sender.id;
      var recipientID = event.recipient.id;
      var timeOfMessage = event.timestamp;

      let myText ;
      console.log('Check postback Text==>');
      if ( typeof event != 'undefined' && event.postback && event.postback.payload) {

          myText = event.postback.payload;
          console.log('postback payload Text::',myText);
      }

      // check if postback
      if ( typeof myText != 'undefined' && myText == 'yes_confirm_order' ) {
        //  let postbackText = JSON.stringify(event.postback);
        //  if (messageText.toLowerCase().includes("confirm order")) {
              sendTextMessage(senderID,"Thank You");

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
               db.collection('order_request').insertOne( {
                  "senderId" : senderID,
                  "recipientId" : recipientID,
                  "orderItem" : myText,
                  "messageId": messageId,
                  "timestamp" : new Date(timeOfMessage),
                  "dateCreated": new Date()
               }, function(err, result) {
                assert.equal(err, null);
                console.log("Inserted a document into the order_request collection.");
                callback();
              });
            }; // end of insertOrderRequest
            // "timestamp" : new Date(timeOfMessage).toString("<YYYY-mm-ddTHH:MM:ss>"),
          } else if (typeof myText != 'undefined' && myText == 'not_now')  {
            sendTextMessage(senderID,"WHY WHY WHY???!!!");
            // ask WHY
            // insert follow up to why user did not buy
          }
}






/*********************************
Function determineResponse
*********************************/

function determineResponse( event) {
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
  console.log("<<<<<<< insert message:",message.text);

    MongoClient.connect(mongodbUrl, function(err, db) {
      assert.equal(null, err);
      insertuserMsg(db, function() {
          db.close();
        });


    }); // connect

    // insertDocument copied example fromhttps://docs.mongodb.com/getting-started/node/insert/
    var insertuserMsg = function(db, callback) {
       db.collection('user_messages').insertOne( {
          "senderId" : senderID,
          "recipientId" : recipientID,
          "messageText" : message.text,
          "messageId": messageId,
          "timestamp" : new Date(timeOfMessage),
          "dateCreated": new Date()
       }, function(err, result) {
      //  assert.equal(err, null);
        console.log("Inserted a document into the user_messages");
        callback();
      });
    };  // insertMesssageText

  } // message.text

// check is message from user is a JSON formatted message (i.e. Command)
  try {
    if (compareText) {
      console.log("do JSON parse of compareText");
      userMsg = JSON.parse(compareText);
      console.log("after JSON parse of compareText");
      if (typeof userMsg != 'undefined' && userMsg.action) {
        console.log('action = ', userMsg.action);
      }
      if (typeof userMsg != 'undefined' && userMsg.price) {
        console.log('price in USD:', userMsg.price)
      }
      if (typeof userMsg != 'undefined' && userMsg.weight) {
        console.log('weight in lbs:', userMsg.weight)
      }
      if (typeof userMsg != 'undefined' && userMsg.category) {
        console.log('category:', userMsg.category)
      }
    }
  } catch (e) {
    console.log("compareText not a JSON string - not a problem");
  } // end function determineResponse



  // If we receive a text message, check to see if it matches a keyword
  // and send back the example. Otherwise, just echo the text we received.

  if (compareText.includes("button")) {
    sendButton(senderID, 'Would you like to confirm order?');
  }

  /*---------------------------------
   check if this is a pricing request
   ---------------------------------*/
  if (typeof userMsg != 'undefined' && userMsg.action === "*pr") {
    getPricing();
  } //if action *pr


  if (typeof userMsg != 'undefined' && userMsg.action === "*report") {
    sendTextMessage(senderID, 'I understand that you want me to give you a PR report .. please wait');
    console.log("Report for days back:",userMsg.days)
    daysBack = 1;
    if (userMsg.days) {
       daysBack = userMsg.days
     };

    genPrReport(senderID,daysBack);
  } // if *report action

  // if message contains http, then it is a pricing request
  if (compareText.includes("http")) {
    processHttpRequest(event);
  } // end of if http

//
if (message.nlp) {
  var witNlp = message.nlp;
  console.log("<><> --> witNlp:",witNlp);
  var entList = message.nlp.entities;
  console.log("EntList______",entList)

  console.log("**********  action:",action);
  console.log(" ********** sessions[sessionId].context",sessions[sessionId].context);
  console.log("*********** sessions[sessionId].context.action",sessions[sessionId].context.action);

  if ( action == 'set_entity_msg' || sessions[sessionId].context.action == "set_entity_msg") {
    // update witentities table and return

      console.log("+++++++++++++++++++++++++++++  updateEntity now ");
     updateEntity(sessions[sessionId].context.intent,sessions[sessionId].context.intentValue,messageText,
          function(doc) {
            console.log("+++++++++++++++++++++++++++++  updateEntity done  doc updated:",doc)
            // clear context

            action = ""
            sendTextMessage(senderID,sessions[sessionId].context.intent +  " updated");
            sessions[sessionId].context = {}
            return;
          });

  } else {

 findHighestConfidence(message.nlp.entities, function(intent,intentValue,highConfidence) {
   console.log("--after findHighestConfidence ---- Intent:",intent);
  if (intent != '' ) {
      matchEntity(intent,intentValue,function(doc) {
          console.log(">>>>>>>>> matchEntity response:",doc);
        // send message only if highConfidence is higher than the stored entity THRESHOLD
        console.log( "storedThreshold <> highConfidence => ",doc[0].threshold + " <> ", highConfidence )
        if (doc && doc[0] && doc[0].messageText && doc[0].messageText.includes("not sure")) {
          sendTextMessage(senderID,"how should i respond?");
          // set session context to expect entity respose TODO
          console.log(" &&&&&&&&&& ASK how to respond. UserObj:",userObj)
          sessions[sessionId].context = {"action": "set_entity_msg",
            "intent" : intent , "intentValue" : intentValue} ;
          sessions[sessionId].userObj = userObj;
          return;
        }
        if (highConfidence > doc[0].threshold) {

              sendTextMessage(senderID,doc[0].messageText);
        } else if (doc[0].entity_name != '') {
          console.log(" Found entity but threshold is lower.  ");
          console.log(" ++ user intent was:",intent);
        }

  });
  } // intent != ''
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
else { console.log("NOT NLP message"); }


} // end function determineResponse


function findHighestConfidence(entList,callback) {
// find entity with highest confidence
console.log (" =============> in findHighestConfidence");
let intent = "";
let highConfidence = 0;
let intentValue = "";
for (var key in entList ) {
  // key is the entity
  if (entList.hasOwnProperty(key))
   {
    console.log("key___________:",key + " -> " + entList[key]);
    console.log("confidence____________",entList[key][0].confidence);
    console.log("value__________",entList[key][0].value);
    // find entity with highest confidence
    if (entList[key][0].confidence > highConfidence) {
      highConfidence = entList[key][0].confidence;
      intent = key;
      intentValue = entList[key][0].value
    }
  }
} // for key in entlist
  console.log ("<><>  end of  findHighestConfidence intent,intentValue,highConfidence",intent+","+intentValue+",",highConfidence);
  callback(intent,intentValue,highConfidence);
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

function sendButton(recipientId, btnText) {
  let messageData = {
      "recipient":{
      "id":recipientId
    },
    "message":{
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"button",
          "text":btnText,
          "buttons":[
            {
              "type":"postback",
              "title":"Yes",
              "payload":"yes_confirm_order"
            },
            {
              "type":"postback",
              "title":"Not Now",
              "payload":"not_now"
            }
          ]
        }
      }
    }
}
  callSendAPI(messageData);
}


function sendTextMessage(recipientId, messageText) {
  console.log("in sendTextMessage function --> recipentID:",recipientId);
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
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: fb_access_token },

    method: 'POST',
    json: messageData

  }, function (error, response, body) {
    if
     (!error && response.statusCode == 200) {
      var recipientId = body.recipient_id;
      var messageId = body.message_id;

      console.log("Successfully sent generic message with id %s to recipient %s",
        messageId, recipientId);
    } else {
      console.error("<><><> Unable to send message. <><><>",error);
      //console.error(response);
      //console.error(error);
    }
  });
}
// end of code that i copied from quick start (Seema)

app.listen(app.get('port'), function(){
  console.log('running on port', app.get('port'))
});


/*******************************************
  This is hte pricing MODULE
**********************************************/
function getRegularAmmanPrice(price,weight,shipping,category) {
  // input price is in USD
  // return price in JD
  console.log('in getRegularAmmanPrice *********** ')
  let tax = 0;
  if (category && category.toLowerCase() == "notebook") {
    tax = .16;
  }
  console.log('tax=',tax);
  return price * (1+tax) + weight*5 + shipping
}


// processHttpRequest function
function processHttpRequest(event) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  var message = event.message;
  var messageId = message.mid;

  var messageText = message.text;
  var messageAttachments = message.attachments;

  let compareText = messageText.toLowerCase();





  let domainName =   parseDomain(compareText);

  if (typeof domainName != 'undefined' && domainName ) {
    console.log("<><><> Domain Name:",domainName.domain);
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
           db.collection('pricing_request').insertOne( {
              "senderId" : senderID,
              "recipientId" : recipientID,
              "domainName" : domainName.domain,
              "messageText" : messageText,
              "messageId": messageId,
              "timestamp" : new Date(timeOfMessage),
              "dateCreated": new Date()
           }, function(err, result) {
             //assert.equal(err, null);
            console.log("Inserted a document into the pricing_request collection.");
            callback();
          });
        };  // insertMesssageText


  // check if this is a price request from Amazon or it is an Amazon product ID
  // extract  Amazon product ID in the url
  // asin match
//    var compareText = "http://www.en-jo.alpha-secure.shop.cashbasha.com/s?field-keywords=B01AVXFD9S";



var regex = RegExp("B[0-9]{2}[0-9A-Z]{7}|[0-9]{9}(X|0-9])/");

//messageText = "https://www.amazon.com/4pk-Assorted-colors-Pocket-T-Shirt/dp/B00WK0ST3S/ref=sr_1_1?ie=";

var asin =messageText.match(regex);
console.log ("ASIN:",asin);
 // if ASIN is set then request if from amazon website
 // for now i will assume it is the USA AMAZON
if (typeof asin != 'undefined' && asin ) {
       // price from amazon
         console.log("AMAZON:",asin[0]);
         var client = amazon.createClient({
           awsTag: "tech1",
           awsId: "AKIAIN3EIRW3VGI3UT2Q",
            awsSecret: "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"
         });


         client.itemLookup({
        itemId: asin[0],
        ResponseGroup: 'Offers,ItemAttributes,BrowseNodes'
        }).then(function(results) {
        console.log("Resulting Message from Amazon");
        console.log(JSON.stringify(results));
         var res = JSON.stringify(results)
         object = JSON.parse(res);
       var prime = object[0].Offers[0].Offer[0].OfferListing[0].IsEligibleForPrime[0]
       shippingCost = -1; // unknown
         if (prime && prime == "1" ) {
            shippingCost = 0;
         }

            console.log("formattedPrice:" , object[0].OfferSummary[0].LowestNewPrice[0].Amount[0]);
  var   itemPrice = 1 *  object[0].OfferSummary[0].LowestNewPrice[0].Amount[0]/100.00;
  console.log("itemPrice:" ,itemPrice);
  var category = object[0].BrowseNodes[0].BrowseNode[0].Name[0]
         var cat = [];

console.log("Prime eligible:",prime," -  shippingCost:",shippingCost);
  console.log("itemPrice:",itemPrice.toFixed(2));
   console.log("category:",category);
    try {
    itemheight = 1 * object[0].ItemAttributes[0].ItemDimensions[0].Height[0]._ ;

itemlength=1*object[0].ItemAttributes[0].ItemDimensions[0].Length[0]._;

itemwidth =1* object[0].ItemAttributes[0].ItemDimensions[0].Width[0]._;
}
catch (e) {
      itemheight = -1; itemwidth = -1;
       itemlength = -1;
      }
      try {
      itemWeight = 1* object[0].ItemAttributes[0].ItemDimensions[0].Weight[0]._/100.00 } catch (e) {
      itemWeight = -1;
      }

height = 1 *  object[0].ItemAttributes[0].PackageDimensions[0].Height[0]._ ;

length = 1* object[0].ItemAttributes[0].PackageDimensions[0].Length[0]._;
weight =1 * object[0].ItemAttributes[0].PackageDimensions[0].Weight[0]._/100.00;
width =1* object[0].ItemAttributes[0].PackageDimensions[0].Width[0]._;
console.log("package HxLxW",length,"x",width,"x",height," wt",weight);

console.log("item HxLxW",itemlength,"x",itemwidth,"x",itemheight," itemWeight:",itemWeight);

       var  volWeightKG =length*width*height*Math.pow(2.54,3)/(5000*1000000);
       console.log("volWeightKG:",volWeightKG);
              var chargableWt = 1* Math.max(volWeightKG*1,weight*1/2.20).toFixed(2);
        console.log("x volWeight:",volWeightKG.toFixed(2));
        console.log("x chargableWt:",chargableWt.toFixed(2));

            // part#
        var MPN = object[0].ItemAttributes[0].MPN[0]
        console.log("MPN:",MPN);
        var available = object[0].Offers[0].Offer[0].OfferListing[0].AvailabilityAttributes[0].AvailabilityType[0]
        console.log("Availability:",available);

// size of item
    var sizeofitem = "NONE"
   try {
      sizeofitem = object[0].ItemAttributes[0].Size[0];
      // sizeofitem = object[0].ItemAttributes[0].ClothingSize[0];
    } catch(e) { console.log(e);}
    console.log("<> size of item:",sizeofitem)

       iterate("Name",object[0].BrowseNodes[0], cat)
        console.log("cat",cat);
        cat.forEach(function(a) {
      //  console.log(a);
        });
        var msg = "Category:"+cat + " weight:"+chargableWt + " Price:"+ itemPrice + " available:" + available
          + " MPN:" + MPN;
        sendTextMessage(senderID,msg);
        }).catch(function(err) {
        console.log(err);
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

/* genPrReport */
function genPrReport(senderID,daysBack) {
  console.log("In genPrReport daysBack:",daysBack);

  MongoClient.connect(mongodbUrl, (err, db) => {
  //  assert.equal(null, err);

    pricingRequestSummary(db, () => {

      db.close();
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
      obj.forEach(function(a) {

        out.push(a._id.day + "/" + a._id.month + "/" + a._id.year + "-" + a._id.hour + ": PR=" + a.totalrequests);
        sendTextMessage(senderID, a._id.day + "/" + a._id.month + "/" + a._id.year + "-" + a._id.hour + ": PR=" + a.totalrequests);
      });

      console.log(out);

      // sendTextMessage(senderID, out);
      callback(res);
    }); // aggregate
  }; // DB callback , pricingRequestSummary

} //end function genPrReport

/*************************
getPricing
**************************/
function getPricing() {
  sendTextMessage(senderID, 'I understand that you want me to give you a price .. please wait');
  let itemPrice = userMsg.price;
  let itemWeight = userMsg.weight
  let shipping = userMsg.shipping
  let category = userMsg.category;
  sendTextMessage(senderID, getRegularAmmanPrice(itemPrice, itemWeight, shipping, category));
}


function getUserPublicInfo(fbId,callback){
var data ;
if (sessions[sessionId].fbprofile) {
  return callback(sessions[sessionId].fbprofile);
}
 console.log('In getUserPublicInfo - fbId:',fbId);
 var url = 'https://graph.facebook.com/v2.6/' + fbId;
var qs = {fields:'first_name,last_name,gender,locale,timezone',access_token:fb_access_token};

request({

          url: url,
          method: 'GET',
          qs: qs,
          json: true
      }, function(error, response, body) {
          if (error) {
            callback(null);
              console.log('Error getUserPublicInfo: ', error);
          } else if (response.body.error) {
              console.log('Body Error getUserPublicInfo: ', response.body.error);
              callback(null);
          }else{
            //  console.log("**** response:",response);
            //  console.log("**** body:",body);

              data = JSON.parse( JSON.stringify(body) );
              //  console.log("******* data:",data);
              //console.log("******* first_name:",data.first_name);
                //console.log("******* last_name:",data.last_name);
                  //console.log("******* gender:",data.gender);
                  //console.log("******* locale:",data.locale);
              callback(data);
            //  sendTextMessage(recipientId, "Hello "+ name.first_name+", how can i help you ? ")
          }
      });
}



var matchEntity = function(entity_name,value,callback) {
console.log("====> in matchEntity:",entity_name)
var docs;
if (entity_name == '' ) {
  console.log("****** entity_name is blank");
   return callback(docs);
 } else {
  MongoClient.connect(mongodbUrl, function(err, db) {
      //  assert.equal(null, err);
        // Create a collection we want to drop later
        var collection = db.collection('witentities');

          // Peform a simple find and return all the documents
          collection.find({"entity_name" : entity_name, "value" : value }).limit(1).toArray().then(function(docs) {
            console.log("_______ docs:",docs);

            if (docs && docs.length > 0) {
               console.log("*** wit entity:", docs);
          //    assert.equal(null, err);
              db.close();
              callback(docs);

            } else if (docs && docs.length == 0 ){ // no match for entity_name
              // how about creating an entry for it and let someone or figure a way later set the message? great idea!
              insertNewEntity(entity_name,value,db,function() {
                  db.close();
                });
            }
      });
});
} // if entity_name == ''
} // end matchEntity

var updateEntity = function(entity_name,value,newMessage,callback) {
console.log("===================> in updateEntity:",entity_name +" value:"+value)
var docs;
if (entity_name == '' ) {
  console.log("****** updateEntity entity_name is blank");
   return callback(docs);
 } else {
  MongoClient.connect(mongodbUrl, function(err, db) {
        //assert.equal(null, err);
        // Create a collection we want to drop later
        var collection = db.collection('witentities');

          // Peform a simple find and return all the documents
          collection.findAndModify(
            {"entity_name" : entity_name, "value" : value },
             [['_id','asc']],
             {$set: {messageText: newMessage}},
             {},function(err, docs) {
               if (err) {
                   console.log(" +++++==== findAndModify NOT FOUND! ")
               } else {
                 console.log("&&&&&&&& __updateEntity_____findAndModify __docs found and updated:",docs);
               }
              db.close();
             return callback(docs);
      });
});
} // if entity_name == ''
} // end matchEntity



var insertNewEntity = function(entity_name,value,db, callback) {
  console.log(">>> inside insertNewEntity");
   db.collection('witentities').insertOne( {
      "entity_name" : entity_name,
      "value" : value,
      "threshold" : 0.51,
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
        console.log("receivedMessage **** event.message.is_echo?",event.message.is_echo);

      if ( event.message.is_echo == "true") {
        console.log("receivedMessage  ECHO ONLY - Return");
        return true;
      }
    }
    return false;
}
