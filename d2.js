//
// fetch input file somehow raw into this var like this:
//
// var input  = `7-8 c: vwcvkcct
// 4-10 d: lsmdffzdsrk
// 2-3 p: sxpg
// ...
// 4-11 p: rzlgxshhpbp
// 1-4 b: qbbbbbbbbbbb`;

var input = `7-8 c: vwcvkcct
4-10 d: lsmdffzdsrk
2-3 p: sxpg
4-11 p: rzlgxshhpbp
1-4 b: qbbbbbbbbbbb`;

console.log({"p1":input.split("\n").map(x=>{hx = x.split(": "); return hx}).map(y=>{h=y[0].split(" ");hl=h[0].split("-");return{min:Number(hl[0]),max:Number(hl[1]),let:h[1],pw:y[1]}}).filter((z)=>{hm = z.pw.match(new RegExp(z.let, "g"));return hm?hm.length<z.min?false:hm.length>z.max?false:true:false;}).length});
console.log({"p2":input.split("\n").map(x=>{hx = x.split(": "); return hx}).map(y=>{h=y[0].split(" ");hl=h[0].split("-");return{min:Number(hl[0])-1,max:Number(hl[1])-1,let:h[1],pw:y[1]}}).filter((z)=>{return (z.pw[z.min] === z.let && z.pw[z.max] === z.let)||(z.pw[z.min] !== z.let && z.pw[z.max] !== z.let)?false:(z.pw[z.min] !== z.let && z.pw[z.max] === z.let) || (z.pw[z.min] === z.let && z.pw[z.max] !== z.let)?true:false;}).length});
