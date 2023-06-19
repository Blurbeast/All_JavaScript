let prompt = require('prompt-sync')()

let id = prompt("Enter id ")
let available = prompt("Enter if it is availablle: ")
let author = prompt("Enter author's name ")
let count = prompt("Enter the number of books available ")


let myObject = {
    id: Number(id),
    available: Boolean(available),
    author:author,
    count:Number(count)
}
console.log(myObject)