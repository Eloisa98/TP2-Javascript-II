function contarPropriedades(obj) {
    let contador = 0;
    for (let propriedade in obj) {
        contador++;
    }
    console.log(contador);
}
const pessoa = { nome: "Ana", idade: 28, profissao: "Engenheira" };
contarPropriedades(pessoa);
