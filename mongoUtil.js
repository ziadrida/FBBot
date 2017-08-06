var MongoClient = require( 'mongodb' ).MongoClient;

var _db;
var mongodbUrl = 'mongodb://heroku_lrtnbx3s:5c5t5gtstipg3k6b9n6721mfpn@ds149412.mlab.com:49412/heroku_lrtnbx3s';

module.exports = {

  connectToDB: function( callback ) {
      console.log("====> in connectToDB");
    MongoClient.connect( mongodbUrl, function( err, db ) {
      if(!err) {
        console.log("  DB CONNECTED");
      } else {
        console.log("  ERROR DURING DB CONNECTED");
      }
      _db = db;
      return callback( err );
    } );
  },

  getDb: function(callback) {
    console.log("====> in getDb");

    if (!_db) {
      module.exports.connectToDB(function(err) {
        callback(err);
      });
    } else {
        console.log("====>  getDb - already connected");
    }

    return _db;
  }
};
