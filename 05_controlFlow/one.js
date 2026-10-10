/************************** if ************************/

// if (condition) {
//     // code
// }

let age = 21
if(age>=18){
    console.log("You can vote");
    
}


/**************************Comparison Operators************************* */
// < = Less Than
// > = Greater Than
// <=  - Less than or equal to
// >=  - Greater than or equal to
// ==  - Loose equality . Type ko strictly check nahi karta
//  (console.log(5 == "5"); will be true lekin yaha to type badalra)

//  ===  - Strict Equality (5===5) true and (5=="5") will be false

//  !=  - Not equal
let age4 = 21
if(age4>18){
    console.log("Adult");
    
}
if(age4===21){
    console.log("Same Age");
    
}
if(age4<18){
    console.log("Teen");
    
}
if(age4>=25){
    console.log("Big Adult");
    
}

/****************** if without {} ********************* */

//if there is only one statement in if then we can write without {}

if (age4>=18)
    console.log("Adult");
    
//but if there are multiple statements we have to use curly braces 
if (age>=18){
    console.log("Adult");
    console.log("You can vote");
    
    
}



/********************************if-else*********************************/
    let marks = 35
if(marks>=40){
    console.log("You passed");
    
}
else{
    console.log("You failed");
    
}

/************************else-if*************************/
let marks1 = 75
if(marks1>=90){
    console.log("Grade A");
    
}
else if (marks1>=75){
    console.log("Grade B");
    
}
else if(marks1>=50){
    console.log("Grade C");
    
}
else{
    console.log("Fail");
    
}


let age1 = 21
if(age1>=18){
    console.log("You are eligible to vote");
    
}
else{
    console.log("You are not eligible to vote");
    
}



const isLoggedIn = true
if(isLoggedIn){
    console.log("Welcome to the website");
    
}
else{console.log("Please login first");
}

let userLoggedIn = false
if(userLoggedIn) {
    console.log("Welcome to the website");
    
}
else{console.log("Please login first");
}


let balance = 1000
if(balance>=1000){
    console.log("You can withdraw");
    
}
else{
    console.log("Insufficient balance");
    
}


/************************&& - AND Operator - Isme dono conditions true honi chahiye***************/
let balance1 = 5000
let isAccountActive = true
if (balance1>=1000 && isAccountActive){
    console.log("Transaction Allowed");
    
}
else {
   console.log("Transaction not allowed");
    
}


/************************** || - OR Operator********************* */
//isme dono conditions true hona zaruri nahi hai
let isWeekend = true
let isHoliday = false

if(isWeekend || isHoliday){
    console.log("You can relax");
    
}
else{
    console.log("Go to work");
    
}

/*Yahan:

isWeekend → true ✅
isHoliday → false ❌

Ek condition true hai, isliye || ka result true → "You can relax".

🧠 Yaad rakh

&& → Dono true chahiye
|| → Ek bhi true chalega */

let hasCash = false
let hasCard = true
if(hasCash || hasCard){
    console.log("You can pay");
    
}
else{
    console.log("Payment failed");
    
}

/******************************* !-NOT Operator ******************************** */
let isLoggedIn1 = false
if(!isLoggedIn1){
    console.log("Please Login");
    
}

//! value ko ulta kar deta hai. !isloggedIn = meaning agar logged in nahi hai to

let isBlocked = false
if(!isBlocked){
    console.log("Access Granted");
    
}
else {
    console.log("Access Denied");
    
}


/*************************NESTED IF*************************** */

//first condition true rahi tabhi wo neeche jayega
let age2 = 20
let hasTicket = true
if(age2>=18){
    if(hasTicket){
        console.log("You can enter");
        
    }
 else{
    console.log("Buy a ticket first");
    
}
}


let pinCorrect = true
let balance2 = 5000
let withdrawAmount = 2000
 if (pinCorrect){
    if(withdrawAmount<=balance2){
        console.log("Withdrawal Successful");

        
    }
    else{
        console.log("Insufficient Balance");
        
    }
 }


 let isLoggedIn2 = true
 let hasSubscription = false
 if(isLoggedIn2) {
    
    
      if(hasSubscription){
        console.log("Welcome to premium content");
        
        
      }
      else{
       console.log("Please Subscribe");
      
       
      }  
      }
      else{
        console.log("Please Login first");
        

      }
      
 //pehla else anadar ke if wala hai dusra else bahar ke if wala
 //inner else inner if wala outer else outer if wala


let isLoggedIn3 = true
let hasAddress = false

if(isLoggedIn3){
    if(hasAddress){
        console.log("Order Placed");
     
    }
    else{console.log("Please add your address");
    }
   
    }
     else {console.log("Please login first");
}



/******************* NULL and UNDEFINED *************** */
let state; //this will give undefined
let country = null  //this will give null 

let country1 = null
if(country1){
    console.log("Country Present");

    
}
else {console.log("No Country");
}
    //yaha no country chalega kyuki hamne null assign ki value

let username1 = null
if(username1===null){
    console.log("Username is null");
    
}


let email = null
if(email === null){
    console.log("Email is not available");
    
}
else {console.log("Email is available");
}


/**************** NULLISH COALESCING OPERATOR ?? ************** */
//agar left side ki value null ya undefined hai to right side wali
//value use karo
let username2 = null
let result2 = username2?? "Guest"
console.log(result2); //Guest because username 2 null hai

let usernamee = "Umar"
let result3 = usernamee?? "GUEST" 
console.log(result3); //Umar because yaha usernamee available hai

let usernameee = null
let Entry = usernameee ?? "Guest User"
console.log(Entry);

/************************* TERNARY OPERATOR ?: ******************************/
//ye if-else ka short form hota hai
let agea=21
let result= agea>=18? "Adult": "Minor"
console.log(result);
// 🧠 Bas itna yaad rakh:

// ? → agar true
// : → agar false


let isLoggedIn4 = false
let result1 = isLoggedIn4? "Welcome": "Please Login"
console.log(result1);
// condition ? true wala : false wala
//           ↓
//         false
//           ↓
// "Please Login"


