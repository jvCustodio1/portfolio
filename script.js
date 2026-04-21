document.addEventListener('DOMContentLoaded', () => {
    // Inicializa as animações de subida
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }

    const btn = document.getElementById('dotsBtn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.onclick = (e) => {
            e.stopPropagation();
            menu.classList.toggle('hidden');
        };

        // Fecha se clicar fora do menu
        document.addEventListener('click', (e) => {
            if (!menu.contains(e.target) && e.target !== btn) {
                menu.classList.add('hidden');
            }
        });
    }
});