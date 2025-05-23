document.addEventListener('DOMContentLoaded',()=>{ 
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta = document.getElementById("proximo");
    const mensagem = document.getElementById('message');
    const containerPerguntas = document.getElementById('container-perguntas');
    const containerResultado = document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn')

    const questoes=[
        "1. Qual empresa fabrica o modelo Tesla Model S?",
        "Qual empresa fabrica o modelo Tesla Model S?",
        "Qual é o principal tipo de energia que move um carro elétrico?",
        "Por que os carros elétricos não poluem o ar como os carros comuns?",
        "O que você precisa fazer para “abastecer” um carro elétrico?",
        "Que tipo de bateria é mais usada nos carros elétricos?",
        "O que acontece quando o carro elétrico usa a “frenagem regenerativa”?",
        "Qual é um dos desafios para ter mais carros elétricos nas ruas?",
        "Como os carros elétricos ajudam o meio ambiente?",
        "Qual é uma diferença que você nota entre um carro elétrico e um comum?",
    ]
   
    let perguntas = 0;
    const respostas = [];

    

    function mostrarPergunta(){
        if(perguntas <questoes.length){
            pergunta.textContent =questoes[perguntas];
            resposta.value='';
            mensagem.textContent ='';
        }else{
            mostrarResultado();
        }
    }

    
        function mostrarResultado(){
        containerPerguntas.classList.add('hidden');
        containerResultado.classList.remove('hidden');
        listaResultado.innerHTML='';

        questoes.forEach((questoes,index)=>{
            const listaItem =document.createElement('li');
            listaItem.innerHTML = `<strong>${questoes}</strong><br>
            Sua Resposta: <span>${respostas[index]}</span>`
            listaResultado.appendChild(listaItem);
        })
    }



    function nextQuestao(){
        const respostaAtual =resposta.value.trim();
        if(respostaAtual ===''){
            mensagem.textContent ="Por favor , digite sua resposta";
            return;
        }
        respostas.push(respostaAtual);
        perguntas++;
        mostrarPergunta();

    }




    function reiniciarQuiz(){
        perguntas =0;
        respostas.length =0;
        containerResultado.classList.add('hidden');
        containerPerguntas.classList.remove('hidden')
        mostrarPergunta();
    }

    proximaPergunta.addEventListener('click',nextQuestao);
    reiniciarBotao.addEventListener('click',reiniciarQuiz);
    mostrarPergunta();

})