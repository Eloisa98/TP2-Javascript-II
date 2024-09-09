function somarArray(numeros) {
    let somaTotal = 0;
    for (let numero of numeros) {
        somaTotal += numero;
    }
    console.log(somaTotal);
}
const numerosArray = [5, 10, 15, 20];
somarArray(numerosArray);
