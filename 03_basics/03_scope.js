//Scope ==> Matlab variable kaha tak accessible hai
//{} block ke andar ka variable bahar available nahi hota
  

let name = "Umar"  //Global Scope
if (true) {
    let age = 21   //Local Scope

    console.log(name); //Umar
    console.log(age);  //21
     
}
//yaha name variable bahar bana to ye braces ke bahar aur andar
//dono taraf accessible hai. Lekin age variable braces ke andar bana
//so ye sirf andar accessible hai


let city = "Pune"

if (true) {
    let college = "GH Raisoni"

    console.log(city)
    console.log(college)
}

console.log(city) //Pune
//console.log(college) //it will throw error



/* SAME VARIABLE NAME INSIDE AND OUTSIDE */

let price = 300

if (true) {
    let price = 10

    console.log(price) //10
}

console.log(price) //300
//andar wale ko andar ki value bhar wale ko bahar ki value

let username = "Umar"

if (true) {
    let username = "Rahul"

    console.log(username) //Rahul
}

console.log(username) //Umar


// Global scope wala variable andar ja sakta hai , Lekin Block/Local
//Scope wala variable  bahar nahi ja skta

let college = "GH Raisoni"

if (true) {
    let branch = "IT"

    console.log(college)
    console.log(branch)
}

console.log(college)
//console.log(branch) will throw an error



/***************************VERY IMPORTANT******************** */
if (true) {
    var c = 30
}
console.log(c); //30
//Var global and scope ki boundaries ko respect nahi karta isiliye isko 
//avoid karo. javaScript me var ko avoid hi karoooo


//🧠 One-line takeaway

//Scope decide karta hai ki variable kahan available hoga aur kahan nahi.


