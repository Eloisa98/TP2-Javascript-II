function exibirElementosArray(numeros) {
    for (let indice in numeros) {
        console.log(`Índice ${indice}: ${numeros[indice]}`);
    }
}
const arrayNumeros = [10, 20, 30, 40, 50];
exibirElementosArray(arrayNumeros);
