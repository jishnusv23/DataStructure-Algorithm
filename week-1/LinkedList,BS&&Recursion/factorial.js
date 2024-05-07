// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }

// console.log(factorial(7));
function StringRev(text) {
    if (text.length == 1) {
        return text;
    }
    else {
        return text.slice(-1) + StringRev(text.slice(0, -1));
    }
}
 
console.log(StringRev("SessionStack"));

// let str = "jishnu";
// let nee = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   nee+=str[i]
// }
// console.log(nee);