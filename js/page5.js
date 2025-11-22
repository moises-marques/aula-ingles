(function () {

  // dificuldade atual
  window.selectedDifficulty = 'all';

  const select = document.getElementById('difficulty-select');

  if (select) {
    select.value = window.selectedDifficulty;

    select.addEventListener('change', (e) => {
      window.selectedDifficulty = e.target.value;

      document.dispatchEvent(new CustomEvent('difficultyChanged', {
        detail: { level: window.selectedDifficulty }
      }));

      console.log("Dificuldade escolhida:", window.selectedDifficulty);
    });
  }

  // filtra perguntas
  window.filterByDifficulty = function (allQuestions) {
    if (!Array.isArray(allQuestions)) return [];

    if (window.selectedDifficulty === 'all')
      return [...allQuestions];

    return allQuestions.filter(q => q.level === window.selectedDifficulty);
  };

})();
  

//---------------------------------------------
// BANCO DE PERGUNTAS (UMA LISTA SÓ)
//---------------------------------------------
const perguntasPage5 = [

  // BEGINNER
  {
    level: "beginner",
    pergunta: 'Como se diz "cachorro" em inglês?',
    respostas: ["Dog", "Cat", "Bird"],
    correta: "Dog"
  },
  {
    level: "beginner",
    pergunta: 'Como se diz "livro" em inglês?',
    respostas: ["Book", "Look", "Back"],
    correta: "Book"
  },
  {
    level: "beginner",
    pergunta: "Qual é o plural de 'apple'?",
    respostas: ["Apples", "Appled", "Appless"],
    correta: "Apples"
  },
  {
    level: "beginner",
    pergunta: 'O que significa "Good night"?',
    respostas: ["Boa noite", "Bom dia", "Boa tarde"],
    correta: "Boa noite"
  },
  {
    level: "beginner",
    pergunta: 'O que significa "Thank you"?',
    respostas: ["Obrigado", "Desculpa", "Por favor"],
    correta: "Obrigado"
  },
  {
    level: "beginner",
    pergunta: 'O que significa "Car"?',
    respostas: ["Carro", "Casa", "Cama"],
    correta: "Carro"
  },
  {
    level: "beginner",
    pergunta: "Como se diz 'água' em inglês?",
    respostas: ["Water", "Milk", "Juice"],
    correta: "Water"
  },
  {
    level: "beginner",
    pergunta: 'Como se diz "mesa" em inglês?',
    respostas: ["Table", "Cable", "Tablet"],
    correta: "Table"
  },
  {
    level: "beginner",
    pergunta: "Tradução de 'House' é:",
    respostas: ["Casa", "Rua", "Porta"],
    correta: "Casa"
  },
  {
    level: "beginner",
    pergunta: "Qual é a tradução de 'Sun'?",
    respostas: ["Sol", "Lua", "Nuvem"],
    correta: "Sol"
  },

  // -----------------------------------
  // 🟠 10 PERGUNTAS — INTERMEDIATE
  // -----------------------------------

  {
    level: "intermediate",
    pergunta: "Qual frase está correta?",
    respostas: [
      "She doesn't like coffee.",
      "She don't likes coffee.",
      "She doesn't likes coffee."
    ],
    correta: "She doesn't like coffee."
  },
  {
    level: "intermediate",
    pergunta: "Escolha a melhor tradução para: 'I'm looking forward to it.'",
    respostas: [
      "Estou ansioso por isso.",
      "Eu vou olhar para isso.",
      "Estou procurando isso."
    ],
    correta: "Estou ansioso por isso."
  },
  {
    level: "intermediate",
    pergunta: "Qual é o comparativo correto?",
    respostas: ["Better", "More good", "Gooder"],
    correta: "Better"
  },
  {
    level: "intermediate",
    pergunta: "Escolha a frase natural:",
    respostas: [
      "I have lived here for two years.",
      "I live here since two years.",
      "I am living here since two years."
    ],
    correta: "I have lived here for two years."
  },
  {
    level: "intermediate",
    pergunta: "Tradução correta de: 'He might come tomorrow.'",
    respostas: [
      "Ele pode vir amanhã.",
      "Ele veio amanhã.",
      "Ele deve vir ontem."
    ],
    correta: "Ele pode vir amanhã."
  },
  {
    level: "intermediate",
    pergunta: "Qual frase está no passado?",
    respostas: ["They went home.", "They go home.", "They are going home."],
    correta: "They went home."
  },
  {
    level: "intermediate",
    pergunta: "Escolha o sinônimo de 'difficult':",
    respostas: ["Hard", "Large", "Empty"],
    correta: "Hard"
  },
  {
    level: "intermediate",
    pergunta: "Tradução de: 'She forgot her keys.'",
    respostas: ["Ela esqueceu as chaves.", "Ela pega as chaves.", "Ela tem chaves."],
    correta: "Ela esqueceu as chaves."
  },
  {
    level: "intermediate",
    pergunta: "Complete: 'If it rains, ____ at home.'",
    respostas: ["I'll stay", "I stayed", "I stay yesterday"],
    correta: "I'll stay"
  },
  {
    level: "intermediate",
    pergunta: "Escolha a opção correta:",
    respostas: ["I've already eaten.", "I have eat already.", "I already eat."],
    correta: "I've already eaten."
  },

  // --------------------------------
  // 🔴 10 PERGUNTAS — ADVANCED
  // --------------------------------

  {
    level: "advanced",
    pergunta: "Choose the best formal equivalent: 'I need to finish this by tomorrow.'",
    respostas: [
      "I must complete this by tomorrow.",
      "I can finish this later.",
      "I should think about it."
    ],
    correta: "I must complete this by tomorrow."
  },
  {
    level: "advanced",
    pergunta: "Pick the most natural: 'Despite the rain, they carried on.'",
    respostas: [
      "Although it rained, they continued.",
      "They stopped because of rain.",
      "Rain prevented them."
    ],
    correta: "Although it rained, they continued."
  },
  {
    level: "advanced",
    pergunta: "Choose the sentence with correct emphasis:",
    respostas: [
      "What I *do* want is a clear answer.",
      "What I want *do* is a clear answer.",
      "I do what want a clear answer."
    ],
    correta: "What I *do* want is a clear answer."
  },
  {
    level: "advanced",
    pergunta: "Which one is the most precise?",
    respostas: [
      "The results were significantly improved.",
      "The results improved a bit.",
      "There was no change at all."
    ],
    correta: "The results were significantly improved."
  },
  {
    level: "advanced",
    pergunta: "Choose the correct inversion:",
    respostas: [
      "Never had I seen something like that.",
      "Never I had seen something like that.",
      "I had never seen something like that."
    ],
    correta: "Never had I seen something like that."
  },
  {
    level: "advanced",
    pergunta: "Pick the best option: 'He barely noticed the change.'",
    respostas: [
      "Ele mal percebeu a mudança.",
      "Ele percebeu totalmente.",
      "Ele comemorou a mudança."
    ],
    correta: "Ele mal percebeu a mudança."
  },
  {
    level: "advanced",
    pergunta: "Choose the correct nuance:",
    respostas: [
      "She insisted *on* helping.",
      "She insisted *to* help.",
      "She insisted *for* help."
    ],
    correta: "She insisted *on* helping."
  },
  {
    level: "advanced",
    pergunta: "Pick the clearest academic version:",
    respostas: [
      "The data suggests a strong correlation.",
      "The data maybe has something.",
      "The data is kind weird."
    ],
    correta: "The data suggests a strong correlation."
  },
  {
    level: "advanced",
    pergunta: "Identify the best collocation:",
    respostas: [
      "High probability",
      "Tall probability",
      "Long probability"
    ],
    correta: "High probability"
  },
  {
    level: "advanced",
    pergunta: "Choose the correct formal register:",
    respostas: [
      "We appreciate your cooperation.",
      "Thanks a lot, dude.",
      "Yo, thanks man."
    ],
    correta: "We appreciate your cooperation."
  }
];


//--------------------------------------------------
// VARIÁVEIS DO QUIZ
//--------------------------------------------------
let poolP5 = window.filterByDifficulty(perguntasPage5);
let scoreP5 = 0;

const quizP5 = document.getElementById("quiz-p5");
const nextBtnP5 = document.getElementById("next-p5");
const restartBtnP5 = document.getElementById("restart-p5");
const countP5 = document.getElementById("count-p5");
const scoreElP5 = document.getElementById("score-p5");


//--------------------------------------------------
// FUNÇÕES DO QUIZ
//--------------------------------------------------
function atualizarContadores() {
  countP5.textContent = poolP5.length;
  scoreElP5.textContent = scoreP5;
}

function mostrarPerguntaP5() {
  if (poolP5.length === 0) {
    quizP5.innerHTML = "<p>Acabaram as perguntas!</p>";
    return;
  }

  const q = poolP5.shift();

  quizP5.innerHTML = `
    <p>${q.pergunta}</p>
    <div class="options">
      ${q.respostas
        .map(r => `<button class="opt">${r}</button>`)
        .join("")}
    </div>
  `;

  document.querySelectorAll(".opt").forEach(btn => {
    btn.onclick = () => {
      if (btn.textContent === q.correta) {
        scoreP5++;
        alert("✔️ Correto!");
      } else {
        alert("❌ Errado!");
      }
      atualizarContadores();
    };
  });

  atualizarContadores();
}


//--------------------------------------------------
// EVENTOS
//--------------------------------------------------
nextBtnP5.onclick = () => mostrarPerguntaP5();

restartBtnP5.onclick = () => {
  poolP5 = window.filterByDifficulty(perguntasPage5);
  scoreP5 = 0;
  atualizarContadores();
  mostrarPerguntaP5();
};

// quando mudar dificuldade → carregar novo pool
document.addEventListener('difficultyChanged', () => {
  poolP5 = window.filterByDifficulty(perguntasPage5);
  scoreP5 = 0;
  atualizarContadores();
  mostrarPerguntaP5();
});


//--------------------------------------------------
// INICIALIZAÇÃO
//--------------------------------------------------
window.onload = () => {
  poolP5 = window.filterByDifficulty(perguntasPage5);
  atualizarContadores();
  mostrarPerguntaP5();
};
