const prompt = require('prompt-sync')();
console.clear();

var viver = 1;

    var status = new Object();
    status.dinheiro = 50.00;

    var mercado = new Object();
    mercado.lasanha = 25.00;
    mercado.miojo = 5.00;
    mercado.pipoca = 2.00;

    var padaria = new Object();
    padaria.pao1 = 3.50;
    padaria.pao2 = 3.50;
    padaria.pao3 = 5.50;
    padaria.pao4 = 6.00;

var cardapio = [
    "[1] Pão Frances com manteiga R$ 3,50",
    "[2] Pão Frances com manteiga na chapa R$ 3,50",
    "[3] Pão Frances com requeijão R$ 5,50",
    "[4] Pão Frances com polenguinho R$ 6,00"
]

function medico() {
    let alea = Math.floor(Math.random() * 1);

    console.log();
    console.log();
    console.log("Voce chegou ao medico");
    console.log("Voce esta esperando ser chamado");
    if (alea == 0) {
        console.log("Voce ficou na fila");
        console.log("Infelizmente os medicos estavam dormindo.");
        console.log("Voce vomitou até morrer.");
        console.log();
        console.log();
        viver = viver - 1;
    }
    else if (alea == 1) {
        console.log();
        console.log();
        console.log("Assim que voce chegou as infermeiras ja notaram seu pessimo estado.");
        console.log("Voce foi atendido com urgencia.");
        console.log();
        console.log("Voce voltou pra casa");
        console.log("Voce dormiu.")
        prompt("Avançar o dia");

    }
}

let respostaColega;

function historiaPergunta() {
    console.log();
    console.log("   Quem descobriu o Brasil ? ");
    console.log(); 
    console.log(" [1]- Dom pedro I    [2]- Lampião    [3]- Pedro Alvarez Cabral")
    var respostaHistoria = +prompt(" Resposta:  ");
    while (respostaHistoria != 1 && respostaHistoria != 2 && respostaHistoria != 3 ){
        console.log();
        console.log("Invalido!")
        respostaHistoria = +prompt("");
        console.log();
        }
    console.log();

    if (respostaHistoria == "3" ) {
        console.clear();
        console.log("       VOCE ACERTOU!");
    }
    else {
        console.clear();
        console.log("       VOCE ERROU!");
    }
    console.log();
}

function matematicaPergunta() {
    console.log();
    console.log("   Quanto é   10 / 5 ");
    console.log();
    console.log(" [1]- 15    [2]- 5    [3]- 25");
    var respostaMatematica = +prompt(" Resposta: ");
    while (respostaMatematica != 1 && respostaMatematica != 2 && respostaMatematica != 3 ){
        console.log();
        console.log("Invalido!")
        respostaMatematica = +prompt("");
        console.log();
        }
    console.log();

    if (respostaMatematica == "2") {
        console.clear();
        console.log("       VOCE ACERTOU!");
    }
    else {
        console.clear();
        console.log("       VOCE ERROU  !");
    }   
    console.log();
}

function geografiaPergunta() {
    
    console.log();
    console.log("   Qual continente fica o Brasil? ");
    console.log();
    console.log(" [1]- America    [2]- Europa    [3]- Oceania");
    var respostaGeografia = +prompt(" Resposta: ");
    while (respostaGeografia != 1 && respostaGeografia != 2 && respostaGeografia != 3 ){
        console.log();
        console.log("Invalido!")
        respostaGeografia = +prompt("");
        console.log();
        }
    console.log();

    if (respostaGeografia == "1") {
        
        console.clear();
        console.log("       VOCE ACERTOU!")
    }
    else {
        console.clear();
        console.log("       VOCE ERROU!");
    }
    console.log();
}

var jantar = function() {
    console.log("O que voce quer comer? ");
    console.log();
    console.log("[1]- lasanha R$ 25,00  |   [2]- Miojo R$ 6,00  |   [3]- pipoca R$ 2,00");
    var jantarEscolha = +prompt(" Resposta: ");
    while (jantarEscolha != 1 && jantarEscolha != 2 && jantarEscolha != 3 ){
        console.log();
        console.log("Invalido!")
        jantarEscolha = +prompt("");
        console.log();
        }
    console.clear();
    

if (status.dinheiro < 0){
    console.log("Voce nao tem dinheiro para comprar nada.");
    console.log();
    console.log("Voce vai pra casa com fome");
    console.log("Voce dormiu.")
}
else {
    if (jantarEscolha == 1) {
            status.dinheiro = status.dinheiro - mercado.lasanha;
            console.log(status);
            console.log("Voce vai pra casa");
            console.log();
            console.log("Voce coloca a lasanha no forno.");
            console.log();
            console.log("Voce vai deixar a lasanha no forno por quanto tempo?");
            console.log("[1]- 10min  |   [2]- 25min  |   [3]- 50min");
            console.log();
            let escolhaLasanha = +prompt("");
            while (escolhaLasanha != 1 && escolhaLasanha != 2 ){
                console.log("Invalido!")
                escolhaLasanha = +prompt("");
            }
                if(escolhaLasanha == 1) {
                    console.log("       ~~ [18:40] ~~");
                    console.log();
                    console.log("A lasanha alem de fria esta crua.");
                    console.log("Voce come mesmo assim.")
                    console.log();
                    console.log("Voce vai dormir.");
                    prompt("Avançar o dia");
                }
                else if (escolhaLasanha == 2) {
                    console.log("       ~~ [19:15] ~~");
                    console.log();
                    console.log("A lasanha esta uma delicia!! Voce saboreia cada pedaço.")
                    console.log()
                    console.log("Voce vai dormir.");
                    prompt("Avançar o dia");
                }
                else if (escolhaLasanha == 3) {
                    console.log("       ~~ [20:20] ~~");
                    console.log();
                    console.log("A lasanha explodiu no micro-ondas.");
                    console.log("Voce tera que limpar.");
                    console.log();
                    console.log("Voce foi dormir com fome.");
                    prompt("Avançar o dia");
                }
    }
    else if (jantarEscolha == 2) {
        console.log();
        console.log();
        console.log("Voce vai pra casa");
        console.log("Voce coloca o miojo pra cozinhar");
        console.log("Por quanto tempo voce vai deixar o miojo no fogo? ");
        console.log();
        console.log("[1]- 10min  |   [2]- 15min  |   [3]- 5min");
        var escolhaMiojo = +prompt("");

        while (escolhaMiojo != 1 && escolhaMiojo != 2 && escolhaMiojo != 3 ){
            console.log("Invalido!")
            escolhaMiojo = +prompt("");
        }
        
        if (escolhaMiojo == 1) {
            console.log();
            console.log();
            console.log("O miojo ficou um pouco nojento mas da pra comer.");
            console.log("O tempo ideal era 5 minutos.");
            console.log();
            console.log("Voce vai dormir.");
            prompt("Avançar o dia");        
        }
        else if (escolhaMiojo == 2) {
            console.log();
            console.log();
            console.log("O miojo queimou");
            console.log();
            console.log("Voce quer comer? [1]- sim  |   [2]- nao");
            var comerMiojo = +prompt("");

            while (comerMiojo != 1 && comerMiojo != 2 ){
                console.log("Invalido!")
                escolhaMiojo = +prompt("");
            }

            if(comerMiojo == 1) {
                console.log();
                console.log("Voce esta passando mal");
                console.log("Voce vai ao medico");
                medico();
            }
            else if(comerMiojo == 2) {
                console.log("O tempo ideal era 5 minutos.");
                console.log();
                console.log("Voce foi dormir com fome.");
                prompt("Avançar o dia");
            }
            
        }
        else if (escolhaMiojo == 3) {
            console.log();
            console.log();
            console.log("O miojo ficou uma delicia, se tivesse mais um voce repetia.");
            console.log("Voce nunca fez um miojo tao incrivel assim");
            console.log();
            console.log("Voce vai dormir feliz.");
            prompt("Avançar o dia");
        }
    }
    else if(jantarEscolha == 3) {
        console.log();
        console.log();
        console.log("Voce vai pra casa");
        console.log("Voce coloca as pipocas para estourar no fogão");
        console.log("Por quanto tempo voce vai deixar as pipocas estourando? ");
        console.log();
        console.log("[1]- 5 minutos  |   [2]- 10 minutos  |   [3]- até parar de estourar");
        let escolhaPipoca = +prompt("");
        while (escolhaPipoca != 1 && escolhaPipoca != 2 && escolhaPipoca && 3 ){
            console.log("Invalido!")
            escolhaPipoca = +prompt("");
        }
        if (escolhaPipoca == 1) {
            console.log();
            console.log();
            console.log("A pipoca nao estorou totalmente, da pra comer.");
            console.log("Voce acertou no tempeiro. ");
            console.log();
            console.log("Voce vai dormir.");
            prompt("Avançar o dia");
        }
        else if (escolhaPipoca == 2) {
            console.log();
            console.log();
            console.log("A pipoca queimou. esta uma porcaria");
            console.log("o tempo ideal era esperar parar de estourar.");
            console.log();
            console.log("Voce vai dormir com fome.");
            console.log();
            console.log("Voce quer comer? ");
            console.log("[1]- Sim  |   [2]- Nao");
            console.log();
            let medicoPipoca = +prompt(""); 
            if (medicoPipoca == 1) {
                medico();
            }
            else {
                console.log("Voce foi dormir")
                prompt("Avançar o dia");
            }
        }
        else if (escolhaPipoca == 3) {
            console.log();
            console.log();
            console.log("A pipoca estourou perfeitamente, ficou uma delicia");
            console.log("Voce acertou no tempeiro");
            console.log();
            console.log("Voce vai dormir feliz.");
            prompt("Avançar o dia");
            }
        
        }

    }
}
var colegaChato = function() {
    console.log("Seu companheiro de trabalho esta enchendo seu saco");
    console.log();
    console.log("O que voce quer fazer? ");
    console.log();
    console.log("[1]- Xingar ele    [2]- Ignorar");
    var resposta = prompt(" Resposta: ")
    while (resposta != 1 && resposta != 2 && resposta != 3 ){
        console.log();
        console.log("Invalido!")
        resposta = +prompt("");
        console.log();
        }
    console.clear();

    if (resposta == "1") {
        console.log();
        console.log("Voce xingou ele de coisas terriveis.");
        console.log("Ele esta confuso, ele realmente achava que voce era amigo dele");
        console.log("O seu chefe tambem escutou e te chamou pra ir na sala dele no final do expediente.");
        
    }
    else if (resposta == "2") {
        console.log();
        console.log("Voce apenas o ignora.");
        console.log("Ele continua enchendo o saco!");
        
    }
        
    console.log();
    console.log("          ~~ [18:00] ~~");
    console.log("    Acabou o expediente");
    console.log();


    if (resposta == "1") {
        console.log("Voce vai a sala do seu chefe");
        console.log("Ele te da um esporro enorme por voce ter xingado um funcionario");
        console.log("Voce vai embora..")
        console.log();
        console.log("       ~~ [18:30] ~~");
        console.log();
        console.log("Andando na rua os amigos do seu colega de trabalho te encurralam");
        console.log("Te deram uma surra e foram embora");
        console.log();
        console.log("Voce quer ir ao medico? ");
        let medicoAmigo = prompt("");

        if (medicoAmigo) {
            medico();
        }
        else{
        console.log();
        console.log("       ~~ [19:00] ~~");
        console.log();
        console.log("Quando voce consegue se recuperar, voce vai para casa lentamente ");
        console.log();
        console.log("       ~~ [20:00] ~~");
        console.log();
        console.log("Voce nao tem forças para comer.");
        console.log("Apenas vai dormir .");
        prompt("Avançar o dia");
        }
    }          
    else if (resposta == "2") {
        console.log("Voce sai do trabalho e vai ao mercado.");
        console.log();
        console.log("       ~~ [18:30] ~~");
        console.log();
        console.log(jantar());
    }
}

console.log();
    console.log("   	~~~~~~     VOCE TEM QUE FICAR VIVO DURANTE 3 DIAS      ~~~~~~");
    console.log("---------------------------------------------------------------------------------------------");
    

for (let i = 1; i <= 3; i++) {

    console.log(`       dia ${i}`);
    console.log();
    console.log(status);
    console.log();
    console.log("      ~~ [07:00] ~~");
    console.log();
    console.log("Voce acordou.");
    console.log();
    console.log("   Sua escola começa as  ~~ [08:00] ~~ ");
    console.log();
    console.log("voce levanta da cama.");
    console.log("vai ao banheiro e escova os dentes");
    console.log("olha no armario e nao tem nada para comer.")
    console.log("voce decide ir a padaria.")
    console.log("voce se arruma e vai.");
    console.log("");
    console.log("       ~~ [07:25] ~~");
    console.log("");
    console.log("chegando la a atendente te da um cardapio com algumas opçoes ");
    console.log("");
    console.log(cardapio);
    var cafeDaManha = +prompt("   Qual voce escolhe? ");
    console.log();

    while(cafeDaManha != 1 && cafeDaManha != 2 &&  cafeDaManha != 3 && cafeDaManha != 4) {
        console.clear();
        console.log(cardapio);
        console.log();
        console.log("   Invalido! ");
        console.log();
        cafeDaManha = +prompt("   Qual voce escolhe? ");
    }

    switch(cafeDaManha){
        case 1:
            
            status.dinheiro = status.dinheiro - padaria.pao1;
            console.log();
            console.log("~~ Voce tem " + status.dinheiro + " R$ ~~");
            console.log();
            console.log("Otima escolha, ja irei trazer seu Pão Frances com manteiga! ");
            console.log("");
            console.log("       ~~ [07:30] ~~");
            console.log("");
            console.log("Atendente: Aqui esta seu pedido.");
            console.log();
            console.log("Voce comeu todo o pão.")
            console.log("Voce esta satisfeito");
            console.log();
            console.clear();
            break;

        case 2:

            status.dinheiro = status.dinheiro - padaria.pao2;
            console.log();
            console.log("~~ Voce tem " + status.dinheiro + " R$ ~~");
            console.log();
            console.log("Otima escolha, ja irei trazer seu Pão Frances com manteiga na chapa! ");
            console.log();
            console.log("       ~~ [07:45] ~~");
            console.log();
            console.log("Desculpe o atraso, aqui esta seu pedido!");   
            console.log();
            console.log("Voce comeu todo o pão");
            console.log("Voce esta satisfeito");
            console.log();
            console.clear();
            break;

        case 3:

            status.dinheiro = status.dinheiro - padaria.pao3;
            cafeDaManha = prompt("   Qual voce escolhe? ");
            console.log("~~ Voce tem " + status.dinheiro + " R$ ~~");
            console.log();
            console.log("Otima escolha, ja irei trazer seu Pão Frances com requeijão! ");
            console.log();
            console.log("       ~~ [07:30] ~~");
            console.log();
            console.log("aqui esta seu pedido!");
            console.log();
            console.log("Voce esta satisfeito");
            console.log();
            console.clear();
            break;

        case 4:

            status.dinheiro = status.dinheiro - padaria.pao4;
            cafeDaManha = prompt("   Qual voce escolhe? ");
            console.log("~~ voce tem " + status.dinheiro + " R$ ~~");
            console.log();
            console.log("Otima escolha, ja irei trazer seu Pão Frances com polenguinho! ");
            console.log();
            console.log("       ~~ [07:30] ~~");
            console.log();
            console.log("Aqui esta seu pedido!");
            console.log();
            console.log("Voce esta satisfeito");
            console.log();
    }

    console.log();
    console.log("           ~~ [07:45] ~~");
    console.log();
    console.log("Voce corre para chegar a escola")
    console.log("chegando..");
    console.log("Quando voce chega, seus amigos te cumprimentam ");
    console.log();
    console.log();
    console.log("           ~~ [08:00] ~~");
    console.log();
    console.log("Primeira Aula: Historia");
    console.log();
    console.log("       -- O professor te fez uma pergunta --");
    console.log();
    historiaPergunta();

    console.log()
    console.log("         ~~ [09:00] ~~");
    console.log();
    console.log("Segunda Aula: Matematica");
    console.log();
    console.log("       -- O professor te fez uma pergunta --");
    console.log();
    matematicaPergunta();


    console.log();
    console.log("          ~~ [09:00] ~~");
    console.log();
    console.log("Terceira Aula: Geografia");
    console.log();
    console.log("       -- O professor te fez uma pergunta --");
    console.log();
    geografiaPergunta();

    console.log();
    console.log("           ~~ [12:00] ~~");
    console.log();
    console.log("Acabou a escola");
    console.log();
    console.log("       -- Voce esta caminhando direto para o trabalho --");
    console.clear();
    console.log("           ~~ [13:00] ~~ ");
    console.log();
    console.log("Chegou no trabalho");
    console.log();
    console.log("       Assim que voce chega seu chefe te manda fazer a limpeza do escritorio");
    console.log("       Voce não tem escolha e apenas faz o que ele mandou");
    console.log();
    console.log("           ~~ [13:30] ~~");
    console.log();
    console.log("       Voce termina a tarefa e começa as reunioes diarias");
    console.log();
    console.log("            ~~ [15:00] ~~");
    console.log();
    console.log("Acabou as reunioes");
    console.log();
    colegaChato(respostaColega);
    if (viver == 0) {
        console.log("(X_X) Voce Morreu! (X_X)")
        break;
    }
    if (status.dinheiro == 0) {
        console.log();
        console.log("(X_X) Voce faliu e consecutivamente morreu de fome (X_X)")
    }
    console.clear();
}

if (viver == 1) {
    console.log("VOCE GANHOU!")
}
