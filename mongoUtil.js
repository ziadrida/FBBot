var MongoClient = require( 'mongodb' ).MongoClient;

var _db;
var mongodbUrl = 'mongodb://heroku_lrtnbx3s:5c5t5gtstipg3k6b9n6721mfpn@ds149412.mlab.com:49412/heroku_lrtnbx3s';

module.exports = {

  connectToDB: function( callback ) {
    MongoClient.connect( mongodbUrl, function( err, db ) {
      console.log("  DB CONNECTED")''
      _db = db;
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};
