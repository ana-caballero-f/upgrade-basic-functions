function buscarMasAlto(numUno, numDos) {
    if (numUno>=numDos){
        return numUno;
    }else {
        return numDos;
    }
}

console.log(buscarMasAlto(5, 3));
console.log(buscarMasAlto(789, 45354345));
console.log(buscarMasAlto(3,3))