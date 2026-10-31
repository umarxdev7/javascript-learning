const jerseyGoals = [1, 3, 4, 5, 6, 7]


const football =  
jerseyGoals.forEach( (goals) =>{
    console.log(goals);
    
} )
console.log(football);// for each ko kisi variable ke andar dale to wo undefined return karta. That's why filter is introduced

/**************************.filter()************************** */
const bigScores = jerseyGoals.filter( (goals) => { //filter() har element ko check karta hai
return goals > 5 //condition true hui to element naye array me ajata hai
}) //condition false hui to element naye array me nahi ata
console.log(bigScores); //filter() ek naya array return karta hai
//agar callback me curly braces hai to return likhe zaruri hai

const selectedGoals = jerseyGoals.filter( (goals) => {
    return goals>5 //agar return nahi likhega to [] bas ye return hoga
})
console.log(selectedGoals);

//Agar single-line arrow function me curly braces nahi hai to , implicit return karta hai
const selectedGoals1 = jerseyGoals.filter( (goals) => goals>5)
console.log(selectedGoals);
////////////////////////////////
const arcadeScores = [34, 87, 12, 95, 56, 41, 72]
let highScores = arcadeScores.filter( (scores) => scores>50)
console.log(highScores);//filter original array change nahi karta naye array ko return karta hai


const jerseyGoals1 = [3, 5, 6, 7]
let highGoals = jerseyGoals1.filter( (goals) => goals>3)
console.log(highGoals)

//Agar callback me curly braces lagayega to return likhe zaruri hai
//eg. football.filter( () => { return ...conditons}) ...or agar nahi lagaya to football.filter( () => condition...)


/****************************.filter() WITH OBJECTs***************************** */
const bookShelf = [
    { title: "History of India", genre: "History", publish: 2010 },
    { title: "JavaScript Basics", genre: "Programming", publish: 2022 },
    { title: "World History", genre: "History", publish: 1995 },
    { title: "Modern India", genre: "History", publish: 2020 }
];
let historyGenre = bookShelf.filter( (books) => {
    return books.genre==="History" && books.publish>=2000
} )
console.log(historyGenre);

/******************************.map()************************ */

/*| Feature        | `map()`                        | `Map`                       |
| -------------- | ------------------------------ | --------------------------- |
| Kya hai?       | Array method                   | Built-in data structure     |
| Kaam           | Array elements transform karna | Key-value pairs store karna |
| Example        | `numbers.map(...)`             | `new Map()`                 |
| Capitalization | `map` — small `m`              | `Map` — capital `M`         |
*/
const stadiumCapacities = [15000, 25000, 40000, 60000]
let expandedCapacities = stadiumCapacities.map( (capacity) => {
    return capacity+5000
})
console.log(expandedCapacities);

//#Short Syntax for map
const trainingHours = [2, 4, 6, 8, 10]
let tripledHours = trainingHours.map ( (hours) => hours*3)
console.log(tripledHours); ///I didn't use curly braces that's why there was no need to use return

/*******************Chaining in map()...if we have more than two conditions *********** */
const matchPoints = [1, 2, 3, 4, 5]
let finalPoints = matchPoints.map ( (points) => points *10).map ( (points) => points +1)
console.log(finalPoints);

const robotBattery = [5, 10, 15, 20, 25]
let chargedBattery = robotBattery
                     .map( (power) => power *2)
                     .map( (power) => power+3)
                     console.log(chargedBattery);
                     
/***********************map() + filter() Chaining************************ */                     
const playerScores  = [10, 20, 30, 40, 50]
let updatedScores =  playerScores.map ( (score) => score*10) 
                    .filter( (score) => score>250)
console.log(updatedScores); //map ne values transform kari and filter ne condtion k basis pe values select kari

const gamingLevels = [2, 4, 6, 8, 10, 12]
let advancedLevels = gamingLevels.map ( (level) => level*5)
                    .filter( (level) => level>30)
console.log(advancedLevels);

/*****************************reduce()*********************** */
// find the total sum of the given array.. Yaha ham reduce use karenge it becomes very easy after using reduce
const matchGoals = [2, 1, 3, 4]
const totalGoals = matchGoals.reduce ( (accumulator, currentValue) =>{
    return accumulator + currentValue  // accumulator mtlab calculated value
}, 0) //0 mtlb starting accumulator value 0 , current value mtlab acculmulator k bad wali
console.log(totalGoals); 
 /* | Round | Accumulator | Current Value | Return |
| ----- | ----------: | ------------: | -----: |
| 1     |           0 |             2 |      2 |
| 2     |           2 |             1 |      3 |
| 3     |           3 |             3 |      6 |
| 4     |           6 |             4 |     10 | */

const footballAssists = [3, 2, 5, 1, 4]
let totalAssists = footballAssists.reduce( (calculated, current) => {
    return calculated + current
}, 0)
console.log(totalAssists);

//Shopping Cart
const shoppingCart = [
    { product: "Keyboard", price: 1200 },
    { product: "Mouse", price: 600 },
    { product: "Headphones", price: 1800 },
    { product: "Monitor", price: 8000 }
];
let grandTotal = shoppingCart.reduce ( (accumulator, currentValue) => {
    return accumulator + currentValue.price
}, 0)
console.log(grandTotal);

/**************************FINAL BOSS - MIXED PRACTICE************************ */
const footballSquad = [
    { name: "Ronaldo", goals: 5, age: 39 },
    { name: "Messi", goals: 8, age: 38 },
    { name: "Neymar", goals: 3, age: 34 },
    { name: "Mbappe", goals: 10, age: 27 },
    { name: "Haaland", goals: 7, age: 25 },
    { name: "Salah", goals: 6, age: 33 }
];
let topScorers = footballSquad.filter ( (players) => players.goals>=5)
                 .map ( (players) => players.name)
console.log(topScorers);

// Conditions - filter (goals>=10), map(), forEach()
const playerStats = [
    { name: "Ronaldo", goals: 12, age: 39 },
    { name: "Messi", goals: 8, age: 38 },
    { name: "Mbappe", goals: 15, age: 27 },
    { name: "Neymar", goals: 4, age: 34 },
    { name: "Haaland", goals: 11, age: 25 }
];
let goats = playerStats.filter ( (stats) => stats.goals>=10)
            .map ( (stats) => stats.name)
console.log("Qualfied Players:");
goats.forEach( (selected) =>{
    console.log(selected);
    
})

//condition - filter(score>=500) + reduce(selected plaeyrs with >=500 score ka total calculate) + if/else
const gamingPlayers = [
    { name: "Shadow", score: 850, level: 12 },
    { name: "Blaze", score: 450, level: 8 },
    { name: "Phantom", score: 920, level: 15 },
    { name: "Venom", score: 300, level: 5 },
    { name: "Raptor", score: 700, level: 10 }
];
let esports = gamingPlayers.filter ( (players) => players.score>=500 )
              .reduce ( ( acc, players) => {
                return acc + players.score
              }, 0)
let totalScore = esports 
console.log(esports);
if (totalScore>=2000){
    console.log("Elite Team");
    
}
else{console.log("Keep Training");
} 