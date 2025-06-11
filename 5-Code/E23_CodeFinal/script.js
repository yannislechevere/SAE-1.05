// Récupérer la barre de navigation
const nav = document.querySelector("main nav");

// Récupérer la hauteur de l'image (le header)
const headerHeight = document.querySelector("header:first-child img").offsetHeight;

// Ajouter une classe "visible" lorsque l'utilisateur défile au-delà de l'image
window.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    nav.classList.add("visible");
  } else {
    nav.classList.remove("visible");
  }
});

document.getElementById('toggle-background').addEventListener('click', function() {
  // Déterminer si le fond actuel est noir
  const isBlackBackground = document.body.style.backgroundColor === 'black';

  // Changer la couleur de fond et de texte de la page
  document.body.style.backgroundColor = isBlackBackground ? 'white' : 'black';
  document.body.style.color = isBlackBackground ? 'black' : 'white'; // Ajuster la couleur du texte

  // Modifier la couleur de fond des articles
  const articles = document.querySelectorAll('article, section');
  articles.forEach(article => {
      article.style.backgroundColor = article.style.backgroundColor === 'gray' ? '#e3d2c1' : 'gray';
  });

  
});

