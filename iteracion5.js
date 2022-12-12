const mixedElements = [6, 1, 'Rayo','vallecano', '10', 'upgrade', 8, 'hub'];


function averageWord(param) {
  let suma=0;
  let letras;
  for(let el of param){
    if(typeof(el)==='string'){
      let letras= el.length;
     suma +=letras
    }else if(typeof(el)==='number'){
      suma +=el
  } 
}
return suma
}

console.log(averageWord(mixedElements));