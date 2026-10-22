let i = 1;

while (i<=5 ){
    console.log(i);
    
    i = i+1 //or i++
}

let count = 1
while(count<=10){
    console.log(count);
    count+=2 //or count = count +2
}

let score = 10
while(score>=0){
    console.log(score);
    score -= 2
    
}

/***************************Array with while*************************** */
let heroes = ['flash', 'Batman','Superman']
let arr= 0 //Humne 0 isliye choose kiya kyunki humein array ke first element se shuru karna hai, aur array ka first index 0 hota hai.
while(arr<heroes.length){
    console.log(heroes[arr]);
    arr++
}

let footballClubs = ['Real Madrid', 'Manchester United', 'Barcelona', "Liverpool"]
let clubIndex = 0
while(clubIndex<footballClubs.length){
    console.log(footballClubs[clubIndex]);
    clubIndex++
    
}

/***************************Do While********************** */
let marks = 1
do{
    console.log(marks);
    marks++
} while(marks<=5)
//     Pehle do ke andar ka code execute hota hai.
// Uske baad while ki condition check hoti hai.
// Condition true hai toh loop dobara chalega.
// Condition false hai toh loop terminate ho jayega.


// 🔥 Sabse important difference

// while loop:
// Pehle condition check → phir code execute.

// do...while loop:
// Pehle code execute → phir condition check.

// Bas bhai, yahi iska main concept hai!

let playerScore = 7
do{
    console.log(playerScore);
    playerScore+=1
    
}while(playerScore<=10)

/////////////////////////////
    let buildings = 4
    do{
        console.log(buildings);
        buildings++
        
    }while(buildings>5) //only 4 wil come and then the code will be terminated

 /************************Mixed Practice******************** */
 let goals = 3

do{
    console.log(goals);
    goals++
    
}while(goals<=7)

//
let jerseyNumber = 10
do{
    console.log(jerseyNumber);
    jerseyNumber-=2
    
} while(jerseyNumber>4)

////
let attempts = 5
while(attempts<5){
    console.log(attempts);
    
}

/////////
let trophies = ["UCL", "La Liga", "Premier League", "Euro"]
let trophyIndex = 0
while (trophyIndex<trophies.length){
    if(trophyIndex==0 || trophyIndex==2){
        console.log(trophies[trophyIndex]);
       
    }
     trophyIndex++
}

/////////////
let players = ["Ronaldo", "Messi", "Neymar", "Mbappe", "Salah"];
let playersIndex = 0
while(playersIndex<players.length){


    if(playersIndex==2){
      playersIndex++
      continue
        
    }
    console.log(players[playersIndex]);
    playersIndex++
    
}