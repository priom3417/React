export default "util.js";

export let content  = "This is the content of util.js";
export let version = "1.0.0";
export let author = "John Doe";
export let date = "2020-01-01";
export let license = "MIT";

export function log(message) {
    console.log(message);
}

export function error(message) {
    console.error(message);
}

export function warn(message) {
    console.warn(message);
}

let trace = message => console.trace(message); //Single parameter don't need parentheses
export {trace};

let assert = (condition, message) => console.assert(condition, message); //Multiple parameters need parentheses
export {assert};

let clear = () => console.clear(); //No parameters need parentheses
export {clear};

let multiplication = (a, b) => a * b; //Single return statement don't need curly braces. Dont need return keyword.

let getObject = () => ({name: "John Doe", age: 30}); //Returning an object needs parentheses.

//## Playing with javascript Arrays

let fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple", "Grapes", "Strawberry", "Blueberry", "Raspberry", "Blackberry", "Cherry", "Peach", "Plum", "Kiwi", "Watermelon", "Cantaloupe", "Honeydew", "Papaya", "Guava", "Pomegranate", "Lychee", "Dragonfruit", "Passionfruit", "Starfruit", "Durian", "Jackfruit", "Mangosteen", "Rambutan", "Longan", "Kumquat", "Tangerine", "Clementine", "Grapefruit", "Lemon", "Lime", "Coconut", "Pineapple", "Peach", "Plum", "Kiwi", "Watermelon", "Cantaloupe", "Honeydew", "Papaya", "Guava", "Pomegranate", "Lychee", "Dragonfruit", "Passionfruit", "Starfruit", "Durian", "Jackfruit", "Mangosteen", "Rambutan", "Longan", "Kumquat", "Tangerine", "Clementine", "Grapefruit", "Lemon", "Lime", "Coconut", "Pineapple", "Peach", "Plum", "Kiwi", "Watermelon", "Cantaloupe", "Honeydew", "Papaya", "Guava", "Pomegranate", "Lychee", "Dragonfruit", "Passionfruit", "Starfruit", "Durian", "Jackfruit", "Mangosteen", "Rambutan", "Longan", "Kumquat", "Tangerine", "Clementine", "Grapefruit", "Lemon", "Lime", "Coconut", "Pineapple", "Peach", "Plum", "Kiwi", "Watermelon", "Cantaloupe", "Honeydew", "Papaya", "Guava", "Pomegranate", "Lychee", "Dragonfruit", "Passionfruit", "Starfruit", "Durian", "Jackfruit", "Mangosteen", "Rambutan", "Longan", "Kumquat", "Tangerine", "Clementine", "Grapefruit", "Lemon", "Lime"];

let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99];

let evenNumbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98];

let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

//Find the index of the fruit "Pineapple"
let getPineappleIndex = fruits.findIndex(item => item === "Pineapple");
export {getPineappleIndex};

//add new fruit "Mango" to the end of the array
fruits.push("Mango");

//remove the last fruit from the array
fruits.pop();

//add new fruit "Mango" to the beginning of the array
fruits.unshift("Mango");

//remove the first fruit from the array
fruits.shift();

//remove 3 fruits starting from the 5th index
fruits.splice(5, 3);

//playing with array map

//Find the square of each number in the oddNumbers array
let oddNumbersSquare = oddNumbers.map(number => number * number);
export {oddNumbersSquare};

//Find the square root of each number in the evenNumbers array
let evenNumbersSquareRoot = evenNumbers.map(number => Math.sqrt(number));

//Get the lenght and first character of each fruit as an object
let fruitDetails = fruits.map(fruit => ({name: fruit, length: fruit.length, firstChar: fruit[0]}));
export {fruitDetails};

//Desctructuring the fruitDetails array
let [{name: fruit1, length: length1, firstChar: firstChar1}, {name: fruit2, length: length2, firstChar: firstChar2}] = fruitDetails;

//Destruing an array example
let [first, second, third] = fruits;

//Desctructuring an object example
let {name, age} = {name: "John Doe", age: 30};

//Destructring an object with different property names
let {name: n, age: a} = {name: "John Doe", age: 30};

//Destructuring an object with default values
let {city = "New York"} = {};   //city will be "New York" if the object is empty

//Destructuring an object with default values
let {country = "USA"} = {city: "New York"};   //country will be "USA" if the object does not have a country property

//Destructuring an object with default values
let {state = "New York"} = {city: "New York"};   //state will be "New York" if the object does not have a state property

//Destructuring function parameters
function storeOrder({id, currency}) { // destructuring
    localStorage.setItem('id', id);
    localStorage.setItem('currency', currency);
}
storeOrder({id: 5, currency: 'USD', amount: 15.99}); // one argument / value!

//Spread operator

//Spread operator with arrays
//The ... operator is used to spread the elements of an array or object. It can be used to create a new array or object from an existing array or object. We can think like that, the ... is spreading the array or object with a comma separated list of elements.

let allNumbers_0 = [oddNumbers, evenNumbers]; //This is a nested array. The output is: [[1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99], [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98]

let allNumbers = [...oddNumbers, ...evenNumbers]; //This is not an nested array. The output is: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98]

//Spread operator with objects
let person = {name: "John Doe", age: 30};
let address = {city: "New York", country: "USA"};

let personWithAddress_0 = {person, address}; //This is a nested object. The output is: {person: {name: "John Doe", age: 30}, address: {city: "New York", country: "USA"}}

let personWithAddress = {...person, ...address}; //The output is: {name: "John Doe", age: 30, city: "New York", country: "USA"}