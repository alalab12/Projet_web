document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    toggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });

    // Fermer le menu quand on clique sur un lien
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
});
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
                        '#1f77b4', // Bleu foncé
                        '#17becf', // Bleu clair
                        '#2ca02c', // Vert
                        '#ff7f0e', // Orange
                        '#d62728', // Rouge
                        '#9467bd'  // Violet
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
