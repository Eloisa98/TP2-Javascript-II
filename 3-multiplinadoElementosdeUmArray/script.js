function multiplicarArray(numeros) {
    const resultado = [];
    for (let i = 0; i < numeros.length; i++) {
        resultado.push(numeros[i] * 3);
    }
    return resultado;
}
const resultado = multiplicarArray([1, 2, 3, 4, 5]);
console.log(resultado);
