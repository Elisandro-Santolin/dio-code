// # 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões

// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

let typeHero = prompt("Selecione um tipo de herói: " + "\n\n" +
                      " 1 - Mago" + "\n" +
                      " 2 - Paladino" + "\n" +
                      " 3 - Troglodita" + "\n\n"
                    );
                    
switch (typeHero){
    case "1":
        typeHero = "Gandalf";
        alert("O herói é do tipo Mago. Seu nome é Gandalf.");
        break;
    case "2":
        typeHero = "Arondir";
        alert("O herói é do tipo Paladino. Seu nome é Arondir.");
        break;
    case "3":
        typeHero = "Oruk";
        alert("O herói é do tipo Troglodita. Seu nome é Oruk Orcs.");
        break;
    default:
        typeHero = false;
        alert("Opção não localizada");
        break;
}
if(typeHero != false){

let pointsHero = prompt("Digite o XP do seu herói: ");

    if(pointsHero <= 1000){
        alert("O Herói de nome " + typeHero + " está no nível de Ferro!");

    }else if (pointsHero > 1000 && pointsHero <= 2000){
        alert("O Herói de nome " + typeHero + " está no nível de Bronze!");

    }else if (pointsHero > 2000 && pointsHero <=  5000){
        alert("O Herói de nome " + typeHero + " está no nível de Prata!");
        
    }else if (pointsHero > 5000 && pointsHero <= 7000){
        alert("O Herói de nome " + typeHero + " está no nível de Ouro!");
        
    }else if (pointsHero > 7000 && pointsHero <= 8000){
        alert("O Herói de nome " + typeHero + " está no nível de Platina!");

    }else if (pointsHero > 8000 && pointsHero <= 9000){
        alert("O Herói de nome " + typeHero + " está no nível de Ascendente!");
        
    }else if (pointsHero > 9000 && pointsHero <= 10000){
        alert("O Herói de nome " + typeHero + " está no nível de Imortal!");

    }else{
        alert("O Herói de nome " + typeHero + " está no nível de Radiante!");

        }
}else {
    alert("Reinicie");
}