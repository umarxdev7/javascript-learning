//for...of loop
let footballPlayers = ['Ronaldo', 'Messi', 'Neymar']
for(const player of footballPlayers){
    console.log(player);
    //naya variable player banaya. for= loop shuru karta, const player=har iteration me milne wali value ko player variable me rkhta, of=batata hai ki kis collection se values leni hai, footballPlayers=hamara array hai
}

let stadiumNames = ['Bernabeu', "Old Trafford", 'Anfield']
for(const stadium of stadiumNames){
    console.log(stadium.length); // o/p= 8, 12with space, 7
    console.log(stadium);
    
}

///////////////for....of  with  Strings
let playerName = 'Ronaldo'
for(let player of playerName){ //for of string ke har letter pe iterate karta hai
    console.log(player);//o/p=R, o, n, a, l, d, o
    console.log(player.length);
    
}

/***********************MAP IN JavaScript......*******************/
//map ek aisa collection hai jisme ham key value pairs store kar skte hai
const countryCapitals = new  Map()
countryCapitals.set("India", "New Delhi")
countryCapitals.set("Portugal", "Lisbon")
countryCapitals.set("France", "Paris")
console.log(countryCapitals);
console.log(countryCapitals.size);//size se total key value pairs find hote, here they are 3

// new Map() → naya Map banata hai.
// .set(key, value) → Map mein key-value pair add karta hai.
// "India" → key.
// "New Delhi" → value.

const footballJerseys = new Map ()
footballJerseys.set("Ronaldo",7)
footballJerseys.set("Messi", 10)
footballJerseys.set("Arda Guler", 15)
console.log(footballJerseys);
console.log(footballJerseys.size);

/************Map mein same key dobara add karoge, toh naya pair add nahi hota; us key ki value update ho jaati hai. */
const playerStats = new Map()
playerStats.set('Ronaldo', 5)
playerStats.set('Ronaldo', 7)
playerStats.set('Messi', 10)
console.log(playerStats.size); //o/p=2 kyuki nayi ronaldo key add nahi update hui
console.log(playerStats.get('Ronaldo'));//7 , it will give update value

/**********Map with for...of************** */
const playerGoals = new Map()
playerGoals.set('Ronaldo', 7)
playerGoals.set('Messi', 10)
for(const [player,goals] of playerGoals){  
    console.log(player,goals); }
        

const trophyCounts = new Map()
trophyCounts.set('Portugal',1)
trophyCounts.set('Real Madrid',15)
trophyCounts.set("Man United", 3)
for(const [team,trophies] of trophyCounts){
    console.log(team);
    
}

/**********************for...in************************* */
//Object ki keys par iterate karta hai....
const playerInfo = {
    name: 'Ronaldo',
    club: 'Al Nassr',
    jersey: 7
}
for(const property in playerInfo){
    console.log(property);
    
}

const playerInfo1 = {
    name: 'Ronaldo',
    club: 'Al Nassr',
    jersey: 7
}
for(const property in playerInfo1){
    console.log(playerInfo1[property]);//object ki properties ki value access kar skte hai
    
}

const footballLegend = {
    name: 'Messi',
    country: 'Argentina',
    worldCups: 1
}
for(const achievements in footballLegend){
    console.log(achievements);
    console.log(footballLegend[achievements]);
    
}

const jerseyCollection = [7, 10, 9]
for(const number in jerseyCollection){
     console.log(number);// Yaad rakh:

// for...in → array ke indexes.
// for...of → array ki actual values.
    
}

const stadiumCapacities = [75000, 60000, 90000]
for(const seatCount in stadiumCapacities){
    console.log(stadiumCapacities[seatCount]);
    
}

/**************************.forEach*********************** */
//ye array ke har element par call back function run karta hai
const goalScorers = ["Ronaldo", "Messi", "Mbappe"];

goalScorers.forEach(function(scorer) {
    console.log(scorer);
});
// forEach() array ke har element ke liye function run karta hai.
// scorer mein har baar current element aata hai.
// function(scorer) { ... } callback function hai.

const stadiumCities = ['Madrid', 'Manchester','Liverpool']
stadiumCities.forEach(function(cities){
    console.log(cities);
    
})

const matchResults = ['win', 'draw', 'loss']
matchResults.forEach(function(results,index){
    console.log(results, index); //callback ka second parameter index deta hai
    
})

const raceWinners = ['hamilton', 'verstappen', 'Leclare']
raceWinners.forEach(function(winners,position){
          console.log(position);
          
})

//callback with 3 parameters
const matchScores = [3, 1, 4]
matchScores.forEach(function(score, index, completeArray){
    console.log(score, index, completeArray);
    
})

/*********************.forEach with Arrow Function****************** */
const clubCountries = ['Spain', 'England', 'Germany']
clubCountries.forEach((countries) => {
        console.log(countries);
        
})

const racingTeams = ['Ferrari', "McLaren", "Mercedes"]
racingTeams.forEach((cars) => {
    console.log(cars);
    
})
/*******************Named Function As A CallBack************************* */
function showDriver(driver){
    console.log(driver);
    
}
const flDrivers = ['Hamilton', 'Verstappen', 'Leclerc']
flDrivers.forEach(showDriver)
/////////////////////////////////
function displayClub(clubName){
    console.log(clubName);
    
}
const euroClubs = ['Real Madrid', 'Man City', 'Bayern Munich', 'Liverpool']
euroClubs.forEach(displayClub)

/*********************Array Of Objects with .forEach()******************** */
const footballSquad = [{name: 'Ronaldo', number:7},
    {name: 'Messi', number:10},
    {name: 'Neymar', number:10}//array ke andar har element ek object hai
]
footballSquad.forEach((player) => {
    console.log(player.name);
    
})
////////////////////
const footballAwards = [{award: 'Ballon dOr', winner: 'Ronaldo'},
    {award: 'World Cup', winner: 'Messi'},
    {award: 'Golden Boot', winner: 'Mbappe'}
]
footballAwards.forEach((legend) => {
    console.log(legend.award, ":", legend.winner);
    
})


/***********************Mixed Practice******************* */
const madridLegends = [
    { name: "Ronaldo", goals: 450 },
    { name: "Benzema", goals: 354 },
    { name: "Modric", goals: 39 },
    { name: "Bale", goals: 106 },
    { name: "Ramos", goals: 101 }
];
madridLegends.forEach((goat)=>{
    if(goat.goals > 100){
        console.log(goat.name, ":", goat.goals);
        
    }
    
})


const gamingSquad = [
    { player: "Shadow", level: 85 },
    { player: "Blaze", level: 42 },
    { player: "Phantom", level: 67 },
    { player: "Venom", level: 29 },
    { player: "Storm", level: 91 }
];
gamingSquad.forEach((gamer) => {
    if(gamer.level >= 60){
        console.log("Player: Pro -",gamer.player);
        
    }
    else{console.log("Player: Beginner -",gamer.player);
    }
    console.log(gamer.player, ":", gamer.level);
})

////////////print players jinke goals 5 ya usse zyada and assists 3 ya usse zyada ho
const footballStats = [
    {name: 'Ronaldo', goals:8, assists:3},
    {name: "Messi", goals:5, assists: 7},
    {name: 'Mbappe', goals:6, assists: 2},
    {name: 'Neymar', goals:2, assists: 5}
]
footballStats.forEach((details) => {
    if(details.goals>=5 && details.assists>=3){
        console.log(`Name: ${details.name}, Goals: ${details.goals}, Assists: ${details.assists}`);
        
    }
})

/////////////////////
const worldCupPlayers = [
    { name: "Ronaldo", goals: 4, age: 39 },
    { name: "Messi", goals: 7, age: 37 },
    { name: "Mbappe", goals: 8, age: 25 },
    { name: "Neymar", goals: 2, age: 32 },
    { name: "Haaland", goals: 6, age: 24 },
    { name: "Modric", goals: 1, age: 39 }
];
worldCupPlayers.forEach((wc) => {
    if(wc.goals>=5 && wc.age<30){
        console.log(wc.name, wc.goals, wc.age);
          }
})

//////////////////use for loop, continue, arrays, conditions
const stadiumCrowd = [
    { section: "A", fans: 120 },
    { section: "B", fans: 45 },
    { section: "C", fans: 200 },
    { section: "D", fans: 75 },
    { section: "E", fans: 160 }
];

for(let i = 0; i<stadiumCrowd.length; i++){
    if(stadiumCrowd[i].fans < 100){
        continue
    }
    console.log("Section:",stadiumCrowd[i].section, ",", "Fans:",stadiumCrowd[i].fans);
}

//////////////////for...of, if...else, logical operators, template literals
const esportsPlayers = [
    { gamerTag: "CyberWolf", wins: 18, rank: "Diamond" },
    { gamerTag: "PixelNinja", wins: 7, rank: "Gold" },
    { gamerTag: "DarkViper", wins: 24, rank: "Platinum" },
    { gamerTag: "GhostByte", wins: 12, rank: "Silver" },
    { gamerTag: "NeonStrike", wins: 15, rank: "Diamond" }
];
for(const players of esportsPlayers){
    if(players.wins >= 15 || players.rank == "Platinum"){
        console.log(`Name: ${players.gamerTag}, Status: ELITE`);
        
    }
    else{console.log(`Name: ${players.gamerTag}, Status: REGULAR`);
    }
}