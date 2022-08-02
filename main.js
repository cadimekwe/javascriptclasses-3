// ARRAYS & LOOPS

// instead of this:
let nickName = 'chidims nwamama';
let lastName = 'adimks';
let age = 27;
// do an array 
let details = ['chidims nwamama', 'adimks', 27];
// zero indexing - refer to note. indexing is a way an array identifes its elements
// chidims nwamama is at index 0
// adimks is at index 1
// 27 is at index 2
// variable 'details' is at Element 3 because there are 3 items in it 

// declaring an array or create an array
const chisom = [22, 'nsogbu', 'future data nalytics', 'last born'];
// to check the number of elements in an array
console.log(chisom.length);

// how to check the index, accessing what is inside an array
console.log(chisom[2]);
console.log(chisom[4]);

// modifying or chaning an array
chisom[0] = 'will be 23 next year';
console.log(chisom[0]);

console.log(chisom);

// to check if a variable is a sting or number
console.log(typeof nickName);
console.log(typeof age);
console.log(typeof chisom);

// to check if the variable is an array. it functions as a boolean
console.log(Array.isArray(chisom));

// using a function to check the elements in the array
function returnLength(arr) {
    return arr.length;
}
console.log(returnLength(chisom));

// nested array
let ebuksTheDaddy = [[24], ['birmmingham city university'], ['software engineer', 'does not know how to cook']];
// accessing a nested array
console.log(ebuksTheDaddy[2][1]);
console.log(ebuksTheDaddy[1]);
// modifying or changing an array
ebuksTheDaddy[2][1] = 'can only boil spagetti and peppersoup indomine';
console.log(ebuksTheDaddy[2][1]);

// ARRAY METHODS
// concatenating arrays, adding 2 arrays together
let addArraysTogether = chisom.concat(ebuksTheDaddy);
console.log(addArraysTogether);
// push, pop, shift, unshift- all array methods. check note for definition

// adding an index to an array
let mikuTheDoctor = ['Mrs Uka jr.', 26, 'medical doctor'];
mikuTheDoctor[6] = 'currently doing housemanship'; 
console.log(mikuTheDoctor);
// DO THIS INSTEAD- USING PUSH 
mikuTheDoctor.push('getting married next year');
mikuTheDoctor.pop();
mikuTheDoctor.unshift('real name is ngozichukwuka, but we prefer calling miku');
mikuTheDoctor.shift();

let broUche = ['okpara anyi', `the big 30!`, 'married', 'best brother ever!!!!!!!!', 'successful banker', 'uchenna, uchebelle, uche-everything']
console.log(broUche);
// arranges it alphabetically
console.log(broUche.sort());
// arranges the sorted value or the value in desending order
console.log(broUche.sort().reverse());
// includes
console.log(broUche.includes('uchenna'));
// splice - to remove
broUche.splice(1,3);
console.log(broUche);
// splice - to add
broUche.splice(1,2, 'uchenna', 'emmanuel');

// array exercise 1
let breakfast = ['yam and egg'];
breakfast.push('and 2 glasses of water');
breakfast.unshift('this morning i ate');
console.log(breakfast.length);

// array exercise 2 - last value
function arrayExercise(broUche) {
    return broUche[broUche.length -1]
}
console.log(arrayExercise(broUche));

// array exercise 3 - music
const musicGenres = ['rock', 'roll', 'afrobeats'];
musicGenres.push('jazz', 'rythym and blues');
console.log(musicGenres);
console.log(musicGenres.length);
// code to find the middle value of the array 
let middleGenre = musicGenres[Math.floor(musicGenres.length -1)/2];

console.log(middleGenre);
// replace the middle value
musicGenres.splice(2,1, 'classical');
console.log(musicGenres); 

// another replace example
let midlands = ['derby', 'nottingham', 'birmmingham', 'coventry', 'leiester'];
let fufu = midlands.indexOf('coventry');
if (fufu !== -1) {
    midlands[fufu] = 'wolverhampton';
}
console.log(midlands);

musicGenres.unshift('blues', 'reggae');
console.log(musicGenres);

// array exercise 4
let mummy = ['getrude', 'ejima jesus', 'five children', 'no one can be compared to you'];
function sortExercise(mummy) {
    return mummy.sort()
}
console.log(sortExercise(mummy)); 
console.log(breakfast.sort());

// LOOPS
