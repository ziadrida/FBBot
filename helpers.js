module.exports = {
leftPadTextArea: function( textArea,char,len )
{
  var paddedArea;
var lines= textArea.split('\n');
for (i=0; i< lines.length; i++) {
  paddedArea = paddedArea + module.exports.padding_left(lines[i],char,len) + '\n';
//console.log(lines[i]);
}

return paddedArea;
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
