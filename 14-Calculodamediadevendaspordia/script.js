function calcularMediaVendas(totaisDiarios) {
    let totalGeral = 0;
    for (let total of totaisDiarios) {
        totalGeral += total;
    }
    const media = totalGeral / totaisDiarios.length;
    console.log(`Média de vendas por dia: ${media}`);
}


const totaisDiarios = [470, 550, 500, 540, 590, 620, 650]; 
calcularMediaVendas(totaisDiarios); 
