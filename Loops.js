
// let counter = 0;
// let firstNumber =0;
// let secondNumber = 1;
// process.stdout.write(`${firstNumber} ${secondNumber}`)
// while (counter < 30){
//     sum = firstNumber + secondNumber;
//     firstNumber = secondNumber;
//     secondNumber = sum;
//     process.stdout.write(` ${sum} `)
//     counter++;
// }
// console.log()

// let array = [5,6,7,4,3]

// // for loop
// for(let index = 0; index < array.length; index++){
//     (process.stdout.write(`foring ${array[index]} `))
// }
// console.log()
// // for in loop
// for(let index in array){
//     (process.stdout.write(`ining ${index} `))
// }
// console.log()
// //for of loop
// for(let index of array){
//     (process.stdout.write(`for ${index} `))
// }
// console.log()

// let numbers = [{uno : "one"}, {duo: "two"}];

// for(let index in numbers){
//     console.log(index)
// }

// for(let index of Object.keys(numbers)){
//     console.log(index)
// }

// for(let index of Object.values(numbers)){
//     console.log(index)
// }

// for(let index of Object.entries(numbers)){
//     console.log(index)
// }

// let scores = {
//     Bright : 20,
//     Awwal : 10,
//     Mariam : 5,
//     Ebuka : 12,
//     Ajebo : 2
// }

// //in prints the index

// for(let score in scores){
//     console.log("inning ", score)
// }
// // of is not iterable but we conver it to an object
// for(let score of Object.values(scores)){
//     console.log("ofing ", score)
// }

// // print both key and value
// for(let score of Object.entries(scores)){
//     console.log("key and Value ", score)
// }

let arrayyyy = [1,2,3,4,5,6,7]
arrayyyy.forEach ((x)=>{
    console.log(x)
})