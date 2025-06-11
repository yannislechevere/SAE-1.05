// Constantes pour les couleurs
const COULEUR_FOND_NOIR = 'black';
const COULEUR_FOND_BLANC = 'white';
const COULEUR_TEXTE_NOIR = 'black';
const COULEUR_TEXTE_BLANC = 'white';
const COULEUR_FOND_GRIS = 'gray';
const COULEUR_FOND_BEIGE = '#e3d2c1';

// Fonction pour changer la couleur de fond et de texte de la page
function changerCouleurFondPage(isBlackBackground) {
    document.body.style.backgroundColor = isBlackBackground ? COULEUR_FOND_BLANC : COULEUR_FOND_NOIR;
    document.body.style.color = isBlackBackground ? COULEUR_TEXTE_NOIR : COULEUR_TEXTE_BLANC;
}

// Fonction pour changer la couleur de fond des articles
function changerCouleurFondArticles(isBlackBackground) {
    const articles = document.querySelectorAll('article, section');
    articles.forEach(article => {
        article.style.backgroundColor = article.style.backgroundColor === COULEUR_FOND_GRIS ? COULEUR_FOND_BEIGE : COULEUR_FOND_GRIS;
    });
}

// Fonction pour changer la couleur de fond et de texte de la barre de navigation
function changerCouleurFondNavigation(isBlackBackground) {
    const navs = document.querySelectorAll('nav');
    const navCount = navs.length;

    navs.forEach((nav, index) => {
        if (index > 0 && index < navCount - 3) { // Ignorer le premier nav et les trois derniers
            nav.style.backgroundColor = isBlackBackground ? COULEUR_FOND_BEIGE : COULEUR_FOND_GRIS;
            nav.style.color = isBlackBackground ? COULEUR_TEXTE_NOIR : COULEUR_TEXTE_BLANC;
        }
    });
}

// Fonction pour changer la couleur de fond et de texte du dernier div
function changerCouleurFondDernierDiv(isBlackBackground) {
    const lastDiv = document.querySelector('section:last-of-type');
    if (lastDiv) {
        lastDiv.style.backgroundColor = isBlackBackground ? COULEUR_FOND_BLANC : COULEUR_FOND_NOIR;
        lastDiv.style.color = isBlackBackground ? COULEUR_TEXTE_NOIR : COULEUR_TEXTE_BLANC;
    }
}

// Fonction pour changer la couleur de fond et de texte du div contenant l'article "Où se déroulent les compétitions ?"
function changerCouleurFondCompetition(isBlackBackground) {
    const competitionDiv = document.querySelector('aside > div:first-of-type');
    if (competitionDiv) {
        competitionDiv.style.backgroundColor = isBlackBackground ? COULEUR_FOND_BEIGE : COULEUR_FOND_GRIS;
        competitionDiv.style.color = isBlackBackground ? COULEUR_TEXTE_NOIR : COULEUR_TEXTE_BLANC;

        const competitionHeading = competitionDiv.querySelector('h3');
        if (competitionHeading) {
            competitionHeading.style.color = isBlackBackground ? COULEUR_TEXTE_NOIR : COULEUR_TEXTE_BLANC;
        }
    }
}

// Fonction pour changer la couleur de fond et de texte du div contenant l'article "Le détenteur du record"
function changerCouleurFondRecord(isBlackBackground) {
    const recordDiv = document.querySelector('section:last-of-type > div:nth-of-type(2)');
    if (recordDiv) {
        recordDiv.style.backgroundColor = isBlackBackground ? COULEUR_FOND_BEIGE : COULEUR_FOND_GRIS;
        recordDiv.style.color = isBlackBackground ? COULEUR_TEXTE_NOIR : COULEUR_TEXTE_BLANC;

        const recordHeading = recordDiv.querySelector('h3#record');
        if (recordHeading) {
            recordHeading.style.color = isBlackBackground ? COULEUR_TEXTE_NOIR : COULEUR_TEXTE_BLANC;
        }
    }
}

// Fonction principale pour changer la couleur de fond et de texte de la page
function changerCouleurFond() {
    const isBlackBackground = document.body.style.backgroundColor === COULEUR_FOND_NOIR;

    changerCouleurFondPage(isBlackBackground);
    changerCouleurFondArticles(isBlackBackground);
    changerCouleurFondNavigation(isBlackBackground);

    

    changerCouleurFondDernierDiv(isBlackBackground);
    changerCouleurFondCompetition(isBlackBackground);
    changerCouleurFondRecord(isBlackBackground);
}

// Ajout de l'événement pour changer la couleur de fond et de texte de la page
document.getElementById('toggle-backgroundEpreuve').addEventListener('click', changerCouleurFond);


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