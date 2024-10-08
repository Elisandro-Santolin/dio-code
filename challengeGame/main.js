// # 3️⃣ Escrevendo as classes de um Jogo

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos

// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada


class hero{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type;

    }

    atack(){
        if(this.type === "mago"){
           return `o ${this.type} atacou usando magia ancestral`
        }else if(this.type === "paladino"){
            return `o ${this.type} atacou usando espadas amaldiçoadas`
        }else if(this.type === "monje"){
            return  `o ${this.type} atacou usando artes marciais `
        }else if(this.type === "ninja"){
            return `o ${this.type} atacou usando shurinkens negras`
        }else{
            return null;
        }
    }
}

let heroProperty = new hero("teste", 345, "paladino");

//console.log(heroProperty);

const returnClass = heroProperty.atack();
console.log(returnClass)