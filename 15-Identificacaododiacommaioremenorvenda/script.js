function encontrarMelhorPiorDia(totaisDiarios) {
    let melhorDia = 0;
    let piorDia = 0;
    let maiorVenda = -Infinity;
    let menorVenda = Infinity;

    for (let i = 0; i < totaisDiarios.length; i++) {
        if (totaisDiarios[i] > maiorVenda) {
            maiorVenda = totaisDiarios[i];
            melhorDia = i;
        }
        if (totaisDiarios[i] < menorVenda) {
            menorVenda = totaisDiarios[i];
            piorDia = i;
        }
    }

    const diasDaSemana = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"];
    console.log(`Melhor dia: ${diasDaSemana[melhorDia]} com vendas de ${maiorVenda}`);
    console.log(`Pior dia: ${diasDaSemana[piorDia]} com vendas de ${menorVenda}`);
}

const totaisDiariosExemplo = [470, 550, 500, 540, 590, 620, 650]; 
encontrarMelhorPiorDia(totaisDiariosExemplo); 