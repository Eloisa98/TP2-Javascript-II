const vendas = [
    [150, 200, 120], // Segunda-feira
    [180, 230, 140], // Terça-feira
    [160, 210, 130], // Quarta-feira
    [170, 220, 150], // Quinta-feira
    [190, 240, 160], // Sexta-feira
    [200, 250, 170], // Sábado
    [210, 260, 180]  // Domingo
];

function calcularTotalDiario(vendas) {
    const totaisDiarios = [];
    for (let dia of vendas) {
        let total = 0;
        for (let venda of dia) {
            total += venda;
        }
        totaisDiarios.push(total);
    }
    console.log(totaisDiarios);
}
calcularTotalDiario(vendas);
