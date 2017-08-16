module.exports = {
  getMessage: function( textCode,session )
{
  if (session.userObj && session.userObj.locale &&
    session.userObj.locale.toLowerCase().includes("en")) {
      // english
      switch (textCode) {
        case "1001": 
          return "Please wait... we will try to find the correct category of this item";
          break;
        default:

      }
    } else { // arabic
      switch (textCode) {
        case "1001":
          return "سوف نقوم بايجاد صنف المنتج .. الرجاء الإنتظار";
          break;
        default:

      }
    }

},


// left padding s with c to a total of n chars
padding_left: function( s, c, n)
 {
  if (! s || ! c || s.length >= n) {
    return s;
  }
  var max = (n - s.length)/c.length;
  for (var i = 0; i < max; i++) {
    s = c + s;
  }
  return s;
}

};
