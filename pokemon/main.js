var p1 = {'ataque': 0, 'defesa': 0, 'velocidade': 0, 'hp': 0, 'pontos': 10};
var p2 = {'ataque': 0, 'defesa': 0, 'velocidade': 0, 'hp': 0, 'pontos': 10};

function setp1(valor, id, status) {
    p1[status] += valor; // Incrementa o valor do status
    if (p1['pontos'] > 1) {
        document.getElementById(id).innerHTML = p1[status].toString(); // Atualiza o valor no elemento HTML
        p1['pontos'] -= valor; // Decrementa os pontos
        updatePontosp1();
    } else {
        document.getElementById('statusp1').innerHTML = ''
    }
}

function updatePontosp1() {
    document.getElementById('pontos1').innerText = p1['pontos'].toString(); // Atualiza a exibição dos pontos restantes
}
function updatePontosp2() {
    document.getElementById('pontos2').innerText = p2['pontos'].toString(); // Atualiza a exibição dos pontos restantes
}
function setp2(valor, id, status) {
    p2[status] += valor; // Incrementa o valor do status
    if (p2['pontos'] > 1) {
        document.getElementById(id).innerHTML = p2[status].toString(); // Atualiza o valor no elemento HTML
        p2['pontos'] -= valor; // Decrementa os pontos
        updatePontosp2();
    } else {
        document.getElementById('statusp2').innerHTML = ''
    }
}