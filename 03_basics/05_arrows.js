const user1 = {
    username: "Umar",
    status : "GOAT",

    welcomeMessage: function (){
        console.log(`Welcome ${this.username}, Good Morning`);
        console.log(this);
        
        
    }
}
user1.welcomeMessage()
//here this.username ka matlab jis object k through
//ye current method execute hora hai uske username ko refer karo

//object ka context change ho sakta hai

user1.username = "Ronaldo"
user1.welcomeMessage()
//samjha bete 

console.log(this);

// js node me and browser me this ke alag alag o/p deta hai
//node me empty parenthesis{} whereas browser me global window

/*********NODE ME {} o/p milta hai*********** */

/*********BROWSER ME WINDOW RELATED o/p milta hai********************* */


function chai() {
    
    console.log(this);
    
}
chai() 


function khari(){
    let username = "Umar"
    console.log(this.username); //undefined because work for object ke andar method only not normal function
    
}
khari()


/*******************ARROW FUNCTION********************** */

const chai1 = () => {
    console.log(this);
    
}
 chai1() //o/p ==> {}


//bas abhi itna yaad rakh , function keyword hatao use jagah => ye lagao
//and function ko variable me store karo

// function multiply (num1, num2) {
//     return num1 * num2
// }
// console.log(multiply(34,32));



const multiply = (num1, num2) => {
    return num1 * num2

}


console.log(multiply(2,3));



// function subtract (num1, num2) {
//     return num1 - num2
// }

const subtract = (a, b) => {
    return a - b
}
console.log(subtract(10,3));

//ye hamne explicit return ke examples dekhe jisme {} + return laganaich padhte

/*********************IMPLICIT RETURN*********************** */
// arrow function me agar bas ek expression return karna hai,
// toh {} and return hata sakte

//eg
// const add = (a, b) => {
//     return a + b
// }
 
const add = (a, b) => a + b
console.log(add(4, 3));



// 🔥 Ek aur important syntax

// Ye bhi exactly same hai:

// const add = (a, b) => (a + b);

// Abhi bas itna samajh: parentheses () mein expression likha toh return likhne ki zarurat nahi.

const square = (num) => {
    return num * num
}

const square1 = (num) => (num * num)
console.log(square1(5));




/***********************TRANSCRIPT************************** */

//iska matlab hai object ko implicit return karna

const user = () => ({username: "Umar"})
console.log(user());

// 🧠 Bas ek rule yaad rakh:

// Object ko implicit return karna hai → object ko () ke andar wrap karo.

// () => ({ object })
//        ↑
//    parentheses


const getUser = () => {
    return {
        username: "Umar",
        status: "GOAT"
    }
}

const getUser1 = () => ({username: "Umar", status: "GOAT"})
console.log(getUser1());

// {} = function body
// () = expression/ object return karne me help





/***************************MIXED PRACTICE*********************** */

// function getProduct (name, price) {
//     return {
//         name: name,
//         price: price
//     }
// }

const getProduct = (name, price) => {
    return {
        name: name,
        price: price
    }
}
console.log(getProduct("Laptop", 50000));
//arrow function



const getProduct1 = (name, price) => ({
    name: name,
    price: price
})
console.log(getProduct1("Laptop", 50000));
// Implicit Return

const getProduct2 = (name, price) => ({name, price})
console.log(getProduct2("Laptop", 50000));
//object + implicit Return (transcript)


// 🧠 Sabse important line:

// Implicit return mein function-body wale {} hatate hain, object wale {} nahi.





/*******************ARROW FUNCTION + ARRAY********************************* */

const numbers = [10, 20, 30] //array
numbers.forEach((num) => {
    console.log(num);
    
})
// here , (num) => {
//     console.log(num);
    
// } ... yaha ye function hai and num is parameter

//forEach array ki values ko one by one function ke parameter num me deta hai

const names = ["Umar", "Ronaldo", "Hitesh"]
names.forEach((name) => {
    console.log(name);
    
})

//we can do this short also 

/**Arrow function me agar ek parameter hai to uska parantheses hata sakte */


// const numbers1 = [10, 20, 30]
// numbers.forEach((num) => {
//     console.log(num);
    
// })

const numbers1 = [10, 20, 30]
numbers1.forEach(num => {
    console.log(num);
    
})


// 🧠 Ab tak arrow function ke rules

// 2+ parameters: () lagana padega

// (a, b) => a + b

// 1 parameter: () hata sakte ho

// num => console.log(num)

// 0 parameters: () lagana padega




/*********************** Summary of Using This******************* */
/*Normal function: this use ho sakta hai. Uska value function kaise call hua uspar depend karta hai.
Arrow function: apna this nahi hota. Ye bahar wale this ko use karta hai.

Bas itna yaad rakh. 🧠

Normal function → apna this ho sakta hai
Arrow function  → apna this nahi */
