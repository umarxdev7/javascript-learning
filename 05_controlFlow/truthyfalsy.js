/*************** TRUTHY AND FALSY VALUES ********************** */        
if ("Umar"){
   console.log("This will run");
   
} //Umar ek non empty string hai, isiliye js ise truthy manegi

if (10){
    console.log("This will run"); //truthy
    
}
if (true){
    console.log("This will run"); //truthy
    
}

//Falsy values
// " " = empty string is a falsy 
// false
// 0
// -0
// ""
// null
// undefined
// NaN
        

let username = ""
if (username){
    console.log("Welcome Umar");
    
}
else{
    console.log("Please enter username");}
