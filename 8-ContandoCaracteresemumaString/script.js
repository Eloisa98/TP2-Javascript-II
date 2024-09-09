function contarCaracteres(texto) {
    let totalCaracteres = 0;
    for (let caractere of texto) {
        totalCaracteres++;
    }
    console.log(totalCaracteres);
}
const mensagem = "Olá, mundo!";
contarCaracteres(mensagem);
