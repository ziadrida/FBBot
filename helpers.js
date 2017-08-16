module.exports = {

  getButton: function(session,btnType,payload,titleSub1) {
    const morePricesLbl = ["اسعار تبدأ من ","more prices"];
    const priceDetailsLbl = ["تفاصيل السعر","price details"];
    const confirmOrderLbl = ["اضف للطلب", "Buy"];

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

         buttonTitle  = morePricesLbl[lang] + " "+titleSub1+" ";
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
  } ,

getMessage: function(session,textCode,valObj ) {
  if (session.userObj && session.userObj.locale &&
    session.userObj.locale.toLowerCase().includes("en")) {
      // english
      switch (textCode) {
        case "1001":
          return "Please wait... we will try to find the correct category of this item";
        case "1002":
          return "Category not listed above"
          break;
        case "1003":
          return  "Personal express price 3-5 days: "+valObj.val1 + " JOD"  ;
        case "1004":
            return "Amman Price 7-14 days: "+valObj.val1 + " JOD" ;

        case "1010":
            return  "Personal express price 3-5 days: "+valObj.val1 + " JOD" +
            "\n"+
            "Amman Price 7-14 days: "+valObj.val2 + " JOD" +
            "\n"+
            "Aqaba price 14-24 days: "+valObj.val3 + " JOD" +
            "\n"+
            "Aqaba personal 5-7 days days: "+valObj.val4 + " JOD" ;


        default:

      }
    } else { // arabic
      switch (textCode) {
        case "1001":
          return "سوف نقوم بايجاد صنف المنتج .. الرجاء الإنتظار";
        case "1002":
          return "الصنف غير مدرج"
        case "1003":
        btnTxt ="\n" +
        "   سعر الطلب الخاص 3-5 ايام: "+
        valObj.val1 +  " دينار " ;

        return btnTxt;
        case "1004":
        btnTxt =  "\n" +
        "   سعر الطلب 7-14 يوم: "+
        valObj.val1 +  " دينار " ;

        return btnTxt;
        case "1010":
        btnTxt =
        "   سعر الطلب الخاص 3-5 ايام: "+
        valObj.val1 +  " دينار " ;
        btnTxt = btnTxt + "\n" +
        "   سعر الطلب 7-14 يوم: "+
        valObj.val2 +  " دينار " ;
        btnTxt = btnTxt + "\n" +
        "   سعر الطلب للعقبة 14-24 يوم: "+
        valObj.val3 +  " دينار " ;
        btnTxt = btnTxt + "\n" +
        "   سعر الطلب الخاص للعقبة 5-7 يوم: "+
        valObj.val4 +  " دينار " ;
        return btnTxt;

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
