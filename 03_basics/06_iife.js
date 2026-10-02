//Immediately Invoked Funciton Expressions

//aisa function jo banate hi turnat execute ho jaye

(function(welcome){
    console.log("Welcome Umar");
    
})();


//(function(){ ... })(); = function banao + turant chalao.

(function chai(){
    console.log("Chai is ready");
    
})(); 



(function welcome(name){
    console.log(`Welcome ${name}`);
    
})("Umar");

//iife's me semicolon lagana atiavashayak haiiiiii..special casseeeee



/****************GLOBAL SCOPE POLLUTION*************** */

//iife uske andar ke variable ko global scope variables se separate
//kar deta hai to avoid pollution


(function chai() {
    const username = "Umar";
    console.log(username);
})(); //Umar

//username iife ke andar bana hai isiliye bahar available nahi hai

//IIFE ke andar ka variable → bahar access nahi kar sakte. 🔒

//console.log(username);  ...will throw an error



/***********************IIFE + Arrow Function**************** */

// (function welcome() {
//     console.log("Welcome Umar");
// })();

(() => {
    console.log("Welcome Umar");
    
}) ();
// () => {} = arrow function
// Outer() = Function ko expression banaya
// Last () = Turant execute kiya

((name)=>{
    console.log(`Welcome ${name}`);
    
})("Ronaldo");



//Why semicolons in IIFE
//Ek IIFE ke turant baad doosra IIFE aa raha ho → pehle IIFE ko ; se terminate karna safe hai.

(function chai() {
    console.log("Chai");
})();

(function coffee() {
    console.log("Coffee");
})();


/********************Named v/s Unnamed IIFE************** */

// 1️⃣ Named IIFE

// Function ka naam diya hua hai:

// (function chai() {
//     console.log("Chai is ready");
// })();

// Yahan chai = function ka naam.


// 2️⃣ Unnamed IIFE

// Function ka naam nahi diya:

// (function() {
//     console.log("Chai is ready");
// })();

// Bas difference itna hi hai:

// Named: function chai()

// Unnamed: function()


(function welcome() {
    console.log("Welcome Umar");
})();

(function (){
    console.log("Welcome Umar");
    
})();


/*********************Practice******************* */

(function name(){
    console.log("Chai is ready");
    
})();


(function (){
    console.log("Welcome Umar");
    
})();


(function (name){
    console.log(`Welcome ${name}`);
    
})("Ronaldo");


(()=>{
    console.log("Siuuuuuuu!");
    
}) ();


((player)=>{
    console.log(`My favourite player is ${player}`);
    
})("Ronaldo");

(function raaz(){
    const secret = '12345';
    console.log(secret);
    
})();

//console.log(secret); //error

(function chai(){
    console.log("Chai");
    
})();
(function coffee(){
    console.log("Coffee");
    
})();


(function welcome(name){
    console.log(`Welcome ${name}, let's learn JavaScript`);
    
})("Umar");


