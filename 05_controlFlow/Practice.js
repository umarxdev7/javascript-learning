/************************ PRACTICE ************************* */
let ageb = 21
let isLoggedInn = true
let hasSubscriptionn = true

if (ageb>=18 && isLoggedInn) {
    if(hasSubscriptionn){
        console.log("Welcome to premium");
    }
    else  {
        console.log("Please Subscribe");
        
    }
   
        
    }
     else if (!isLoggedInn){
        console.log("Please Login");

    
}
else {console.log("Access Denied");
} 


let choicee = 3
switch(choicee){
    case 1:console.log("Start Game");
    break

    case 2: console.log("Load Game");
    
    break

    case 3 : console.log("Settings");
    
    break 

    case 4: console.log("Exit Game");
    
    break

    default: console.log("Invalid Choice");
    
}


let usernamec = ""
let savedName = null
if(usernamec){
    console.log("Welcome User");
    
}
else{
    let finalName = savedName?? "Guest"
    console.log(`Welcome ${finalName}`);
    
}


let isLoggedIna = true
let isBlockeda = false
let final = isLoggedIna &&  !isBlockeda? "Access Granted": "Acces Denied"
console.log(final);

    
    
   