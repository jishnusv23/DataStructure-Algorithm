// var http=require('http')
// function index(requ,resp){
//     resp.write("hei")
//     resp.end()
// }
// function about(request,responce){
//     responce.write("hello")
//     responce.end()
// }
// http.createServer((req,res)=>{
//     if(req.url=='/'){
//         return index(req,res)
//     }else if(req.url=='/about'){
//         return about(req,res)
//     }

const { json } = require("express");



    
// }).listen('8080')


//event module

// const EventEmitter = require('events');

// // Create an instance of EventEmitter
// const myEmitter = new EventEmitter();

// // Event listener
// myEmitter.on('myEvet', (data) => {
//   console.log('Event received with data:', data);
// });

// // Emit the event
// myEmitter.emit('myEvet', { message: 'Hello, World!' });
// Creating a buffer with a size of 5 bytes


// 2buffer
// const buffer = Buffer.alloc(5);

// // Writing data to the buffer
// buffer.write('Hello', 'utf-8');

// // Reading from the buffer
// console.log(buffer.toString('utf-8')); // Output: Hello

// var http=require('http')
// http.createServer((req,res)=>{
//     res.write("hai hello")
//     res.end()
// }).listen(8000,()=>{
//     console.log("server is runing")
// }) 

// read file/
// var fs=require('fs')
// fs.readFile('./sample.txt','utf-8',(err,data)=>{
// if(err){
//     console.error(err)
// }
// console.log(data)
// })


//rename file
// var fs=require('fs')
// fs.rename('./sample.txt','./new.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("file created")
// })


//routing
// function page(request,respnse){
//     respnse.write("haiii")
//     respnse.end()
// }


// // var http=require('http')
// // http.createServer((req,res)=>{
// // if(req.url=='/'){
// //     return page(req,res)
// // }
// // }).listen('5000')
// const buf =Buffer.alloc(4)
// buf.write("heyn")
// console.log(buf.toString())
// // console.log(buf)
// const express= require('express')
// const app=express()
// app.get('/',(req,res)=>{
   
//     res.send("hiiii")

// })



// app.listen(3000,()=>{
//     console.log("started ");
// })

// const express = require('express');
// const app = express();
// var dt;
// // Middleware function
// const timee=((req, res, next) => {
//   console.log('This is a middleware function.');

//   req.reqTime= Date.now();

//   next(); // Call next to pass control to the next middleware in the stack
// });
// app.use(timee)

// // Route handler
// app.get('/', (req, res) => {
//   res.send(req.reqTime);
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });


// const express=require('express')
// const app=express()

// const requesttime=function(req,res,next){
//     req.reqTime=Date.now()
//     next()
// }
// app.use(requesttime)
// app.get('/',(req,res)=>{
//     res.send(`time:${req.reqTime}`)
// })
// app.listen(3000)

// const express = require('express');
// const app = express();

// // Regular middleware
// app.use((req, res, next) => {
//   console.log('This is a regular middleware');
//   // Uncomment the line below to simulate an error
//   // next(new Error('Something went wrong'));
//   next(); // Move to the next middleware or route handler
// });

// Error-handling middleware
// app.use((err, req, res, next) => {
//   console.error('Error-handling middleware:', err.message);
//   res.status(500).send('Something went wrong!');
// });

// // Route handler
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });

// var c

// console.log(c);
// function display(a,b){
//   return new Promise((res,rej)=>{
//     if(a>b){
//       res("success")
//     }else{
//       let err=console.log("Error")
//     }
//   })
// }
// display(1,9).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err.message);
// })
// function add(a,b){
//   return new Promise((res,rej)=>{
//     if(a==0){
//       rej("first number is zero")
//     }else{
//       res(a+b)
//     }
//   })
// }
// add(6,6).then((data)=>{
//   console.log(data);
// }).catch((err)=>{
//   console.log(err);
// })

// var arr=[3,4,6,8]

//  var newArray=arr.reduce((sum,cr)=>{
//     return sum=sum+cr
// },0)
// console.log(newArray);

// var fs=require('fs')

// fs.readFile('./myfile.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log("error");
//     }
//     console.log(data);
// })
// var http=require('http')
// function index(request,response){
//     response.write("heloooo")
//     response.end()
// }

// http.createServer((req,res)=>{
//     if(req.url=='/'){
//         return index(req,res)
//     }
// }).listen(3000)

// var express=require('express')
// const cookieparser=require('cookie-parser')
// const session=require('express-session')
// const app=express()
// app.use(cookieparser())
// app.use(session({
//     secret:"secret",
//     resave:false,
//     saveUninitialized:true
// }))
// app.get('/',(req,res)=>{
//     req.session.user="jishnu"
//     res.send("homa page")
// })
// app.get('/about',(req,res)=>{
//     console.log(req.cookies)
//     res.send(req.session.user)

// })
// app.listen(3000)
// const express=require('express')
// const app=express()
// const session=require('express-session')
// const cookieparser=require('cookie-parser')
// app.use(cookieparser())

// app.use(session({
//     secret:"okk",
//     resave:false,
//     saveUninitialized:true
// }))
// app.get('/',(req,res)=>{
//     req.session.user="jishnu"
//     res.send("new")
// })
// app.get('/home',set,(req,res)=>{
//     // console.log(req.cookies);
//     res.send(req.session.user)
// })
// function set(req,res,next){
// if(req.session.user){
//     next()
// }else{
//     res.send("user not fount")
// }
// }
// app.listen(3000)/
// Create a 1-dimensional array
// let array1d = [1, 2, 3, 4, 5, 6, 7, 8];

// // Specify the number of rows and columns for the 2D array
// let rows = 2;
// let cols = 4;

// Using a loop to fill the 2D array
// let array2d = [];
// for (let i = 0; i < rows; i++) {
//     array2d[i] = array1d.slice(i * cols, (i + 1) * cols);
// }

// // Print the arrays
// console.log("Original 1D array:");
// console.log(array1d);

// console.log("\nReshaped 2D array:");
// console.log(array2d);
// function removeSmallestUntil(arr, target) {
//     let minValue;

//     for (; (minValue = Math.min(...arr)) < target;) {
//         const index = arr.indexOf(minValue);
//         arr.splice(index, 1);
//     }

//     return arr;
// }

// // Example usage:
// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// const targetNumber = 6;

// const result = removeSmallestUntil(numbers, targetNumber);
// console.log(result);

// let arr=[4,5,5,6]
// let ne=arr.reduce((accumeleter,currentvalue )=>{
//     return  accumeleter+currentvalue
// },0)
// console.log(ne);
// var undifine=null
// console.log(typeof undifine);
// console.log(undifine);
// let ne=arr.unshift(4,8)
// console.log(arr);
// function a(){
//     "use strict"
//       x=10
//      console.log(x);
// }
// a()

// function Higherorder(callback){
//   console.log("processing .....");

//   callback()
//   console.log("i think finish");

// }
// function Mycallback(){
//   console.log("just wait ");
// }
// Higherorder(Mycallback)
// Simple callback function\


// const p=new Promise((resolve,reject)=>{
//     resolve("understand ok")
// })
// async function GetData(){
//     return p
// }
//  const newgetData=GetData()
// newgetData.then((res)=>console.log(res))



// const p=new Promise((resolve,reject)=>{
//     resolve("promise value")
// })
// function GetData(){
//     p.then(res=>console.log(res))
// }
// GetData()

// const p=new Promise((resolve,reject)=>{
//     resolve("return promise")
// })
// async function HandlePromise(){
//     const val=await p
//     console.log(val);
// }
// HandlePromise()


// const p=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     resolve("return promise")        
//     }, 2000);
// })

// function GetData(){
//     //js engine will not wait  for promise to be resolved
//     p.then(res=>console.log(res))
//     console.log("first");
// }
// GetData()



// const p=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("promise")
//     }, 2000);
// })
// const b=new Promise((resolve,reject)=>{
// setTimeout(() => {
//     resolve("time this function is first")
// }, 1000);
// })
// async function GetData(){
//     //js engine wait for promise resolved 
//     const val=await p
//     console.log("print first  but after two seconds becues await wiat for promise");
//     console.log(val);
//     const fr=await b
//     console.log("1000secinds not  print first  why ")
//     console.log(fr);
// }
// GetData()


// const p1=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("one");
//     }, 1000);
// })
// const p2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("two");
//     }, 2000);
// })
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//     resolve("three");    
//     }, 3000);
// })
// const p4=new Promise((resolve,reject)=>{
//     reject(new Error("reject"))
// })
// Promise.all([p1,p2,p3]).then((values)=>{
//     console.log(values);
// }).catch((err)=>{
//     console.error(err.message);
// })
// const promises=[p1,p2,p3]
// Promise.allSettled(promises).then((value)=>console.log(value))

//shallow copy 
// const originalObject = { a: 1, b: { c: 2 } };
// const shallowCopy = { ...originalObject };
// shallowCopy.a = 3;
// shallowCopy.b.c=4

// console.log("originalObject:", originalObject);
// console.log("shallowCopy:", shallowCopy);

//deep copy 
// const originalObject = { a: 1, b: { c: 2 } };  
// const deepCopy = JSON.parse(JSON.stringify(originalObject)); 
// deepCopy.a=3
// deepCopy.b.c=5
// console.log(originalObject);
// console.log(deepCopy);
// function Higherorder(name,callback){
//     console.log("higherorder " +name);
//     callback()
// }
// function showcallback(){
//     console.log("callback");
// }
// Higherorder("jishnu",showcallback)

//currying
// function add(x,y,z){
//     return x+y+z
// }
// console.log(add(2,3,4));
// function currying(x){
//     return function (y){
//         return function (z){
//             return x+y+z
//         }
//     }
// }
// console.log(currying(2)(3)(4));
//this currying 

//optional chaing 
// const user={
//     name:"jishnu",
//     address:{
//         city:"calicut"
//     }
// }
// console.log(user.address?.city)function sample(){
//     setInterval(()=>{
//         console.log("hey");
//     },2000)
// }
// sample()
//closure
// function clouser(outerarg){

//     function clouserineer(innerarg){
//         return outerarg+innerarg
//     }
//     return clouserineer

// }
// const sample=clouser(5)
// console.log(sample(4));
// console.log(sample(3));

// function get1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             // console.log("First");
//             resolve("get1")
//         }, 1000);
//     })
// }
// function get2(bread){
//     return new Promise((resolve,reject)=>{
//          let a=10
//         setTimeout(() => {
//             // console.log("get2");
//             resolve("get2")
            
//         }, 1000);
//         let err=new Error("error....")
//        if(a==10)  reject(err)
//     })
// }
// function get3(fik){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
           
//             resolve("get3")
//         }, 1000);
//     })
// }
// get1().then(get1)
//     .then(get2)
//     .then(get3)
//     .then(finalproduct=>console.log(`enjoy ${finalproduct}`))
//     .catch(error=>console.log(error.message))

//map method obbject
// const company=new Map([
//     ["name","GFG"],
//     ["name","200"],
//     ["name","education"]
// ])
// function print(key,value){
//     console.log(value+"=>"+key)
// }
// company.forEach(print)

// filter
// const students=[
//     {name:"jishnu",grade:96},
//     {
//         name:"ajith",grade:89
//     },
//     {name:"alix",grade:85},{
//         name:"aabv",grade:67
//     }
// ]
// const studenstgrade=students.filter(student=>student.grade>=90)
// console.log(studenstgrade);
// const mapob=new Map([
//     ["name","jishnu"],
//     ["name","ajith"],
//     ["name","vishnu"]
// ])
// function fo(key,value){
//     console.log(value+"=>"+key);
// }
// mapob.forEach(fo).


// let obj1={
//     name:"jsihnu",
//     place:"vadaara",
//     salary:40004
// }
// let obj2=obj1
// console.log(obj1)
// console.log(obj2)
// console.log("...........after modification ..........");
// obj2.name="hdfjkf"
// console.log(obj1)
// console.log(obj2);;

// const add=(a,b,c)=>a+b+c;
// console.log(add(2,3,4));
// const abc=(a)=>{
//     return (b)=>{
//         return (c)=>{
//               return a+b+c
//         }
//     }
// }
// console.log(abc(2)(3)(4));
// var arr = ["a", "á", "b","c","A","Á","B","Z","f"];

// arr.sort((a, b) => b.localeCompare(a, 'es', {sensitivity: 'base'}))


// console.log(arr)
// const { AsyncLocalStorage } = require('async_hooks')
// const { log } = require('console')
// const express=require('express')
// const fs=require('fs')
// const { loadavg } = require('os')
// const port=process.env.PORT||3000
// const app=express()
// app.get('/',(req,res,next)=>{
//     console.log("middleware");
//     next()

// })
// app.get("/",(req,res)=>{
//     fs.readFile('./new.txt','utf-8',(err,ress)=>{
// if(err){
//     console.log(err);
// }else{
//     console.log(ress);
//     res.send(ress)
// }
//     })
// })
// app.listen(port,()=>console.log("running"))
// function dog(name){
//     this.name=name
// }
// // console.log(Object.prototype.isPrototypeOf(dog.prototype));
// // let duck=new dog("vishnu")
// dog()
// console.log(dog);
// console.log(dog.hasOwnProperty("name"));
//  employee(firstname,secondname){
//     this.firstname=firstname
//     this.secondname=secondname
// }
// console.log(employee.prototype);
// employee.prototype.fullname= function(){
//     return this.firstname+" "+this.secondname
// }
// var emp1=new employee("jishnu","sv")
// var emp2=new employee("ajith","glady")
// console.log(emp1.fullname());
// console.log(e

// const a=new Set()
// a.add(1)
// a.add('hello')
// a.add('hey')
// a.add(1)
// a.forEach((val)=>console.log(val))

// let data={
//     name:"jishnu",
//     place:"vadakara"
// }
// function datafetch(city){
//     console.log(this.name+" "+this.place+" "+city);
// }
//     datafetch.apply(data,["calicut"])


// let data={a:3,b:4,c:5}
// for(const property in data){
//     console.log(`${property}: ${data[property]}`);
// }

// const cart=["book","pant","shart"]
// createOrder(cart).then((orderid)=>{
//     return orderid
// }).then((orderid)=>{
//     return procedtopayemetn(orderid)
// }).then((payment)=>{
//     console.log(payment);
// }).catch((err)=>{
//     console.log(err.message);
// })
// function createOrder(cart){
//     const p=new Promise((resolve,reject)=>{

//         if(!Validite(cart)){
//             const err=new Error("cart is not valid")
//             reject(err)
//         }
//         const orderid=22323
//         if(orderid){
//             setTimeout(() => {
//                 resolve(orderid)
//             }, 2000);
//         }
//     })
//     return p
// }

// function procedtopayemetn(orderid){
//     return new Promise((resolve,reject)=>{
//         resolve("payement success fully")
//     })
// }

// function Validite(cart){
//     return false
// }

// let arr=[3,5,6,7,8,9,5,4,3,2,3]
// let i=0
// let sum=0
// while(i<arr.length){
//     sum+=arr[i]
//     i++
// }
// console.log(sum);

// let a = 10
// let c = 19
// [a, c] = [c, a]
// console.log(a)
// console.log(c)\
// "use strict"
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }
    Add(value){
        const node=new Node(value)
        if(this.isEmpty){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
}
const result=new LinkedList()
console.log(result.isEmpty());

result.Add(10)
result.Add(20)
result.Add(30)
console.log(result.getSize());
