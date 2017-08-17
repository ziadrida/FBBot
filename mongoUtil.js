/*
db.categories.createIndex( { category_name: "text", keywords: "text" }, {weights: { category_name: 5, keywords: 10}, name: "TextIndex" })
*/
var MongoClient = require( 'mongodb' ).MongoClient;
var mongoSequence = require("mongo-sequence");

var _db;
var mongodbUrl = 'mongodb://heroku_lrtnbx3s:5c5t5gtstipg3k6b9n6721mfpn@ds149412.mlab.com:49412/heroku_lrtnbx3s';

module.exports = {

  getNextSeq: function(sequenceName) {
    console.log("==========> inside getNextSeq seqName:",sequenceName)
      var seq = mongoSequence(db,sequenceName);
      seq.getNext(function(err,sequence) {
  if (!err) {
    console.log(" >>>>>>>>>>>>>>. return squecne for sequenceName "+sequenceName + " of "+sequence);
    return sequence;
  }
  return -1;
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
  }
};
