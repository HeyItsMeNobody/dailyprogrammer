var barcode = "69792911003";
var chars = barcode.split('');
var eother = chars.filter((element, index) => {return index % 2 === 0});
chars.unshift('test');
var other = chars.filter((element, index) => {return index % 2 === 0});
other.shift();

var eotherj = eother.join(" + ");
var eotherc = eval(eotherj);
var eothercc = eotherc * 3

var otherj = other.join(" + ");
var otherc = eval(otherj);

var others = otherc += eothercc;

var m  = others / 10;
var md = String(m).substring(2);
var ms = 10 - md;

console.log(ms)


console.log("eother: " + eother + " other: " + other)