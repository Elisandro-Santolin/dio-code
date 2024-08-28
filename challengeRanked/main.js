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


// funcao calcula vitorias
function calculatorPoints(pointsVictory, pointsDefeat){
    let rankedPoints = (pointsVictory - pointsDefeat);
    return rankedPoints;
}

// funcao calcula total partidas
function calculatorMatches(gamesVictory, gamesLose){
    let totalMatches = (gamesVictory + gamesLose);
    return totalMatches;

}

// variavel chama funcao parametros
let rank = calculatorPoints(100, 78);
let matches = calculatorMatches(100,78);
let rankingLevel = calculatorRanking(rank);

//funcao retorna ranking
function calculatorRanking(rank){
    let rankingPoints;

    if(rank < 10){
        rankingPoints = "Ferro"
        return rankingPoints;

    }else if(rank > 10 && rank <= 20){
        rankingPoints = "Bronze"
        return rankingPoints;

    }else if(rank > 20 && rank <= 50){
        rankingPoints = "Prata"
        return rankingPoints;
        
    }else if(rank > 50 && rank <= 80){
        rankingPoints = "Ouro"
        return rankingPoints;
                
    }else if(rank > 80 && rank <= 90){
        rankingPoints = "Diamante"
        return rankingPoints;
                
    }else if(rank > 90 && rank <= 100){
        rankingPoints = "Lendário"
        return rankingPoints;
                
    }else if(rank >= 101){
        rankingPoints = "Imortal"
        return rankingPoints;

    }else {
        return "Pontuação Inválida";
    }
}

console.log(`Jogador com saldo de ${rank} vitórias em ${matches} partidas, elo atual é ${rankingLevel}.`)
