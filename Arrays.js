let arr = new Array(1,2,3,4,5,6,7)
let arr1 = [0,4,5]
// array here can take any dataType
// the methods are push & pop, concat, shift & unshift
console.log(arr.length)
//the push method add to the last element in the array
arr.push("Hello")
// the pop removes the last element in the array
arr.pop
// shift remove the first element in the array
arr1.shift()
// unshift add the new element to the first place in the list i.e the index 0
arr1.unshift("Get")
// the concat join two variables together 
let arr2 = arr.concat(arr1)

console.log(arr2)

// slice , the principle of slicing here is same as that of python, start stop and step
let result = arr.slice(1)
let result1 = arr.slice(1,3)
console.log(result)
console.log(result1)

//splice can delete as well as add to the array again
// splice is splice(2-> start from this index, 2 -> number of elements to be deleted, 100-> you might decide to add to the array)
let spResult = arr.splice(1,2)
console.log(arr)
console.log(spResult)
let spResult2 = arr.splice(1,2, "esther", "gift")
console.log(spResult2)

// global and prototype
Array.prototype.lol = "hhhhhaaaaaaaaaaaaaa";
Array.prototype.loml = "Temiiiii";

console.log(arr.lol)
console.log(arr.loml)

Array.prototype.sum = function(){
    let total =0;
    for(let index = 0; index< this.length; index++){
        total+= this[index];
    }
return total;
}
let newArray = [1,2,3,4]
console.log(newArray.sum())
let arrr = [4,7,10,10,2,10,9,100,100,99,99] 

Array.prototype.maximum = function(){
    let max = arrr[0]
    let secondMax =0;
    for(let index = 0; index < arrr.length; index++){
        let number = arrr[index]
        if(max < number) max = number;
        if(max > number && number > secondMax) secondMax = number
    }
    return secondMax;
}
console.log("Max number",arrr.maximum())
