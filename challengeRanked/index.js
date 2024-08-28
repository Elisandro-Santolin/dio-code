// # 2️⃣ Calculadora de partidas Rankeadas

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"



function calculatorPoints(pointsVictory, pointsDefeat){
    let rankedPoints = (pointsVictory - pointsDefeat)
    return rankedPoints;
}

let rank = calculatorPoints(100, 78)

function calculatorRanking(){
    if (rank <= 10){

    }else if (rank > 10 && rank <= 20){
        
    }else if (rank > 20 && rank <= 50){
        
    }else if (rank > 50 && rank <= 80){
        
    }else if (rank > 80 && rank <= 90){
        
    }else if (rank > 90 && rank <= 100){
        
    }else if (rank >= 101){
        
    }else{
        
    }
}