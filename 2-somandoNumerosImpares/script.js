function somarImpares() {
    let soma = 0;
    for (let i = 1; i <= 15; i++) {
        if (i % 2 !== 0) {
            soma += i;
        }
    }
    console.log(soma);
}
somarImpares();
