// function ObjectCreator(name, sureName, age, address){
//     this.name = name;
//     this.sureName = sureName;
//     this.age = age;
//     this. address = address;
// }

// ObjectCreator.prototype.sayHello = function(){
//     console.log('hello world');
// }


// const result = new ObjectCreator('tolkinxon', 'soliyev', 26, 'samarkand');

// result.sayGood = function(){
//     console.log('good');
// }

// result.prototype.sayWorld = function() {
//     console.log('world');
    
// }

// const obj = {
//     hello(){
//         console.log('hello');
//     },
//     world: function(){
//         console.log('world');
//     },
//     sayHello: () => {
//         console.log('world');
//     }
// }

// console.log(obj);

 
// class Test {
//     sureName = "soliyev"
//     name = 'tolkinxon'
//     constructor(address, name){
//         this.name = name
//         this.address = address
//     }
//     sayHello(){
//         return `${this.name} lives in ${this.address}`
//     }
// }

// class Test2 extends Test {
//     constructor(address, name){
//         super(address, name)
//     }
//     sayHello(){
//         return `${this.address} related to ${this.name}`
//     }
// }
// console.log(new Test("samarkand",'tolkin').sayHello(), new Test2('turon street', 'soliyev').sayHello());

// class Test{
//     #variable = 'variable'
//     sureName = 'soliyev'
//     constructor(name, variable){
//         this.name = name
//         this.sureName = this.sureName
//         this.#variable = variable
        
        
//     }

//     get variable(){
//         return this.#variable
//     }
//     set variable(type){
//         this.#variable = type
        
//     }
    
// }

// class Test2 extends Test {
//   createNewVariable(type){
//     this.war = type
//   }

// }

// class Test3 extends Test2 {
//   }

// const result = new Test2('tolkinxon', 26)
// const result2 = new Test2('tolkinxon', 26)
// result2.createNewVariable('war')
// console.log(result2);


// class myClass {
//     static PI = 3.14

//     pi = 'hello'
//     constructor(pi){
//         this.pi = pi
//     }

//     static show(){
//       return  this.pi
//     }
// }

// console.log(myClass.show());


// class Test {
//   #age = 26
//   constructor(name, sureName, address){
//     this.name = name
//     this.sureName = sureName
//     this.address = address
//     this.#age = address.length
    
//   }

//   show(){
//     return `${this.name} ${this.sureName} lives in ${this.address}.`
//   }

//   get privateVariable () {
//     return this.#age
//   }

//   set privateVariable(type) {
//     this.#age = type
//   }
// }

// class Test2 extends Test {
//   constructor(name, sureName, address, workPlace){
//     super(name, sureName, address)
//     this.workPlace = workPlace
//   }

//   show(){
//     return `${this.name} ${this.sureName} lives in ${this.address}. Worked in ${this.workPlace}`
//   }
// }

// const result = new Test('Tolkinxon', "Soliyev", "Jomboy", "Toshkent");
// result.privateVariable = 7
// console.log(result.show());


// class Test {
//   something = 'something'
//   static #age = 26;
//   static sayHello(){
//     return this.#age
//   }


// }

// console.log(Test.sayHello());


// try {
//   if(a) ReferenceError('a is not defined')
// }
// catch(error){
//   console.log(error instanceof Error);
  
// }
// 
// console.log(new ReferenceError('hello') instanceof Error);

// class Test {
//     constructor(name){
//         this._name = name
//     }

//     sayHello(){
//         console.log('hello world');
        
//     }
//     ['hello world'](){
//         console.log('world hello');
        
//     }
// }


// const result = new Test('tolkinxon')
// console.log();
// result["hello world"]()

// class Animal {
//     constructor(name){
//         this.speed = 0
//         this.name = name
//     }

//     run(speed){
//         this.speed = speed
//         return `${this.name} are runnig whidth ${this.speed} km/h`
//     }

//     stop(){
//         this.speed = 0
//         return `${this.name} is keep standing`
//     }
// }

// const result = new Animal('Lion');

// Object.assign(Animal.prototype, {newFunction(){console.log('hello world');
// }})

// console.log(result);





// const obj = {
//     name: 'tolkinxon'
// }

// const proxy = new Proxy(obj,{
//     set: function(obj, key, value){
//         if(obj[key]) obj[key] = value
//     }
// })

// proxy.set(obj, 'name', 'hello')

// // Reflect.set(obj, 'name', "soliyev")

// console.log(proxy);

// new URL

// import http from 'http';
// import fetch from 'node-fetch';
// import { readFileSync } from 'fs'
// import path from 'path'


// const PORT = process.env.PORT || 5000;

// const users = readFileSync(path.resolve('database', 'users.json')) ? 
//               JSON.parse(readFileSync(path.resolve('database', 'users.json'))) : []


// const query = (path, req) => {
//     const url = new URL(path, `http://${req.headers.host}`)
//     req.query = Object.fromEntries(url.searchParams);
//     return true
// }


// const server = http.createServer((req, res)=>{
//     let method = req.method.toUpperCase().trim();
//     let path = req.url.toLowerCase().trim();

//     if(method == "GET" && path.startsWith('/users')) {
//         query(path, req);
//         const result = [];
//         for(let user of users ){
//             req.isMatch = true
//             for(let key in req.query){
//                 if(user[key] != req.query[key]) {req.isMatch = false; break;}
//             }
//             if(req.isMatch) result.push(user)
//         }
//         return res.end(JSON.stringify(result))
//     }
    
// })

// server.listen(PORT, ()=> {
//     console.log('server initialized!');
// });


// fetch('http://localhost:5000/users?name=tolkinxon&age=21')
//     .then(res => res.json())
//     .then(data => console.log(data));

// const url = new URL('https://kun.uz?name=tolkinxon')

// console.log(url.searchParams.get('name'));


// const buffer = new ArrayBuffer(10);
// const uitnt8Arry = new Uint16Array(buffer)

// let namE = 'tolkinxon'.split('')
// namE = namE.map(item => item.charCodeAt(0))

// namE.forEach((element,index) => {
//     uitnt8Arry[index] = element
// });

// const decoder = new TextDecoder('utf-8')


const arrBuffer = new ArrayBuffer(10);
const dw = new DataView(arrBuffer);


dw.setInt8(0, 111);
dw.setInt8(1,73);

// console.log(dw);
// console.log(dw.getInt8(0));

// console.log(String.fromCharCode(dw.getInt8(0)));
const decode = new TextDecoder('utf-8')
console.log(decode.decode(dw));














