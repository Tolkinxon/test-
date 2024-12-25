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
new URL('https:kun.uz')

// new URL

console.log(new URL('https:kun.uz'));

