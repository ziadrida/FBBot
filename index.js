
// FB api
//var FB = require('fb');
  //  fb = new FB.Facebook(options);
// mongodb
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://heroku_lrtnbx3s:5c5t5gtstipg3k6b9n6721mfpn@ds149412.mlab.com:49412/heroku_lrtnbx3s';

//add all of code
const express = require('express');
const bodyParser = require('body-parser');

const cheerio = require('cheerio');
const request = require('request');
const app = express();
var amazon = require('amazon-product-api');


// get token from the environment
const token = process.env.FB_VERIFY_TOKEN
const access = process.env.FB_ACCESS_TOKEN

app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send ('Hello - It is now working!')
})


/***********************************
THIS IS THE CALL FROM FACEBOOK
*************************************/
app.get('/webhook/', function(req, res){
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
        if (event.message ) {
           receivedMessage(event);
        } else if (event.postback) {
          // postback
            console.log("Webhook received postback event: ");
           receivedMessage(event);
        } else {
          console.log("Webhook received unknown event: ", event);
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

function receivedMessage(event) {
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  var message = event.message;


  console.log("==>>> Received message for user %d and page %d at %d with message:",
    senderID, recipientID, timeOfMessage);
    if (typeof event == 'undefined' ) {
          console.log(" EVENT is Undefined <><>")
    } else {
        console.log("----------=> EVENT STRUCTURE:")
        console.log(JSON.stringify(event));
    }

  if (typeof message == 'undefined') {
    console.log('Message is undefined =====><><>')
  } else {
    console.log("------> Message STRUCTURE:")
    console.log(JSON.stringify(message));
    var messageId = message.mid;

    var messageText = message.text;
    var messageAttachments = message.attachments;
}

  if (typeof event != 'undefined'  && event.postback) {
      console.log("POSTBACK:=====>");
        console.log(JSON.stringify(event.postback));
    }

 // check if event is a postback
 if (typeof event != 'undefined' && event.postback) {
    handleEvent(senderID,event)  ;
 }

  if (messageText) {
    //  call function to determine what response to give based on messagae text
    determineResponse(senderID,event);
  } else if (messageAttachments) {
    sendTextMessage(senderID, "Message with attachment received");
  }
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
        MongoClient.connect(url, function(err, db) {
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
                  "timestamp" : new Date(timeOfMessage).toString("<YYYY-mm-ddTHH:MM:ss>"),
                  "dateCreated": new Date("<YYYY-mm-ddTHH:MM:ss>")
               }, function(err, result) {
                assert.equal(err, null);
                console.log("Inserted a document into the order_request collection.");
                callback();
              });
            };
          } else if (typeof myText != 'undefined' && myText == 'not_now')  {
            sendTextMessage(senderID,"WHY WHY WHY???!!!");
            // ask WHY
            // insert follow up to why user did not buy
          }


}
function determineResponse(senderID, event) {
    console.log("IN determineResponse:--->");
  var senderID = event.sender.id;
  var recipientID = event.recipient.id;
  var timeOfMessage = event.timestamp;
  var message = event.message;
  var messageId = message.mid;

  var messageText = message.text;
  var messageAttachments = message.attachments;

  let compareText = messageText.toLowerCase();
  console.log("compareText ||||||||||||||||||||||:",compareText);
  var userObj ;

  try {
    if (compareText) {
          console.log("do JSON parse of compareText");
           userObj = JSON.parse(compareText);
          console.log("after JSON parse of compareText");
          if (typeof userObj != 'undefined' && userObj.action) {
            console.log ('action = ',userObj.action);
          }
          if (typeof userObj != 'undefined' && userObj.price) {
            console.log ('price in USD:',userObj.price)
         }
         if (typeof userObj != 'undefined' && userObj.weight) {
           console.log ('weight in lbs:',userObj.weight)
        }
        if (typeof userObj != 'undefined' && userObj.category) {
          console.log ('category:',userObj.category)
       }
    }
  } catch (e) {
    console.log("compareText not a JSON string");
}



      // If we receive a text message, check to see if it matches a keyword
      // and send back the example. Otherwise, just echo the text we received.

  if (compareText.includes ("button") ) {
      sendButton(senderID, 'Would you like to confirm order?');
  }


  /*---------------------------------
   check if this is a pricing request
   ---------------------------------*/
  if (typeof userObj != 'undefined' && userObj.action === "*pr" ) {
    sendTextMessage(senderID, 'I understand that you want me to give you a price .. please wait');
    let itemPrice = userObj.price;
    let itemWeight = userObj.weight
    let shipping = userObj.shipping
    let category = userObj.category;
      sendTextMessage(senderID, getRegularAmmanPrice(itemPrice,itemWeight,shipping,category));
  }

      // if message contains http, then it is a pricing request
  if (compareText.includes ("http") ) {

    /* asin match
    var url = "http://www.en-jo.alpha-secure.shop.cashbasha.com/s?field-keywords=B01AVXFD9S";
var regex = RegExp("/([A-Z0-9]{10})");
m = url.match("B[0-9]{2}[0-9A-Z]{7}|[0-9]{9}(X|0-9])/");

    console.log(m);

*/
var object ;

   var client = amazon.createClient({
     awsTag: "tech1",
     awsId: "AKIAIN3EIRW3VGI3UT2Q",
      awsSecret: "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"
   });


   client.itemLookup({
 itemId: 'B00CCYLBZ0',
 ResponseGroup: 'Offers,ItemAttributes,BrowseNodes'
}).then(function(results) {
 console.log(JSON.stringify(results));
   var res = JSON.stringify(results)
   object = JSON.parse(res);
   var cat = [];

iterate("Name",object[0].BrowseNodes[0], cat)
console.log("cat",cat);
cat.forEach(function(a) {
 console.log(a);
});
cat = [];
iterate("FormattedPrice",object[0].Offers[0], cat)
console.log("cat",cat);
cat.forEach(function(a) {
 console.log(a);
});

var attr = []
var attr2 = []
iterate("PackageDimensions",object[0].ItemAttributes[0], attr);
console.log("attr:",JSON.stringify(attr));
var d = JSON.parse(JSON.stringify(attr));
console.log("H:",d[0][0].Length[0]._*d[0][0].Width[0]._* d[0][0].Height[0]._*Math.pow(2.54,3)/(5000*1000000),"KG");


}).catch(function(err) {
 console.log(err);
});




// MUST PASS ROOT TO BrowseNodes
function iterate(node,obj, stack) {
       //var cat = [];
       for (var property in obj) {
      // console.log("property:",property);
           if (obj.hasOwnProperty(property)) {
            if (property.includes(node)) {
                console.log(property + "// " + obj[property]);
                //stack = stack + '|' + obj[property]
                stack.push(obj[property]);
               }
               if (typeof obj[property] == "object") {

                   iterate(node,obj[property], stack);

               } else {
                  // console.log(property + "/ " + obj[property]);
                 //  $('#output').append($("<div/>").text(stack))
               }

           }
       }
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

  sendTextMessage(senderID,msg);
        MongoClient.connect(url, function(err, db) {
          assert.equal(null, err);
          insertMesssageText(db, function() {
              db.close();
            });
        });

        // insertDocument copied example fromhttps://docs.mongodb.com/getting-started/node/insert/
        var insertMesssageText = function(db, callback) {
           db.collection('pricing_request').insertOne( {
              "senderId" : senderID,
              "recipientId" : recipientID,
              "messageText" : messageText,
              "messageId": messageId,
              "timestamp" : new Date(timeOfMessage).toString("<YYYY-mm-ddTHH:MM:ss>"),
              "dateCreated": new Date("<YYYY-mm-ddTHH:MM:ss>")
           }, function(err, result) {
            assert.equal(err, null);
            console.log("Inserted a document into the pricing_request collection.");
            callback();
          });
        };
      } // if message contains http, then it is a pricing request


      if ( compareText.includes("phone")) {
        sendTextMessage(senderID, 'Our main phone number is 0785000010');
      }
      switch (messageText) {
        case 'generic':
          sendGenericMessage(senderID);
          break;

        default:
      //
      //    sendTextMessage(senderID, messageText);
      }
}


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
}

function callSendAPI(messageData) {
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: access },
    method: 'POST',
    json: messageData

  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var recipientId = body.recipient_id;
      var messageId = body.message_id;

      console.log("Successfully sent generic message with id %s to recipient %s",
        messageId, recipientId);
    } else {
      console.error("Unable to send message.");
      console.error(response);
      console.error(error);
    }
  });
}
// end of code that i copied from quick start (Seema)

app.listen(app.get('port'), function(){
  console.log('running on port', app.get('port'))
})


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
