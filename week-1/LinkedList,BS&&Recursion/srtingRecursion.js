function stringR(text) {
  if (text.length == 1) {
    return text;
  } else {
    return text.slice(-1) + stringR(text.slice(0, -1));
  }
}
console.log(stringR('jishnu'))

// function num(number) {
//   if (number >=11 ) {
//     return;
//   }
//   console.log(number);
//   return num(number + 1);
// }
// num(1);

// let str='jishnu'
// let str1=''
// for(let i=str.length-1;i>=0;i--){
//     str1+=str[i]
// }
// console.log(str1);