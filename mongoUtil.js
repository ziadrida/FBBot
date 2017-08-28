/*
db.categories.createIndex( { category_name: "text", keywords: "text" }, {weights: { category_name: 5, keywords: 10}, name: "TextIndex" })
*/
var MongoClient = require('mongodb').MongoClient;
var mongoSequence = require("./sequence");

var _db;
var mongodbUrl = 'mongodb://heroku_lrtnbx3s:5c5t5gtstipg3k6b9n6721mfpn@ds149412.mlab.com:49412/heroku_lrtnbx3s';

module.exports = {
  // create or get user
  findOrCreateUser: function(senderID, fbprofile, callback) {
    console.log("=====>   in findOrCreateUser - senderID/sessionId:", senderID + '/' + sessionId);
    if (sessions[sessionId] && sessions[sessionId].userObj) {
      console.log("**** findOrCreateUser -  user already known:", sessions[sessionId].userObj)
      return callback(sessions[sessionId].userObj);
    }
    // Peform a simple find and return one  documents
    module.exports.connectToDB(function(err) {
      if (err) return callback(null);

      find(function(resp) {
        console.log(">>>>>>>>>>>>> after find findOrCreateUser ")
        return callback(resp);
      });
    }); // connect

  find = function(callback)   {
    _db.collection('users').find({
      "userId": senderID
    }).limit(1).toArray().then(function(docs) {
      console.log("___user____ docs:", docs);

      if (docs && docs.length > 0) {
        //  console.log("*** docs:", docs);
        //  assert.equal(null, err);
        // user found
        //userObj = docs;
        console.log("user doscs found. length:",docs.length)
        sessions[sessionId].newUser = false;
        sessions[sessionId].userObj = docs[0];
        return callback(docs[0]);
      } else if (docs && docs.length == 0) { // no match for user name
        console.log("user doscs NOT found.")
        //add new user
        var newDoc = {
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
        _db.collection('users').insertOne(newDoc, function(err, result) {
          // assert.equal(err, null);
          if (err) {
              console.log("Error inserting new user info err:",err);
            console.log("Error inserting new user info newDoc:",newDoc);
            return callback(null)
          }
          console.log("Inserted a document into the users table, result:",result);
          console.log("**** New User");
          sessions[sessionId].newUser = true;
          sessions[sessionId].userObj = newDoc;
          return callback(newDoc);
        });
      }
      console.log("Error in  findOrCreateUser - return null ><><><> ERROR <><><> ")

      sessions[sessionId].newUser = false;
      return callback(null);
    });
}
  }, // createOrFindUser

  findUserByName: function(username,callback) {
      console.log("=====>   in findUserByName - username:", username);
    module.exports.connectToDB(function(err) {
      //assert.equal(null, err);
      if (err) return callback(null);

      find(function(doc) {
        console.log(">>>>>>>>>>>>> after find findUserByName ")
        callback(doc);
      });
    }); // connect

    find = function(callback) {

      // Peform a simple find and return one  documents
     let  firstName =  /[^ ]*/.exec(username)[0]
     let  lastName =  /[^ ]*$/.exec(username)[0]
      _db.collection('users').find(
        {
    "$and": [
        {
            "first_name": {
                "$regex": firstName,
                "$options": "i"
            }
        },
        {
            "last_name": {
                "$regex": lastName,
                "$options": "i"
            }
        }
    ]
}
      ).limit(1).toArray().then(function(docs) {
        console.log("___user____ docs:", docs);
          if (docs && docs.length > 1) {
            // expect only one name! not sure how to proceed
            // caller should reply to user that name matches more than one user! Caller is an Admin
            console.log("ERROR - Matched more than one NAME ***************<<><><> ERROR <><><>")
            return callback(docs);
          }
        else  if (docs && docs.length == 1 ) {
          //  console.log("*** docs:", docs);
          return callback(docs);
        } else if (docs && docs.length == 0) { // no match for user name
          // return the same thing! I may decide to do something else.
          return callback(docs);
        }
        return callback(null);
      });
    } // find
  },

  getNextSeq: function(sequenceName, callback) {
    console.log("==========> inside getNextSeq seqName:", sequenceName)
    var seq = mongoSequence(_db, sequenceName);
    seq.getNext(function(err, sequence) {
      console.log("==========>  after getNext :", sequence)

      if (!err) {
        console.log(" >>>>>>>>>>>>>>. return squecne for sequenceName " + sequenceName + " of " + sequence);
        return callback(sequence);
      }
      console.log(" >>>>>>>>>>> error in getNext Seq");
      return callback(-1)
    });
  },

  connectToDB: function(callback) {
    console.log("====> in connectToDB");
    MongoClient.connect(mongodbUrl, function(err, db) {

      if (!err) {
        console.log("  DB CONNECTED"); //, db);
      } else {
        console.log("  ERROR DURING DB CONNECTED");
      }
      _db = db;
      return callback(err);
    });
  },

  getDb: function(callback) {
    //  console.log("====> in getDb,db:",_db);
    var err = null;
    if (!_db) {
      module.exports.connectToDB(function(err) {
        console.log("in getDB - after connectToDB")
          if (err) return callback(null);
        //  callback(err);
      });
    } else {
      console.log("====>  getDb - already connected");
    }
    callback(_db);
    console.log("====> before return getDb,db:"); //,_db);
    return _db;
  },
  insertQuotation: function(senderID, session, quotation, callback) {
    console.log("=================>in  insertQuotation")
    module.exports.connectToDB(function(err) {
        if (err) return callback(null);
      //assert.equal(null, err);
      insert(function(nextVal) {
        console.log(">>>>>>>>>>>>> Done inserting into quotation collection")
        callback(nextVal);
      });
    }); // connect

    // insertDocument copied example fromhttps://docs.mongodb.com/getting-started/node/insert/
    insert = function(callback) {
      module.exports.getNextSeq('quotation', function(nextVal) {
        quotation.quote_no = nextVal;
        console.log("After getNextSeq nextVal:", nextVal);
        _db.collection('quotation').insertOne({
          "senderId": senderID,
          "quotationNo": nextVal,
          "quotation": quotation,
          "user": session.userObj,
          "dateCreated": new Date()
        }, function(err, result) {
          //assert.equal(err, null);
          if (!err) {
            console.log("Inserted a document into the quotation collection.");
            return callback(nextVal);
          }
          return (-1);
        });
      });
    }; // insertMesssageText
  } ,// insert quotation
  findQuotation: function(senderID, quotationNo, callback) {
    console.log("=================>in  findQuotation")
    module.exports.connectToDB(function(err) {
      //assert.equal(null, err);
        if (err) return callback(null);

      find(function(result) {
        console.log(">>>>>>>>>>>>> Done inserting into quotation collection")
        callback(result);
      });
    }); // connect

    find = function(callback) {
    var collection = _db.collection('quotation');
    // Peform a simple find and return all the documents
    collection.find({
      "quotationNo": quotationNo
    }).limit(1).toArray().then(function(docs) {
      console.log("_______ docs:", docs);

      if (docs && docs.length > 0) {
        console.log("*** wit entity:", docs);

    /*    sessions[sessionId].context = {
          "action": "matched_response",
          "intent": entity_name,
          "intentValue": value
        }*/
        return callback(docs);

      } else if (docs && docs.length == 0) { // no match
        // how about creating an entry for it and let someone or figure a way later set the message? great idea!
        return callback(docs);
      }
      return callback(null);
    });
  }// find
  } // insert quotation
};
