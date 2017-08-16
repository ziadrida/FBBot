module.exports = {

  getButton: function(session,btnType,payload,titleSub1,titleSub2) {
    const  morePricesLbl = ["اسعار اخرى","more prices"]
    const priceDetailsLbl = ["تفاصيل السعر","price details"]
    const confirmOrderLbl = ['اضف للطلب', "Buy"]

    var lang=0;
    if (session.userObj && session.userObj.locale &&
      session.userObj.locale.toLowerCase().includes("en")) {
        lang=1
    }
    var payloadStr = JSON.stringify(payload);

    switch (btnType) {
      case "getMorePrices":
         buttonTitle  = morePricesLbl[lang] + " "+titleSub1+" ";
        break;
      case "getPricingDetails":
          buttonTitle = priceDetailsLbl[lang];
            break;
      case "confirmOrder":
            buttonTitle = confirmOrderLbl[lang];
              break;
      default:
          buttonTitle = "OK"
        }
      return  {
          "type": "postback",
          "title": buttonTitle,
          "payload": payloadStr
        };
  }  ,
  getMessage: function( textCode,session )
{
  if (session.userObj && session.userObj.locale &&
    session.userObj.locale.toLowerCase().includes("en")) {
      // english
      switch (textCode) {
        case "1001":
          return "Please wait... we will try to find the correct category of this item";
        case "1002":
          return "Category not listed above"
          break;
        default:

      }
    } else { // arabic
      switch (textCode) {
        case "1001":
          return "سوف نقوم بايجاد صنف المنتج .. الرجاء الإنتظار";
        case "1002":
          return "الصنف غير مدرج"

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
