function fib(n){
    if(n<2) return n
    return fib(n-1)+fib(n-2)
}
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(7));

// function print(n){
//     if(n<=1){
//         return 
//     }
//     console.log('ok');
//     print(n-1)
//     console.log(n);
//     print(n-1)
// }
// print(5)