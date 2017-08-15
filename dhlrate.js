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
DHLLargeShipRateWT = [50.0,70.0,300.0];
DHLLargeShipRate1 = [5.00,4.8,4.6];


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
  getDhlRate: function( weight ) {

    var index = weight * 2 ;
   index = Math.ceil(index)-1;

  if (weight > 5) {
    if (DHLLargeShipRate.length >= index) {
      return DHLLargeShipRate[index];
    } else {
      // no rate in DHLLargeShipRate - compute based on
      for (i=0 ; i <DHLLargeShipRateWT.length; i++ ) {
        if (weight > DHLLargeShipRateWT[i]) {
          return DHLLargeShipRate1[i];
        }
      }
    }
  } else {
    // weight less than or equal to 5
    return DHLExpressRate[index];
  }

  }
}
