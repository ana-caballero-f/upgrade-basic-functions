const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
    let suma= 0;
    for(let i of param){
        suma +=i;
    }
    let promedio= suma/param.length
    return promedio
}

console.log(average(numbers));