
// FB api
//var FB = require('fb');
  //  fb = new FB.Facebook(options);
// mongodb
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://heroku_lrtnbx3s:5c5t5gtstipg3k6b9n6721mfpn@ds149412.mlab.com:49412/heroku_lrtnbx3s';

//add all of code
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
// get token from the environment
const token = process.env.FB_VERIFY_TOKEN
const access = process.env.FB_ACCESS_TOKEN

app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send ('Hello - It is now working!')
})

app.get('/seema', function (req, res) {
  res.send ('Hello - Seema!')
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
    console.log("------> EVENT STRUCTURE:")
    console.log(JSON.stringify(event));
  console.log(JSON.stringify(message));
    console.log("POSTBACK:--->");
  console.log(JSON.stringify(event.postback));
  var messageId = message.mid;

  var messageText = message.text;
  var messageAttachments = message.attachments;


 // check if event is a postback
 if (event.postback) {

    determineResponse(senderID,event)  ;
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
  var userObj = JSON.parse(compareText);
  console.log ('action = ',userObj.action);
  console.log ('price in USD:',userObj.price)

  let myText = ""
  if ( event.postback ) {

    myText = event.postback.toLowerCase();
      console.log('Text::',myText);
  }

      // If we receive a text message, check to see if it matches a keyword
      // and send back the example. Otherwise, just echo the text we received.

//

// check if postback
    if ( myText.includes ("yes_confirm_order") ) {
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

    //
  } else if (myText.includes("not_now") ) {
    sendTextMessage(senderID,"WHY WHY WHY???!!!");
    // ask WHY
    // insert follow up to why user did not buy
  }


  if (compareText.includes ("button") ) {
      sendButton(senderID, 'Would you like to confirm order?');
  }


  /*---------------------------------
   check if this is a pricing request
   ---------------------------------*/
  if (compareText.includes ("*pr") ) {
    sendTextMessage(senderID, 'I understand that you want me to give you a price .. please wait');
    let itemPrice = 100
      sendTextMessage(senderID, getRegularAmmanPrice(itemPrice));
  }

      // if message contains http, then it is a pricing request
  if (compareText.includes ("http") ) {
        sendTextMessage(senderID, 'Please wait! ... Pricing now...');



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
        "":{
          "template_type":"button",
          "text":btnText,
          "buttons":[
            {
              "type":"postback",
              "title":"Yes",
              "":"yes_confirm_order"
            },
            {
              "type":"postback",
              "title":"Not Now",
              "":"not_now"
            }
          ]
        }
      }
    }
}
  callSendAPI(messageData);
}


function sendTextMessage(recipientId, messageText) {
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
function getRegularAmmanPrice(price) {
  // input price is in USD
  // return price in JD
  console.log('in getRegularAmmanPrice *********** ')
  return price * 2
}
