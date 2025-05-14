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
