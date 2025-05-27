/* menu toggle */
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    toggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
});

/* graphique co2 */
document.addEventListener("DOMContentLoaded", function () {
    const ctxCO2 = document.getElementById('co2Chart').getContext('2d');
    new Chart(ctxCO2, {
        type: 'bar',
        data: {
            labels: ['Monde', 'Chine', 'États-Unis', 'UE à 27', 'France'],
            datasets: [ 
                {
                    label: "Production d'électricité",
                    data: [41, 52, 36, 31, 12],
                    backgroundColor: '#FFD700'
                },
                {
                    label: "Secteur de l'énergie (hors élec.)",
                    data: [6, 4, 5, 5, 13],
                    backgroundColor: '#1E90FF'
                },
                {
                    label: "Industrie et construction",
                    data: [24, 28, 37, 31, 43],
                    backgroundColor: '#FF6347'
                },
                {
                    label: "Transport",
                    data: [19, 10, 31, 14, 30],
                    backgroundColor: '#FFA500'
                },
                {
                    label: "Résidentiel",
                    data: [4, 3, 5, 7, 11],
                    backgroundColor: '#8A2BE2'
                },
                {
                    label: "Autres secteurs (dont tertiaire)",
                    data: [6, 3, 8, 7, 14],
                    backgroundColor: '#32CD32'
                }
            ]
        },
        options: {
            responsive: true, 
            plugins: {
                title: {
                    display: false 
                },
                legend: {
                    position: 'top'
                },
                tooltip: {
                    mode: 'index', 
                    intersect: false 
                }
            },
            scales: {
                x: {
                    stacked: true 
                },
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: 'Pourcentage (%)'
                    },
                    max: 100
                }
            }
        }
    });
});

/* graphique d'accès à internet */
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('internetAccessPieChart')) {
        const internetPieCtx = document.getElementById('internetAccessPieChart').getContext('2d');
        const internetAccessPieChart = new Chart(internetPieCtx, {
            type: 'pie',
            data: {
                labels: [
                    'Europe et Amérique du Nord', 
                    "Asie de l'Est et Pacifique", 
                    "Amérique latine et Caraïbes", 
                    'Asie du Sud', 
                    'Moyen-Orient et Afrique du Nord',
                    'Afrique subsaharienne'
                ],
                datasets: [{
                    data: [85, 68, 72, 42, 63, 28],
                    backgroundColor: [
                        '#1f77b4',
                        '#17becf', 
                        '#2ca02c', 
                        '#ff7f0e', 
                        '#d62728', 
                        '#9467bd' 
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Accès à Internet par région (% de la population)',
                        font: {
                            size: 18
                        }
                    },
                    legend: {
                        position: 'right',
                        labels: {
                            boxWidth: 15,
                            padding: 15
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.raw;
                                return `${label}: ${value}% de la population`;
                            }
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 2, 
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 20,
                        bottom: 10
                    }
                }
            }
        });
    }
});

/* graphique des obligations durables */
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('bondsBarChart')) {
        const bondsCtx = document.getElementById('bondsBarChart').getContext('2d');
        const bondsBarChart = new Chart(bondsCtx, {
            type: 'bar',
            data: {
                labels: ['2019', '2020', '2021', '2022', '2023', 'YTD 2024'],
                datasets: [
                    {
                        label: 'Obligations vertes',
                        data: [280, 300, 600, 550, 580, 550],
                        backgroundColor: '#1f77b4',
                        stack: 'Stack 0'
                    },
                    {
                        label: 'Obligations sociales',
                        data: [25, 150, 225, 175, 150, 175],
                        backgroundColor: '#ff7f0e',
                        stack: 'Stack 0'
                    },
                    {
                        label: 'Obligations de durabilité',
                        data: [30, 80, 225, 150, 175, 150],
                        backgroundColor: '#2ca02c',
                        stack: 'Stack 0'
                    },
                    {
                        label: 'Obligations liées à la durabilité',
                        data: [15, 30, 100, 75, 75, 75],
                        backgroundColor: '#17becf',
                        stack: 'Stack 0'
                    },
                    {
                        label: 'Obligations de transition',
                        data: [0, 0, 0, 0, 10, 25],
                        backgroundColor: '#9467bd',
                        stack: 'Stack 0'
                    }
                ]
            },
            options: {
                plugins: {
                    title: {
                        display: true,
                        text: 'Émission d\'obligations durables (2019-2024)',
                        font: {
                            size: 18
                        }
                    },
                    legend: {
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.dataset.label || '';
                                const value = context.raw;
                                return `${label}: ${value} milliards USD`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 1200,
                        title: {
                            display: true,
                            text: 'USD Milliards'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Année'
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }
});



// quiz

function calculateResult() {
    const form = document.getElementById("quizForm");
    const formData = new FormData(form);
    const scores = {
      visionnaire: 0,
      chaos: 0,
      philosophe: 0,
      chef: 0
    };

    for (let [_, value] of formData.entries()) {
      if (scores[value] !== undefined) {
        scores[value]++;
      }
    }

    const resultKey = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    const descriptions = {
      visionnaire: {
        title: "Architecte Visionnaire",
        text: "Tu construis avec les étoiles dans les yeux. Ton plus grand ennemi : la gravité.",
        image: "../img/visionnaire.png"
      },
      chaos: {
        title: "Urbaniste du Chaos",
        text: "Les ronds-points sont ton terrain de jeu. Tu es le Picasso du plan de ville.",
        image: "../img/chaos.png"
      },
      philosophe: {
        title: "Maçon Philosophe",
        text: "Chaque brique est une pensée profonde. Tu poses plus de questions que de béton.",
        image: "../img/philosophe.png"
      },
      chef: {
        title: "Chef de Chantier Autoritaire",
        text: "Tu crées des bâtiments… avec ta voix. Tu es le boss, point barre.",
        image: "../img/chef-chantier.png"
      }
    };

    const res = descriptions[resultKey];
    document.getElementById("result").innerHTML = `
      <h2>${res.title}</h2>
      <p>${res.text}</p>
      <img src="${res.image}" alt="${res.title}">
    `;

    // jouer le son
    const sound = document.getElementById("sound");
    sound.currentTime = 0;
    sound.play();
}

// détails des lignes du tableau
function toggleRow(row) {
  const next = row.nextElementSibling;
  if (next && next.classList.contains('details')) {
    next.style.display = next.style.display === 'table-row' ? 'none' : 'table-row';
  }
}

// convertir les étoiles en animation dynamique 
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-stars]").forEach(cell => {
    const stars = parseInt(cell.getAttribute("data-stars"));
    cell.style.setProperty('--stars', stars);
  });
});


/* Jeu */

      

// Récupération de l'élément canvas et de son contexte 2D pour dessiner
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Taille de chaque case de la grille en pixels
const cellSize = 150;

const gridSize = 4;

// Création d'une grille vide (tableau 2D rempli de null)
// Array.from crée un tableau, fill(null) remplit chaque case avec null
const grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(null));

// Objet pour stocker les scores du joueur
const scores = { env: 0, eco: 0, social: 0 };

// ===== DÉFINITION DES BÂTIMENTS =====

// Objet contenant toutes les propriétés de chaque type de bâtiment
const buildings = {
  // Chaque bâtiment a des effets différents sur l'environnement, l'économie et le social
  usine: { 
    imgSrc: "../img/usine.png", 
    env: -2,           
    social: -2,        
    workersNeeded: 20  
  },
  route2: { 
    imgSrc: "../img/route2.png", 
    env: -1, eco: 2, social: 1 
  },
  route1: { 
    imgSrc: "../img/route1.png", 
    env: -1, eco: 2, social: 1 
  },
  parc: { 
    imgSrc: "../img/parc.png", 
    env: 5,    
    eco: 0,    
    social: 2 
  },
  maison: { 
    imgSrc: "../img/house.png", 
    env: -1, eco: 0, social: 2, 
    inhabitants: 4,  
    workers: 4       
  },
  ecole: { 
    imgSrc: "../img/school.png", 
    env: -1, eco: 2, social: 3, 
    educates: 20  
  },
  magasin: { 
    imgSrc: "../img/magasin.png", 
    env: -1, eco: 1, social: 1, 
    feeds: 20 
  },
  hopital: { 
    imgSrc: "../img/hopital.png", 
    env: -1, eco: 0, social: 3, 
    heals: 20 
  }
};


// Cache pour stocker toutes les images des bâtiments
// Cela évite de recharger les images à chaque fois
const imagesCache = {};
for (const key in buildings) {
  const img = new Image();  // Création d'un nouvel objet Image
  img.src = buildings[key].imgSrc;  // Définition de la source de l'image
  imagesCache[key] = img;  // Stockage dans le cache
}


// Code exécuté quand la page est entièrement chargée
document.addEventListener("DOMContentLoaded", function () {
  // Récupération des éléments du menu 
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  // Ajout d'un écouteur d'événement sur le bouton menu
  toggle.addEventListener('click', function () {
    nav.classList.toggle('active');  // Bascule la classe 'active'
  });

  // Fermeture du menu quand on clique sur un lien
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
});

// ===== FONCTION DE DESSIN DE LA GRILLE =====

function drawGrid() {
  // Effacement complet du canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Double boucle pour parcourir chaque case de la grille
  for(let y = 0; y < gridSize; y++) {
    for(let x = 0; x < gridSize; x++) {
      // Dessin du contour de chaque case
      ctx.strokeStyle = "#555";  // Couleur grise pour les lignes
      ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
      
      // Récupération du bâtiment présent dans cette case
      const b = grid[y][x];
      
      // Si il y a un bâtiment dans cette case
      if(b) {
        // Recherche du type de bâtiment correspondant
        const type = Object.keys(buildings).find(key => buildings[key] === b);
        // Récupération de l'image depuis le cache
        const img = imagesCache[type];
        
        // Vérification que l'image est chargée avant de la dessiner
        if (img.complete) {
          ctx.drawImage(img, x * cellSize, y * cellSize, cellSize, cellSize);
        } else {
          // Si l'image n'est pas encore chargée, on redessine quand elle sera prête
          img.onload = () => drawGrid();
        }
      }
    }
  }
}


// Fonction appelée quand on commence à glisser un bâtiment
function onDragStart(event, type) {
  // Stockage du type de bâtiment dans les données de transfert
  event.dataTransfer.setData("buildingType", type);
}

// Autorisation du dépôt sur le canvas
canvas.addEventListener("dragover", e => e.preventDefault());

// Gestion du dépôt d'un bâtiment sur le canvas
canvas.addEventListener("drop", e => {
  e.preventDefault();
  
  // Récupération du type de bâtiment glissé
  const type = e.dataTransfer.getData("buildingType");
  if(!type) return;  // Si pas de type, on arrête
  
  // Récupération des propriétés du bâtiment
  const building = buildings[type];
  
  // Calcul de la position de la souris relative au canvas
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / cellSize);
  const y = Math.floor((e.clientY - rect.top) / cellSize);
  
  // Vérification que la position est valide et que la case est vide
  if(x >= 0 && x < gridSize && y >= 0 && y < gridSize && !grid[y][x]) {
    grid[y][x] = building;  // Placement du bâtiment
    drawGrid();  // Redessin de la grille
    updateScores();  // Mise à jour des scores
  }
});



function updateScores() {
  // Remise à zéro des scores
  scores.env = 0; 
  scores.eco = 0; 
  scores.social = 0;
  
  // Variables pour les statistiques de population
  let population = 0, nourris = 0, eduques = 0, soignes = 0, travailleurs = 0;
  let usines = 0; 
  
  // Parcours de toute la grille pour calculer les totaux
  for(let y = 0; y < gridSize; y++) {
    for(let x = 0; x < gridSize; x++) {
      const b = grid[y][x];  // Bâtiment dans cette case
      
      if(b) {  // Si il y a un bâtiment
        // Addition des effets de ce bâtiment aux scores totaux
        scores.env += b.env || 0;
        scores.eco += b.eco || 0;
        scores.social += b.social || 0;
        
        // Addition des statistiques de population
        population += b.inhabitants || 0;
        nourris += b.feeds || 0;
        eduques += b.educates || 0;
        soignes += b.heals || 0;
        travailleurs += b.workers || 0;
        
        // Comptage des usines pour vérifier les besoins en travailleurs
        if(b.workersNeeded) {
          usines++;
        }
      }
    }
  }

  // Calcul des travailleurs nécessaires (20 par usine)
  const travailleursNecessaires = usines * 20;

  // Mise à jour de l'affichage HTML des scores
  document.getElementById("env").textContent = scores.env;
  document.getElementById("eco").textContent = scores.eco;
  document.getElementById("social").textContent = scores.social;
  document.getElementById("population").textContent = population;
  
  // Affichage des travailleurs disponibles vs nécessaires
  document.getElementById("travailleurs").textContent = `${travailleurs}/${travailleursNecessaires}`;
  
  // Affichage du ratio (minimum entre service disponible et population)
  document.getElementById("nourris").textContent = `${Math.min(nourris, population)}/${population}`;
  document.getElementById("eduques").textContent = `${Math.min(eduques, population)}/${population}`;
  document.getElementById("soignes").textContent = `${Math.min(soignes, population)}/${population}`;
}

// ===== SUPPRESSION DE BÂTIMENTS =====

// Gestion du clic droit pour supprimer un bâtiment
canvas.addEventListener("contextmenu", function(e) {
  e.preventDefault();  // Empêche le menu contextuel par défaut
  
  // Calcul de la position cliquée
  const rect = canvas.getBoundingClientRect();
  const x = Math.floor((e.clientX - rect.left) / cellSize);
  const y = Math.floor((e.clientY - rect.top) / cellSize);
  
  // Si la position est valide et qu'il y a un bâtiment
  if(x >= 0 && x < gridSize && y >= 0 && y < gridSize && grid[y][x]) {
    grid[y][x] = null;  // Suppression du bâtiment
    drawGrid();  n
    updateScores(); 
  }
});


// Fonction pour afficher le modal de fin de jeu
function showGameEndModal(isVictory, message, detailedScores) {
  const modal = document.getElementById("gameEndModal");
  const title = document.getElementById("modalTitle");
  const messageEl = document.getElementById("modalMessage");
  const scoresEl = document.getElementById("modalScores");
  
  // Configuration du titre selon victoire ou défaite
  if (isVictory) {
    title.textContent = " VICTOIRE ! ";
    
  } else {
    title.textContent = "Défaite";
  }
  
  messageEl.textContent = message;
  
  scoresEl.innerHTML = detailedScores;
  
  modal.style.display = "block";
}

// Fonction pour fermer le modal
function closeModal() {
  document.getElementById("gameEndModal").style.display = "none";
}

// Fonction pour recommencer le jeu
function resetGame() {
  // Remise à zéro de la grille
  for(let y = 0; y < gridSize; y++) {
    for(let x = 0; x < gridSize; x++) {
      grid[y][x] = null;
    }
  }
  
  // Redessin et mise à jour
  drawGrid();
  updateScores();
  
  // Fermeture du modal
  closeModal();
  
  // Effacement du résultat affiché
  document.getElementById("result").textContent = "";
}


function finish() {
  // Mise à jour des scores avant évaluation
  updateScores();
  
  // Récupération des statistiques actuelles
  const population = parseInt(document.getElementById("population").textContent);
  const travailleurs = parseInt(document.getElementById("travailleurs").textContent.split("/")[0]);
  const travailleursNecessaires = parseInt(document.getElementById("travailleurs").textContent.split("/")[1]);
  const nourris = parseInt(document.getElementById("nourris").textContent.split("/")[0]);
  const eduques = parseInt(document.getElementById("eduques").textContent.split("/")[0]);
  const soignes = parseInt(document.getElementById("soignes").textContent.split("/")[0]);

  // Création du résumé des scores pour affichage
  const detailedScores = `
    <strong>Vos scores :</strong><br>
    Environnement : ${scores.env}/10<br>
    Économie : ${scores.eco}/10<br>
    Social : ${scores.social}/10<br><br>
    <strong>Population :</strong><br>
    Habitants : ${population}<br>
    Travailleurs : ${travailleurs}/${travailleursNecessaires}<br>
    Nourris : ${nourris}/${population}<br>
    Éduqués : ${eduques}/${population}<br>
    Soignés : ${soignes}/${population}
  `;

  // ===== LOGIQUE DE VICTOIRE/DÉFAITE =====
  
  // Conditions de victoire : tous les scores >= 10 ET tous les besoins satisfaits ET assez de travailleurs
  if(scores.env >= 10 && scores.eco >= 10 && scores.social >= 10 && 
     nourris >= population && eduques >= population && soignes >= population &&
     travailleurs >= travailleursNecessaires) {
    
    // VICTOIRE !
    const victoryMessage = "Félicitations ! Votre ville est parfaitement équilibrée, efficiente et durable ! Vous avez réussi à créer une société prospère qui prend soin de l'environnement, de l'économie et du bien-être social !";
    showGameEndModal(true, victoryMessage, detailedScores);
    
  } else {
    
    // DÉFAITE 
    let defeatMessage = "Votre ville n'est pas encore durable :( \n\n";
   
    
    
    showGameEndModal(false, defeatMessage, detailedScores);
  }
  

}


drawGrid();
