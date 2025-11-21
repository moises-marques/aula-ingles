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

