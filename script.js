// Inicialização das Animações (AOS)
AOS.init({ 
    duration: 1000, 
    once: true 
});

// Seleção de Elementos
const dotsBtn = document.getElementById('dotsBtn');
const dropdown = document.getElementById('menu-dropdown');

// Lógica do Menu Dropdown (Abrir/Fechar)
dotsBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede que o clique propague para o window
    dropdown.classList.toggle('hidden');
});

// Fechar menu ao clicar em qualquer link do menu
document.querySelectorAll('#menu-dropdown a').forEach(link => {
    link.addEventListener('click', () => {
        dropdown.classList.add('hidden');
    });
});

// Fechar menu ao clicar em qualquer lugar fora dele
window.addEventListener('click', (e) => {
    if (!dotsBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add('hidden');
    }
});

// Smooth Scroll (Reforço para navegadores antigos)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});