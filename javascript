// ======== MODO CLARO/ESCURO ========
const toggleButton = document.querySelector('.toggle-btn');
const body = document.body;
const heroImg = document.getElementById('hero-img');

// Imagens de destaque
const imagemClaro = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Cristiano_Ronaldo_2018_Champions_League_Trophy.jpg";
const imagemEscuro = "https://upload.wikimedia.org/wikipedia/commons/4/40/Cristiano_Ronaldo_bicycle_kick_vs_Juventus.jpg";

function alternarTema() {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    heroImg.src = imagemEscuro;
    heroImg.alt = "Cristiano Ronaldo fazendo gol de bicicleta contra a Juventus em 2018";
  } else {
    heroImg.src = imagemClaro;
    heroImg.alt = "Cristiano Ronaldo com a camisa do Real Madrid segurando a taça da Champions League";
  }
}

// Clique no botão
toggleButton.addEventListener('click', alternarTema);

// Atalho de teclado: Shift
document.addEventListener('keydown', (event) => {
  if (event.key === "Shift") {
    alternarTema();
  }
});
