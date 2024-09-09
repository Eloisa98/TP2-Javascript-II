function calcularTotalDiario(vendas) {
    const totaisDiarios = [];
    for (let i = 0; i < vendas.length; i++) {
        let totalDia = 0;
        for (let j = 0; j < vendas[i].length; j++) {
            totalDia += vendas[i][j];
        }
        totaisDiarios.push(totalDia);
    }
    console.log(totaisDiarios);
}

const vendas = [
    [150, 200, 120], // Segunda-feira
    [180, 230, 140], // Terça-feira
    [160, 210, 130], // Quarta-feira
    [170, 220, 150], // Quinta-feira
    [190, 240, 160], // Sexta-feira
    [200, 250, 170], // Sábado
    [210, 260, 180]  // Domingo
];

calcularTotalDiario(vendas); 
