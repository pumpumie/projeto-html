const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que são recifes de coral e por que são importantes?",
        alternativas: [
            {
                texto:"Formações de gelo flutuantes que abrigam pinguins e focas.",
                afirmação:"Estruturas rochosas subaquáticas formadas por corais que fornecem habitat para uma grande variedade de vida marinha."
            }
            
        ]
    },
    {
        enunciado: "Qual é a principal fonte de energia nos ecossistemas submarinos?",
        alternativas: [
           {
              texto:"Gás metano.",
            afirmação:"Luz solar."
           }
        ]
    }
]; 
const perguntas = [
    {
        enunciado: " O que é um sítio arqueológico subaquático?",
        alternativas: [
            {
               texto:"Uma área onde naufrágios históricos foram documentados"
            afirmação:"Um local onde são realizadas escavações submarinas em busca de artefatos antigos."
        }
            
        ]
    },
    {
        enunciado: " Por que a preservação de sítios arqueológicos subaquáticos é importante?",
        alternativas: [
           {
             texto:"Para fornecer habitat para a vida marinha.",
               afirmação: "Para proteger a integridade histórica e cultural dos artefatos encontrados."
           }
            ]
    }
]; 

let atual = 0;
let perguntaAtual;
let históriaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
     }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent = "";
    mostraAlternativas();

{
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraPergunta()
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();