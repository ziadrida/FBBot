module.exports = {

  getButton: function(session,btnType,payload,titleSub1) {
    var morePricesLbl = ["اAسعار اخرى","more prices"];
    var priceDetailsLbl = ["Aتفاصيل السعر","price details"];
    var confirmOrderLbl = ["Aاضف للطلب", "Buy"];

console.log("morePrices:",morePricesLbl);

    console.log("*** in getButton btnType/titleSub1:",btnType+'/'+titleSub1)
    var lang=0;
    var buttonTitle = "Ok";
    try {
    if (session.userObj && session.userObj.locale &&
      session.userObj.locale.toLowerCase().includes("en")) {
        lang=1;
      }

      if (typeof titleSub1 == 'undefined' || !titleSub1 ) {
        titleSub1 = "";
      }
      /*
      if (typeof titleSub2 == 'undefined' || !titleSub2 ) {
        titleSub2 = "";
      }*/

    switch (btnType) {
      case 'getMorePrices':
        console.log("case getMorePrices ++++++++++++++++ titleSub1;",titleSub1);
        console.log("case getMorePrices ++++++++++++ morePricesLbl[lang]:",morePricesLbl[lang]);

         buttonTitle  = morePricesLbl[lang] ;//+ " "+titleSub1+" ";
        break;
      case 'getPricingDetails':
        console.log("case getPricingDetails ++++++++++++++++ priceDetailsLbl[lang]:",priceDetailsLbl[lang])
          buttonTitle = priceDetailsLbl[lang];
            break;
      case 'confirmOrder':
            buttonTitle = confirmOrderLbl[lang];
              break;
      default:
          buttonTitle = "OK"
        }
        if (typeof buttonTitle == 'undefined' || !buttonTitle || buttonTitle == "") {
          buttonTitle = 'Next!';
        }

        console.log("<><><> buttonTitle:",buttonTitle);
        var payloadStr = JSON.stringify(payload);
        var btnDef = {
          "type": "postback",
        "title": buttonTitle,
        "payload": payloadStr
        }
        console.log("*** return from getButton btnDef:",btnDef);
      return  btnDef;
      } catch(e) {
        cosole.log("Error in getButton  e:",e);
        btnDef = {
            "type": "postback",
            "title": "Go!",
            "payload": "Error"
          };
        return btnDef;
      }
  }  ,
  getMessage: function(session,textCode )
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
