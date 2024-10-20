const coordenadas = {
    'Guarita': [0, 0],
    'Estacionamento': [-5.5, 5.75],
    'Administrativo': [-8, 9],
    'Entrada Salas F/D': [-29.5, 15],
    'Entrada Salas C/E': [-14, 17],
    'Saída Salas C/E': [-16.5, 20],
    'Saída Salas F/D': [-29.5, 21],
    'Saída Mini Auditório': [-12.75, 28.5],
    'Laboratórios': [-34.5, 29],
    'Auditório': [-17.25, 32.25],
    'Biblioteca': [-5, 31.25],
    'Pedagógico': [-7, 25],
    'Cantina': [1.75, 27],
    'Refeitório': [29, 33.5],
    'Ginásio': [38, 17],
    'Encruzilhada E/A': [-5.5, 7.5],
    'Encruzilhada G/E/G': [0, 7.5],
    'Encruzilhada S/A': [-15.5, 9],
    'Encruzilhada S/C': [0, 17],
    'Encruzilhada C/B': [0, 27],
    'Encruzilhada B/R': [0, 33.5],
    'Encruzilhada P/B': [-9, 33.5],
    'Encruzilhada M/A': [-12.75, 33.5],
    'Encruzilhada L/A': [-17.25, 33.5],
    'Encruzilhada S/L': [-29.5, 29],
    'Encruzilhada S/P': [-9.5, 17],
    'Encruzilhada G/G': [36, 15],
    'Encruzilhada B': [-5, 33.5],
    'Encruzilhada B/P': [-9.5, 25]
};

const grafo = {
    'Guarita': {'Encruzilhada G/E/G': 7.5},
    'Estacionamento': {'Encruzilhada E/A': 1.75},
    'Administrativo': {'Encruzilhada E/A': 4.75, 'Encruzilhada S/A': 7.5},
    'Entrada Salas F/D': {'Entrada Salas C/E': 15, 'Saída Salas F/D': 6, 'Encruzilhada S/A': 14},
    'Entrada Salas C/E': {'Entrada Salas F/D': 15, 'Encruzilhada S/A': 8, 'Saída Salas C/E': 5.5, 'Encruzilhada S/P': 4.5, 'Saída Mini Auditório': 14.25},
    'Saída Salas C/E': {'Encruzilhada S/L': 12.5, 'Entrada Salas C/E': 5.5},
    'Saída Salas F/D': {'Entrada Salas F/D': 6, 'Encruzilhada S/L': 8},
    'Saída Mini Auditório': {'Encruzilhada M/A': 5, 'Entrada Salas C/E': 14.25},
    'Laboratórios': {'Encruzilhada S/L': 5},
    'Auditório': {'Encruzilhada L/A': 1.25},
    'Biblioteca': {'Encruzilhada B': 2.25},
    'Pedagógico': {'Encruzilhada B/P': 2.5},
    'Cantina': {'Encruzilhada C/B': 1.75},
    'Refeitório': {'Encruzilhada B/R': 29, 'Encruzilhada G/G': 19.5},
    'Ginásio': {'Encruzilhada G/G': 2},
    'Encruzilhada E/A': {'Estacionamento': 1.75, 'Encruzilhada G/E/G': 5.5, 'Administrativo': 4.75},
    'Encruzilhada G/E/G': {'Guarita': 7.5, 'Encruzilhada E/A': 5.5, 'Encruzilhada G/G': 47, 'Encruzilhada S/C': 9.5},
    'Encruzilhada S/A': {'Administrativo': 7.5, 'Entrada Salas F/D': 14, 'Entrada Salas C/E': 8},
    'Encruzilhada S/C': {'Encruzilhada G/E/G': 9.5, 'Encruzilhada S/P': 9.5, 'Encruzilhada C/B': 10},
    'Encruzilhada C/B': {'Encruzilhada S/C': 10, 'Cantina': 1.75, 'Encruzilhada B/R': 6.5},
    'Encruzilhada B/R': {'Encruzilhada C/B': 6.5, 'Refeitório': 29, 'Encruzilhada B': 5},
    'Encruzilhada P/B': {'Encruzilhada M/A': 3.75, 'Encruzilhada B/P': 10, 'Encruzilhada B': 4},
    'Encruzilhada M/A': {'Encruzilhada P/B': 3.75, 'Encruzilhada L/A': 4.5, 'Saída Mini Auditório': 5},
    'Encruzilhada L/A': {'Encruzilhada M/A': 4.5, 'Encruzilhada S/L': 12.5, 'Auditório': 1.25},
    'Encruzilhada S/L': {'Encruzilhada L/A': 12.5, 'Saída Salas F/D': 8, 'Saída Salas C/E': 12.5, 'Laboratórios': 5},
    'Encruzilhada S/P': {'Entrada Salas C/E': 4.5, 'Encruzilhada B/P': 8, 'Encruzilhada S/C': 9.5},
    'Encruzilhada G/G': {'Ginásio': 2, 'Refeitório': 19.5, 'Encruzilhada G/E/G': 47},
    'Encruzilhada B': {'Biblioteca': 2.25, 'Encruzilhada P/B': 4, 'Encruzilhada B/R': 5},
    'Encruzilhada B/P': {'Encruzilhada P/B': 10, 'Pedagógico': 2.5, 'Encruzilhada S/P': 8}
};

function heuristica(nodo, destino) {
    const [x1, y1] = coordenadas[nodo];
    const [x2, y2] = coordenadas[destino];
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

function aStar(grafo, inicio, destino, heuristica) {
    const filaPrioridade = [[0, inicio]];
    const scoreG = {};
    const scoreF = {};
    const caminho = {};
    for (let nodo in grafo) {
        scoreG[nodo] = Infinity;
        scoreF[nodo] = Infinity;
        caminho[nodo] = null;
    }
    scoreG[inicio] = 0;
    scoreF[inicio] = heuristica(inicio, destino);

    while (filaPrioridade.length > 0) {
        filaPrioridade.sort((a, b) => a[0] - b[0]);
        const [_, nodoAtual] = filaPrioridade.shift();

        if (nodoAtual === destino) {
            let rota = [];
            let temp = destino;
            while (temp) {
                rota.push(temp);
                temp = caminho[temp];
            }
            return { rota: rota.reverse(), custo: scoreG[destino] };
        }

        for (let vizinho in grafo[nodoAtual]) {
            let peso = grafo[nodoAtual][vizinho];
            let gNovo = scoreG[nodoAtual] + peso;

            if (gNovo < scoreG[vizinho]) {
                caminho[vizinho] = nodoAtual;
                scoreG[vizinho] = gNovo;
                scoreF[vizinho] = gNovo + heuristica(vizinho, destino);
                filaPrioridade.push([scoreF[vizinho], vizinho]);
            }
        }
    }
    return { rota: [], custo: Infinity };
}

function findPath() {
    const inicio = document.getElementById('start').value;
    const destino = document.getElementById('end').value;

    const resultado = aStar(grafo, inicio, destino, heuristica);
    document.getElementById('result').innerText = `Caminho: ${resultado.rota.join(' -> ')}\nCusto: ${resultado.custo}`;
}

window.onload = () => {
    const startSelect = document.getElementById('start');
    const endSelect = document.getElementById('end');
    
    startSelect.innerHTML = '';
    endSelect.innerHTML = '';
    
    for (let key in coordenadas) {
        const optionStart = document.createElement('option');
        optionStart.value = key;
        optionStart.text = key;
        startSelect.add(optionStart);

        const optionEnd = document.createElement('option');
        optionEnd.value = key;
        optionEnd.text = key;
        endSelect.add(optionEnd);
    }
};
