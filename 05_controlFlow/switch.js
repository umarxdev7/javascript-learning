/************************ SWITCH ************************ */
//jab ek value ko multiple values ke sath compare karna ho tab use karte isko

let day = 2

switch (day){
    case 1:
        console.log("Monday");
        break

    case 2:
        console.log("Tuesday");
        break
    

    case 3:
        console.log("Wednesday");
        break

    default:
        console.log('Invalid Day');
}        // o/p =  Tuesday

// switch → kis value ko check karna hai
// case   → possible value
// break  → switch se bahar
// default → koi case match nahi hua

let choice = 2
switch(choice){
    case 1:
        console.log("Start Game");
        break

    case 2: console.log("Load Game");
    break

    case 3: console.log("Exit Game");
    break

    default : console.log("Invalid Choice"); }
   