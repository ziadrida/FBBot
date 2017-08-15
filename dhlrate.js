var aqabaRate = [
4.00,
3.60 ,
3.20 ,
2.80 ,
2.40 ,
2.32 ,
2.20 ,
2.00 ,
1.60 ,
1.20 ,
1.04 ,
0.96 ,
0.80 ,
0.72 ,
0.68 ,
0.64 ,
0.60
];

var aqabaRateWt = [
  0,
0.50,
0.75 ,
1.00 ,
2.00 ,
5.00 ,
10.00 ,
15.00 ,
25.00 ,
30.00 ,
50.00 ,
90.00 ,
100.00 ,
120.00 ,
150.00 ,
170.00 ,
180.00 ,
1000000000
];

var DHLLargeShipRate = [
9.223,
13.334,
20.334,
27.334,
33.334,
35.334,
37.334,
39.334,
41.334,
43.334,
45.334,
47.334,
49.334,
51.334,
53.334,
55.334,
57.334,
59.334,
61.334,
63.334,
67.334,
71.334,
75.334,
79.334,
83.334,
87.334,
91.334,
95.334,
99.334,
103.334,
107.334,
111.334,
115.334,
119.334,
123.334,
127.334,
131.334,
135.334,
139.334,
143.334
];

var DHLLargeShipRateWT = [50.0,70.0,300.0,10000000000];
var DHLLargeShipRate1 = [5.00,4.8,4.6,4.6];
var DHLExpressRate = [
  6.304,
  6.304,
  9.304,
  12.304,
  15.304,
  18.304,
  21.304,
  24.304,
  27.304,
  30.304
];

module.exports = {
    getAqabaRate: function( weight ) {
      for (i=1 ; i <aqabaRateWt.length; i++ ) {
        if (weight < aqabaRateWt[i]) {
          console.log("****** Aqaba Rate:",aqabaRate[i-1])
          return aqabaRate[i-1];
        }
    }
  },

  aramexShipRate: function(weightKG) {
    var aramexFirst05 = 8.40; // JD
    var aramexMultiple = 6.80; // JD per 1/2 KG
    var price = aramexFirst05+((Math.ceil(weightKG*2)/2.0)-0.5)*aramexMultiple
  console.log("Calulcated Aramex price:",price);
    return price; // JD
  },

  getDHLRate: function( weight ) {

    var index = weight * 2 ;
   index = Math.ceil(index)-1;

  if (weight > 5) {
    if (DHLLargeShipRate.length >= index) {
      return DHLLargeShipRate[index]*1.13;
    } else {
      // no rate in DHLLargeShipRate - compute based on
      for (i=1 ; i <DHLLargeShipRateWT.length; i++ ) {
        if (weight < DHLLargeShipRateWT[i]) {

          return DHLLargeShipRate1[i-1]*1.13;
        }
      }
    }
  } else {
    // weight less than or equal to 5
    return DHLExpressRate[index]*1.13*1.16; // include surcharge and tax
  }

  }
}
