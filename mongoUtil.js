/*
db.categories.createIndex( { category_name: "text", keywords: "text" }, {weights: { category_name: 5, keywords: 10}, name: "TextIndex" })
*/
var MongoClient = require( 'mongodb' ).MongoClient;
var mongoSequence = require("mongo-sequence");

var _db;
var mongodbUrl = 'mongodb://heroku_lrtnbx3s:5c5t5gtstipg3k6b9n6721mfpn@ds149412.mlab.com:49412/heroku_lrtnbx3s';

module.exports = {

  getNextSeq: function(sequenceName,callback) {
    console.log("==========> inside getNextSeq seqName:",sequenceName)
      var seq = mongoSequence(_db,sequenceName);
      seq.getNext(function(err,sequence) {
        console.log("==========>  after getNext :",sequence)
        console.log("==========>  err getNext :",err)
        if (!err) {
          console.log(" >>>>>>>>>>>>>>. return squecne for sequenceName "+sequenceName + " of "+sequence);
          return callback(sequence);
        }
        console.log(" >>>>>>>>>>> error in getNext Seq");
        return callback(-1)
      });
},

connectToDB: function( callback ) {
      console.log("====> in connectToDB");
    MongoClient.connect( mongodbUrl, function( err, db ) {

      if(!err) {
        console.log("  DB CONNECTED");//, db);
      } else {
        console.log("  ERROR DURING DB CONNECTED");
      }
        _db = db;
      return callback( err );
    } );
  },

  getDb: function(callback) {
  //  console.log("====> in getDb,db:",_db);
    var err = null;
    if (!_db) {
      module.exports.connectToDB(function(err) {
         console.log("in getDB - after connectToDB")
      //  callback(err);
      });
    } else {
        console.log("====>  getDb - already connected");
    }
    callback(_db);
      console.log("====> before return getDb,db:");//,_db);
    return _db;
  },
  insertQuotation:function(senderID,session,quotation,callback) {
     console.log("=================>in  insertQuotation")
     module.exports.connectToDB(function(err) {
       //assert.equal(null, err);
      insert(function() {
      console.log(">>>>>>>>>>>>> Done inserting into quotation collection")
      callback();
    });
  }); // connect

  // insertDocument copied example fromhttps://docs.mongodb.com/getting-started/node/insert/
 insert = function( callback) {
   module.exports.getNextSeq('quotation',function(nextVal) {
     console.log("After getNextSeq nextVal:",nextVal);
    _db.collection('quotation').insertOne({
      "senderId": senderID,
      "quotationNo": nextVal ,
      "quotation": quotation,
      "user": session.userObj,
      "dateCreated": new Date()
    }, function(err, result) {
      //assert.equal(err, null);
      console.log("Inserted a document into the quotation collection.");
      callback();
    });
  });
  }; // insertMesssageText


}

};
