// ===============================
// ROLAR PARA AS SEÇÕES (ÂNCORAS)
// ===============================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute("href"));
        alvo.scrollIntoView({ behavior: "smooth" });
    });
});


// ===============================
// QUIZ
// ===============================
const botoes = document.querySelectorAll(".quiz-option");

botoes.forEach(btn => {
    btn.addEventListener("click", () => {
        const resposta = btn.textContent.trim().toLowerCase();

        if (resposta === "hello") {
            alert("✔️ Correto! ‘Hello’ significa Olá.");
        } else {
            alert("❌ Errado. Tente novamente!");
        }
    });
});


// ===============================
// BOTÃO DE COMPRA
// ===============================
const comprarBtn = document.getElementById("comprar");

if (comprarBtn) {
    comprarBtn.addEventListener("click", () => {
        alert("No futuro, aqui vai entrar o link de compra (Gumroad, Payhip ou Hotmart).");
    });
}

// ===============================
// BOTÃO "PRÓXIMA PÁGINA" DA PAGE 4
// ===============================

const nextPageBtn = document.getElementById("nextPageBtn");

if (nextPageBtn) {
    nextPageBtn.addEventListener("click", () => {
        const page1 = document.querySelector("#page1");
        page1.scrollIntoView({ behavior: "smooth" });
    });
}

                        //   respostas erra ou acerta


// Banco inicial de perguntas
let perguntasFixas = [
    { pergunta: 'Como se diz "Olá" em inglês?', respostas: ['Hello', 'Bye', 'Thanks'], correta: 'Hello' },
    { pergunta: 'Como se diz "Obrigado" em inglês?', respostas: ['Please', 'Thank you', 'Sorry'], correta: 'Thank you' },
    { pergunta: 'Como se diz "Por favor" em inglês?', respostas: ['Please', 'Hello', 'Good night'], correta: 'Please' },
    { pergunta: 'Como se diz "Bom dia" em inglês?', respostas: ['Good night', 'Thanks', 'Good morning'], correta: 'Good morning' },
    { pergunta: 'Como se diz "Desculpa" em inglês?', respostas: ['Excuse me', 'Hello', 'Bye'], correta: 'Excuse me' }
];

// Palavras para gerar novas perguntas
const palavrasBase = [
    ["Cat", "Gato"],
    ["Dog", "Cachorro"],
    ["House", "Casa"],
    ["Water", "Água"],
    ["Food", "Comida"],
    ["Car", "Carro"],
    ["School", "Escola"],
    ["Book", "Livro"],
    ["Chair", "Cadeira"],
    ["Window", "Janela"],
    ["Sun", "Sol"],
    ["Moon", "Lua"],
    ["Street", "Rua"],
    ["Table", "Mesa"],

    // ▶ NOVAS PALAVRAS (50)
    ["Girl", "Menina"],
    ["Boy", "Menino"],
    ["Mother", "Mãe"],
    ["Father", "Pai"],
    ["Brother", "Irmão"],
    ["Sister", "Irmã"],
    ["City", "Cidade"],
    ["Country", "País"],
    ["Computer", "Computador"],
    ["Phone", "Telefone"],
    ["Music", "Música"],
    ["Movie", "Filme"],
    ["Bedroom", "Quarto"],
    ["Kitchen", "Cozinha"],
    ["Bathroom", "Banheiro"],
    ["Beach", "Praia"],
    ["Mountain", "Montanha"],
    ["River", "Rio"],
    ["Food", "Comida"],
    ["Milk", "Leite"],
    ["Bread", "Pão"],
    ["Egg", "Ovo"],
    ["Coffee", "Café"],
    ["Tea", "Chá"],
    ["Fruit", "Fruta"],
    ["Apple", "Maçã"],
    ["Banana", "Banana"],
    ["Orange", "Laranja"],
    ["Grape", "Uva"],
    ["Fish", "Peixe"],
    ["Chicken", "Frango"],
    ["Airplane", "Avião"],
    ["Train", "Trem"],
    ["Bus", "Ônibus"],
    ["Bicycle", "Bicicleta"],
    ["Shoes", "Sapatos"],
    ["Clothes", "Roupas"],
    ["Door", "Porta"],
    ["Garden", "Jardim"],
    ["Flower", "Flor"],
    ["Tree", "Árvore"],
    ["Glass", "Copo"],
    ["Milk", "Leite"],
    ["Money", "Dinheiro"],
    ["Street", "Rua"],
    ["Teacher", "Professor"],
    ["Student", "Estudante"],
    ["Paper", "Papel"],
    ["Pen", "Caneta"],
    ["Clock", "Relógio"],
    ["Bed", "Cama"],
    ["Light", "Luz"]
];

// Guarda TUDO o que já foi perguntado (fixas e geradas)
let usadas = [];

function embaralhar(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// Gera pergunta inédita
function gerarPerguntaNova() {
    let item;
    let tentativa = 0;

    do {
        item = palavrasBase[Math.floor(Math.random() * palavrasBase.length)];
        tentativa++;

        // Evita loop infinito caso todas as palavras sejam usadas
        if (tentativa > 100) break;

    } while (usadas.some(q => q.pergunta.includes(item[1])));

    return {
        pergunta: `Como se diz "${item[1]}" em inglês?`,
        respostas: embaralhar([item[0], "Hello", "Thanks", "Please"]),
        correta: item[0]
    };
}

function proximaPergunta() {
    const quizDiv = document.getElementById("quiz");
    let q;

    // 1️⃣ Primeiro usa todas fixas sem repetir
    if (perguntasFixas.length > 0) {
        q = perguntasFixas.shift();
        usadas.push(q);
    } else {
        // 2️⃣ Depois gera pergunta nova SEM REPETIR NUNCA
        q = gerarPerguntaNova();
        usadas.push(q);
    }

    quizDiv.innerHTML = `
        <p>${q.pergunta}</p>
        ${q.respostas.map(r => `<button class="quiz-option">${r}</button>`).join("")}
    `;

    document.querySelectorAll(".quiz-option").forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.textContent === q.correta) {
                alert("✔️ Resposta correta! Próxima pergunta...");
                proximaPergunta();
            } else {
                alert("❌ Resposta errada! Tente novamente.");
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", proximaPergunta);

                                
                // ===============================
                // PONTUAÇÃO
                // ===============================

let score = 0; 
const scoreDisplay = document.getElementById("score");

function atualizarPontuacao() {
    score++;
    scoreDisplay.textContent = score;
}

                    // ===============================
                    // TEMPO POR PERGUNTA
                    // ===============================

let tempo = 10; // segundos
let intervalo;
const timerDisplay = document.getElementById("timer");

// Reinicia o cronômetro
function iniciarTimer() {
    tempo = 10;
    timerDisplay.textContent = tempo;

    clearInterval(intervalo);

    intervalo = setInterval(() => {
        tempo--;
        timerDisplay.textContent = tempo;

        if (tempo <= 0) {
            clearInterval(intervalo);
            alert("⏳ Tempo esgotado! Próxima pergunta...");
            proximaPergunta(); // chama seu sistema atual
        }
    }, 1000);
}

// Sempre reinicia o timer quando a pergunta muda
document.addEventListener("DOMContentLoaded", iniciarTimer);

// Quando clicar em uma resposta → reinicia o tempo na nova pergunta
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("quiz-option")) {
        setTimeout(() => iniciarTimer(), 300); // espera o alerta fechar
    }
});

                    // ===============================
                    // BOTÃO REINICIAR TEMPO
                    // ===============================

const restartBtn = document.getElementById("restart-timer-btn");

if (restartBtn) {
    restartBtn.addEventListener("click", () => {
        iniciarTimer(); // usa sua própria função
    });
}

                    // ===============================
                    // BOTÃO REINICIAR QUIZ
                    // ===============================

const restartQuizBtn = document.getElementById("restart-quiz-btn");

if (restartQuizBtn) {
    restartQuizBtn.addEventListener("click", () => {

        // Reinicia pontuação
        score = 0;
        scoreDisplay.textContent = score;

        // Reinicia listas de perguntas
        perguntasFixas = [
            { pergunta: 'Como se diz "Olá" em inglês?', respostas: ['Hello', 'Bye', 'Thanks'], correta: 'Hello' },
            { pergunta: 'Como se diz "Obrigado" em inglês?', respostas: ['Please', 'Thank you', 'Sorry'], correta: 'Thank you' },
            { pergunta: 'Como se diz "Por favor" em inglês?', respostas: ['Please', 'Hello', 'Good night'], correta: 'Please' },
            { pergunta: 'Como se diz "Bom dia" em inglês?', respostas: ['Good night', 'Thanks', 'Good morning'], correta: 'Good morning' },
            { pergunta: 'Como se diz "Desculpa" em inglês?', respostas: ['Excuse me', 'Hello', 'Bye'], correta: 'Excuse me' }
        ];

        usadas = []; // limpa histórico

        alert("🔄 Quiz reiniciado!");

        proximaPergunta(); // volta para a primeira pergunta
        iniciarTimer();    // reinicia o tempo
    });
}

                                    


                   





