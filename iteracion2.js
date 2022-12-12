const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];


function findLongestWord(param) {
    let palabraMasLarga = param[0];
    for (let i=1; i< param.length; i++){
      if(param[i].length>palabraMasLarga.length){
        palabraMasLarga=param[i];   
      }
    }
    return palabraMasLarga;  
}

console.log("Este es el resultado: " + findLongestWord(avengers));
