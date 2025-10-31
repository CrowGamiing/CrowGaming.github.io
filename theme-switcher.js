document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Función para cambiar el tema
    function toggleTheme() {
        // Añade o quita la clase 'light-mode' del <body>
        body.classList.toggle('light-mode');
        
        // Actualiza el texto del botón
        if (body.classList.contains('light-mode')) {
            themeToggle.innerHTML = '&#9790; Modo Oscuro'; // Luna para modo oscuro
        } else {
            themeToggle.innerHTML = '&#9728; Modo Claro';  // Sol para modo claro
        }
    }

    // Escucha el clic en el botón
    themeToggle.addEventListener('click', toggleTheme);
});