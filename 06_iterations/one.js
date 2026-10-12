//for
for(let i = 1; i<=5; i++){
    console.log(i);
    
}


for (let f = 1; f<=10; f++){
    console.log(f);
    
}
//for(initialization; condition ; ++)

for(let i = 10; i>=1; i--){
    console.log(i);
    
}

for(i = 2; i<=10; i+=2  ){ //i+=2, 2 add kar raha hai ye even numbers dega
    console.log(i);
}

for(let i = 1; i<=10; i+=2){
    console.log(i);
    
}//printing odd nums from 1 to 10


//we want 5, 10 ,15..,25 o/p
for(let i = 5; i<=25; i+=5){
    console.log(i);
    
}

//i+= , i me itna add karo for eg i+=2 i me + 2 karte jao

//we want 10,....,50
for(let i = 10; i<=50; i+=10){
    console.log(i);
    
}

//we want 50,....,10
for(let c = 50; c>=10; c-=10){
    console.log(c);
    
}

//Accessing Arrays through for loop//
let players = ["Ronaldo", 'Messi', 'Neymar']
for(let i =0; i<3; i++){
    console.log(players[i]);
    
}

let games = ["eFootball", "FIFA", "GTA"];
for( let i=0; i<3; i++){
    console.log(games[i]);
    
}

let games1 = ['efootball', 'FIFA', 'GTA']
for( let i=0; i<games1.length;i++ ){
    console.log(games1[i]);
    
} //i < games1.length ka matlab hai: jab tak i, array ki length se chhota hai, tab tak loop chalao.

let numbers = [10, 20, 30, 40, 50];
for(let i = 0; i<numbers.length; i++){
    console.log(numbers[i]);
    
}

let consoles = ["PlayStation", "Xbox", "Nintendo"];
for(let c = 0; c<consoles.length; c+=1 ){
    console.log(consoles[c]);
    
}


 //for with  Ifffffffffffffffffffffff
let numberss = [1, 2, 3, 4, 5]
for(let i =1; i<numberss.length; i++){
    if(numberss[i]==3){ //yaha i matlab array ka index. hame yaha value chahiye to hamne numbers[i] use kiya warna agar sirf index chahiye hota to sir[i] == 3 ka index use karte 
        console.log("Number 3 Mil Gaya");
        
    }
    
}

let cars = ["BMW", "Audi", "Tesla", "Toyota"];
for(let i = 0; i< cars.length; i++){
    if(cars[i]=="Tesla"){
        console.log(cars[i]);
        
    }
}

let fruits = ["Apple", "Mango", "Banana", "Orange"];
for(let f = 0; f<fruits.length; f++){
    if(fruits[f]=="Banana"){
        console.log(fruits[f]);
        
    }
}




/***********************NESTED FOR LOOPS******************** */
for(let i=1; i<=3; i++){
    console.log("Outer Loop:", i);
    for (let j =1; j<=2; j++){
        console.log("Inner Loop:",j);
        
    }
    
}

for(let i=1; i<=2; i++){
    console.log("Outer Loop:", i);
   for(let n = 1; n<=3; n++){
    console.log("Inner Loop:",n);
    
   }
    
}

/*****************MULTIPlICATION TABLE USING NESTED LOOPS********************** */
for(let outer =1; outer<=2; outer++){
    for(let inner = 1; inner<=3; inner++){
        console.log(outer,inner);
        
    }
}


//we have to print this o/p
// 1 1
// 1 2
// 2 1
// 2 2
// 3 1
// 3 2
for(let i = 1; i<=3; i++){
    for(let j=1; j<=2;j++){
        console.log(i,j);     
    }
}
//yad rakh = Outer loop ki har iteration par inner loop apni sari iterations complete karta hai

for (let table = 2; table <= 2; table++) {
    for (let multiplier = 1; multiplier <= 5; multiplier++) {
        console.log(table + " x " + multiplier + " = " + (table * multiplier));
    }
}

for(let table =2; table<=2; table++){
    for(let multiplier =1; multiplier<=5; multiplier++){
        console.log(`${table} x ${multiplier} = ${table * multiplier}`);
        
    }
}


//Bhai, ab naye variables ke saath 3 ka table, 1 se 10 tak print karna hai.
for(let t = 3; t<=3; t++){
    for(let i = 1; i<=10; i++){
        console.log(`${t} x ${i} = ${t * i}`);
        
    }
}

for(let f = 1; f<=5; f++){
    for(let i =1; i<=10; i++){
        console.log(`${f} x ${i} = ${f * i}`);
        
    }
}

/***************************BREAK********************** */
for(let count = 1 ; count<=10; count++){
    if(count==7){
       break 
       
        
    }
    console.log(count);
    
    //matlab jaise hi 7 mile ruk jao to 1 se 6 tak print hoga
}

/*********************CONTINUE*********************** */
//man le apne ko 1 se 5 me 3 nahi print karne ka . to kya karega
//loop band karega? yaha aata continue
for(let i =1; i<=5; i++){
    if(i==3){
        continue
       //prints 1 to 5 without 3
        
    }
    console.log(i);
    
}

for(let num = 1; num<=10; num++){
    if(num==3 || num==8){
        continue //3 and 8 ko skip kardo
    }
    console.log(num);
    
}

/***********************MIXED PRACTICE*************** */
//check if index 1 and 3 are present in the given array
let games2 = ["GTA", "FIFA", "Minecraft", "PUBG", "RDR2"]
for(let g=0; g<games2.length; g++){
    if(g==1 || g==3){ //g matlab array ka index
        console.log(games2[g]);
        
    }
}

// games2[g] == "GTA" ..toh gta print
// g == 0 ..matlab index dala gta ka .. gta print karega


// 🧠 Ek important baat, bhai!
// g → index deta hai.
// games2[g] → us index par stored element deta hai.
// g == 1 || g == 3 → check karta hai ki index 1 ya 3 hai.

let footballStars = ["Ronaldo", "Messi", "Neymar", "Mbappe", "Haaland"]
for(let f = 0; f<footballStars.length;f++){
    if(f==2){ //ye hamne likhe because hame ney ka index pata hai lekin agar na pata ho to value dalna jaise pehle kiya tha footballstars[f] =="Neymar"
        continue //it will skip Ney
    }
    console.log(footballStars[f]);//
    
}

for(let row = 1; row<=3; row++){
    for(let col = 1; col<=3; col++){
        console.log("Row:",row, "Col:",col);
        
    }
}

for(let team=1; team<=3; team++){
    for(let player=1; player<=4;player++){
        if(player==3){
            break
        }
        console.log(team,player);
        
    }
}
//Jab value 10 ho, us iteration ko continue se skip karna.
let jerseyNumbers = [7, 10, 9, 11, 7, 10]
for(let j = 0; j<jerseyNumbers.length; j++){
    if(jerseyNumbers[j]==10){
    continue
    }
    console.log(jerseyNumbers[j]);
    
}
//Bhai, tune condition mein j == 10 nahi likha, balki jerseyNumbers[j] == 10 likha. Aur ye bilkul sahi hai, kyunki humein index nahi, array ki value check karni thi! 🔥

let carBrands = ["BMW", "Audi", "Tesla", "Toyota", "Ferrari"]
for(let c=0; c<carBrands.length; c ++){
    if(carBrands[c]=="Toyota"){
        break //toyota milte hi toyota aur uske baad ke brands skip ho jaenge aur pehle ke print honge
    }
    console.log(carBrands[c]);
    
}