function filtrarVendasAcimaDe(totaisDiarios, valorMinimo) {
    const diasComAltaVenda = [];
    for (let i in totaisDiarios) {
        if (totaisDiarios[i] > valorMinimo) {
            diasComAltaVenda.push(i);
        }
    }
    console.log(`Dias com vendas acima de ${valorMinimo}: ${diasComAltaVenda.map(i => ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"][i]).join(", ")}`);
}

const totaisDiariosParaFiltro = [470, 550, 500, 540, 590, 620, 650]; 
filtrarVendasAcimaDe(totaisDiariosParaFiltro, 600); 
