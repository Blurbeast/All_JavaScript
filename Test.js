

function get(first, second){
    let stringI = "";
    for(let index of second){
        stringI += first[index];
    }
    return "return it... "+stringI;
}
let arr = [0,2,1,3]
console.log(get("dele",arr))