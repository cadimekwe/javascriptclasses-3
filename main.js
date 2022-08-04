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

// LOOPS- used to do something that is continous
// syntax
// const array = [         ];
// for (let index = 0; index < array.length; index++) {
//     const arrayElement = array[index];
//     } - this is the actual syntax

// console.log(array[index]);- just so i (the developer)can see it



const daddy = [1, 2, 3, 4, 5, 6];
for (let loopy = 0; loopy < daddy.length; loopy++) {
    const daddysElement = daddy[loopy];
    console.log(`Array index is ${loopy} and my element is = ${daddy[loopy]}`);
}

// while loop
let people = 0;
while (people < 10) {
    console.log(people);
    people++;
}
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>')

// loop exercise 1
const nigeria = [1,2,3,4,5,6,7,8,9,10,11];
for (let ghana = 0; ghana < nigeria.length; ghana++) {
    const nigeriaElement = nigeria[ghana];
    console.log(nigeria[ghana]);
}
for (let ghana = nigeria.length -1; ghana >= 0; ghana--) {
    const nigeriaElement = nigeria[ghana];
    console.log(nigeria[ghana]);
}

// loop exercise 2
let tasks = ['wash dishes', 'wash clothes', 'cook tea', 'go shopping'];
for (let household = 0; household < tasks.length; household++) {
    const element = tasks[household];
    console.log(`task ${household+1}: ${tasks[household]}`);
}

// loop exercise 4
let evenNumbers = [1,2,3,4,5,6,7,8,9,10];
for (let even = 0; even < evenNumbers.length; even++) {
    const element = evenNumbers[even];
    if (evenNumbers[even] >=2 && evenNumbers[even] <=10) {
        if(evenNumbers[even] % 2 ===0){
            console.log(evenNumbers[even]);
        }
    }
}

// // loop exercise 5
// let x = 0;
// while (x < 3) {
//     alert(`number ${x}!`);
//     x++;
// }

// loop exercise 6



// character index
let fullName = 'Daniel James';
console.log(fullName.charAt(5));
console.log(fullName.endsWith());

// arrow functions and array methods
// => - this is the arrow function. it makes thing easy

// instead of 
function additional(a,b) {
    return a+b;
}
console.log(additional(344, 344));

// DO THIS - arrow function
let addition = (c,d) => c-d;
console.log(addition(555, 556));

// SCOPE- global scope and block scope. eg: 'let comm' is global scope. 'addition' in the function statement is a function scope and cant be called outside the function statement 
let comm = 25;
function multiplyAdd(f,g,h) {
    let addition = f + g;
    return addition * h + comm;
}

console.log(multiplyAdd(55, 66, 77));

// ForEach function
const numArray = [1,2,3,4,5];
function multiplyArrays(arr) {
    let subtract = 2;
    arr.forEach((items) => {
        subtract = items * subtract;
    })
    return subtract
}

console.log(multiplyArrays(numArray)); 

// call back function
// function greeting(name) {
//     alert(`Hello ${name}`)
// }

// function userName(popup){
//     let name = prompt('Please enter your name');
//     popup(name);
// }

// userName(greeting);

// MAP FILTER and REDUCE
// map returns a new array, filter filter outs and assigns it to do something
// filter - you are filtering a particular array with a condition
const testScores = [45, 56, 78, 90, 89, 67, 65, 34, 20];
const filteredArray = testScores.filter((test)=> test >= 60); 
console.log(filteredArray);
// map- create a new array with adjusted values
const mappedArray = testScores.map((score) => {
    return score * 2;
})
console.log(mappedArray);

let kitchenGoods = ['pot', 'pan', 'spoon', 'kettle'];
const newKitchenGoods = kitchenGoods.map((goods) => {
    return goods + 's'; 
})
console.log(newKitchenGoods); 

// reduce
let spoon = [ 1,2,3,4,5];
const reduceSum = spoon.reduce((total, current) => {
    return total + current
}, 1)
console.log(reduceSum);

const reduceProduct = spoon.reduce((total, current) => {
    return total*current
}, 2)
console.log(reduceProduct);



