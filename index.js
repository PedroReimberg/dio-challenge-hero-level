//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
//Info [Name , XP]

let heroInfo = ["Pedro" , 888, "Sem nivel"]

for (i = 0; i < 11; i++){
    //Nível
    switch (true){
        //Se XP for menor do que 1.000 = Ferro
        case (heroInfo[1] <= 1000): 
            heroInfo[2] = "Ferro"
            break
        //Se XP for entre 1.001 e 2.000 = Bronze
        case (heroInfo[1] <= 2000): 
            heroInfo[2] = "Bronze"
            break
        //Se XP for entre 2.001 e 5.000 = Prata
        case (heroInfo[1] <= 5000):
            heroInfo[2] = "Prata"
            break
        //Se XP for entre 6.001 e 7.000 = Ouro
        case (heroInfo[1] <= 7000): 
            heroInfo[2] = "Ouro"
            break
        //Se XP for entre 7.001 e 8.000 = Platina
        case (heroInfo[1] <= 8000): 
            heroInfo[2] = "Platina"
            break
        //Se XP for entre 8.001 e 9.000 = Ascendente
        case (heroInfo[1] <= 9000): 
            heroInfo[2] = "Ascendente"
            break
        //Se XP for entre 9.001 e 10.000= Imortal
        case (heroInfo[1] <= 10000): 
            heroInfo[2] = "Imortal"
            break
        //Se XP for maior ou igual a 10.001 = Radiante
        case (heroInfo[1] >= 10001): 
            heroInfo[2] = "Radiante"
            break
        default:
            break
    }

    //Ao final deve se exibir uma mensagem: "O Herói de nome **{nome}** está no nível de **{nivel}**"
    console.log("O Herói de nome " + heroInfo[0] + " está no nível de " + heroInfo[2])

    //Aumento de XP
    heroInfo[1] += 1000
}