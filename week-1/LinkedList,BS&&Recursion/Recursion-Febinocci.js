// function factorial(num){
//     if(num<=0) return 1
//     return num*factorial(num-1)
// }
// console.log(factorial(5));

function fib(num){
    if(num<=0){
        return 1
    }
    return fib(num-1)+fib(num-2)
}
console.log(fib(5));


// let arr = [];
// for (let i = 5; i > 1; i++) {
//   arr.push(i - 1);
// }
// console.log(arr);

