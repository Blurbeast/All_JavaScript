function factorial(value){
    let answer = 0;
    for(let index = value; index > 0; index--){
        answer *= index;
    }
    return answer;
}
console.log(factorial(5))
console.log()
//expression function 
let fact = function(value){
    let answer =0;
    for(let index = 0; index <= value; index++){
        answer += index;
    }
    return answer;
}
console.log(fact(5));

let fact1 = function(value){
    let answer =0;
    for(let index = 0; index <= value; index++){
        answer += index;
    }
    return answer;
}(4)
console.log(fact1);

