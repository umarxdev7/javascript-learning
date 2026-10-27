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

