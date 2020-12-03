//
// fetch input file somehow raw into this var like this:
//
// var input  = `1234
// 1433
// 222
// ...
// 333
// 1442`;

var input = `1010
1010
505
505`;

input.split("\n").map(x => Number(x)).some((x,i,a) => {return a.slice(1).some(y => {if(y+x == 2020){console.log({"p1":x*y});return true;}}) ? true : false;});
input.split("\n").map(x => Number(x)).some((x,i,a) => {return a.slice(1).some((y,j,b) => {return b.slice(1).some(z => {if(y+x+z == 2020){console.log({"p2":x*y*z});return true;}}) ? true : false;}) ? true : false;});
