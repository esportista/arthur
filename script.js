document.addEventListener('DOMContentLoaded', function() {
    // Elementos do DOM
    const themeButton = document.getElementById('theme-button');
    const themeList = document.getElementById('theme-list');
    const themeTitle = document.getElementById('theme-title');
    const themeDescription = document.getElementById('theme-description');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const mainContent = document.querySelector('main');

    // Lista de temas
    const themes = [
        { title: 'Sobre Mim', description: 'Aqui vai o texto sobre mim.', class: 'sobre-mim' },
        { title: 'Carreira', description: 'Aqui vai o texto sobre minha carreira.', class: 'carreira' },
        { title: 'Conquistas', description: 'Aqui vai o texto sobre minhas conquistas.', class: 'conquistas' },
        { title: 'Marcas em que Acredito', description: 'Aqui vai o texto sobre as marcas em que acredito.', class: 'marcas' },
        { title: 'Inspirações', description: 'Aqui vai o texto sobre minhas inspirações.', class: 'inspiracoes' },
        { title: 'Vídeos', description: 'Aqui vai o texto sobre meus vídeos.', class: 'videos' }
    ];

    // Índice do tema atual
    let currentThemeIndex = 0;

    // Mostrar/ocultar a lista de temas ao clicar no botão
    themeButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que o clique se propague para o documento
        themeList.classList.toggle('hidden');
    });

    // Fechar a lista ao clicar fora dela
    document.addEventListener('click', function(event) {
        if (!themeList.contains(event.target) && event.target !== themeButton) {
            themeList.classList.add('hidden');
        }
    });

    // Fechar a lista e mudar o tema ao clicar em um item da lista
    themeList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            const theme = event.target.getAttribute('data-theme');
            currentThemeIndex = themes.findIndex(t => t.title.toLowerCase().replace(/ /g, '-') === theme);
            updateTheme();
            themeList.classList.add('hidden'); // Fecha a lista após selecionar um tema
        }
    });

    // Navegar para o tema anterior
    prevButton.addEventListener('click', function() {
        currentThemeIndex = (currentThemeIndex - 1 + themes.length) % themes.length;
        updateTheme();
    });

    // Navegar para o próximo tema
    nextButton.addEventListener('click', function() {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        updateTheme();
    });

    // Atualizar o tema exibido
    function updateTheme() {
        // Remove todas as classes de tema anteriores
        mainContent.classList.remove(...themes.map(t => t.class));
        // Adiciona a classe do tema atual
        mainContent.classList.add(themes[currentThemeIndex].class);
        // Atualiza o título e a descrição do tema
        themeTitle.textContent = themes[currentThemeIndex].title;
        themeDescription.textContent = themes[currentThemeIndex].description;
    }

    // Inicializa o tema padrão
    updateTheme();
});
