// script.js
document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById('theme-button');
    const themeList = document.getElementById('theme-list');
    const themeTitle = document.getElementById('theme-title');
    const themeDescription = document.getElementById('theme-description');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const mainContent = document.querySelector('main');

    const themes = [
        { title: 'Sobre Mim', description: 'Aqui vai o texto sobre mim.', class: 'sobre-mim' },
        { title: 'Carreira', description: 'Aqui vai o texto sobre minha carreira.', class: 'carreira' },
        { title: 'Conquistas', description: 'Aqui vai o texto sobre minhas conquistas.', class: 'conquistas' },
        { title: 'Marcas em que Acredito', description: 'Aqui vai o texto sobre as marcas em que acredito.', class: 'marcas' },
        { title: 'Inspirações', description: 'Aqui vai o texto sobre minhas inspirações.', class: 'inspiracoes' },
        { title: 'Vídeos', description: 'Aqui vai o texto sobre meus vídeos.', class: 'videos' }
    ];

    let currentThemeIndex = 0;

    themeButton.addEventListener('click', function() {
        themeList.classList.toggle('hidden');
    });

    themeList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const theme = event.target.getAttribute('data-theme');
            currentThemeIndex = themes.findIndex(t => t.title.toLowerCase().replace(/ /g, '-') === theme);
            updateTheme();
            themeList.classList.add('hidden');
        }
    });

    prevButton.addEventListener('click', function() {
        currentThemeIndex = (currentThemeIndex - 1 + themes.length) % themes.length;
        updateTheme();
    });

    nextButton.addEventListener('click', function() {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        updateTheme();
    });

    function updateTheme() {
        // Remove todas as classes de tema anteriores
        mainContent.classList.remove(...themes.map(t => t.class));
        // Adiciona a classe do tema atual
        mainContent.classList.add(themes[currentThemeIndex].class);
        themeTitle.textContent = themes[currentThemeIndex].title;
        themeDescription.textContent = themes[currentThemeIndex].description;
    }

    // Inicializa o tema padrão
    updateTheme();
});
