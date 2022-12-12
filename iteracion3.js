const numbers = [1, 2, 3];

function sumAll(param) {
    let total=0;
    for (let i of param){
    total +=i;
    }
    return total; 
}

console.log(sumAll(numbers));