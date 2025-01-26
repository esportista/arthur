// Obtendo os elementos
const themeList = document.getElementById("theme-list");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const themeTitle = document.getElementById("theme-title");
const themeDescription = document.getElementById("theme-description");

const themes = [
    { title: "Sobre Mim", description: "Me chamo Arthur Moreira Freitas mais conhecido como Tuco, nasci em 2010
Jogo como Ala direita, e também como Fixo
Iniciei no Futsal aos 8 anos. Em 2013 me tornei atleta Federado", backgroundImage: "url('https://esportista.github.io/arquivo/imagens/ArthurComMedalha.png')" },
    { title: "Carreira", description: "Aqui vai o texto sobre minha carreira.", backgroundImage: "url('https://exemplo.com/carreira.jpg')" },
    { title: "Conquistas", description: "Aqui vai o texto sobre minhas conquistas.", backgroundImage: "url('https://exemplo.com/conquistas.jpg')" },
    { title: "Marcas em que Acredito", description: "Aqui vai o texto sobre as marcas em que acredito.", backgroundImage: "url('https://exemplo.com/marcas.jpg')" },
    { title: "Inspirações", description: "Aqui vai o texto sobre minhas inspirações.", backgroundImage: "url('https://exemplo.com/inspiracoes.jpg')" },
    { title: "Vídeos", description: "Aqui vai o texto sobre meus vídeos.", backgroundImage: "url('https://exemplo.com/videos.jpg')" }
];

let currentThemeIndex = 0; // Índice do tema atual

// Função para atualizar o título, a descrição e a imagem de fundo com transição suave
function updateContent() {
    const theme = themes[currentThemeIndex];

    // Adiciona uma transição suave
    themeTitle.style.opacity = 0;
    themeDescription.style.opacity = 0;

    setTimeout(() => {
        themeTitle.textContent = theme.title;
        themeDescription.textContent = theme.description;
        themeTitle.style.opacity = 1;
        themeDescription.style.opacity = 1;

        // Atualiza a imagem de fundo
        const backgroundImageElement = document.querySelector('.background-image');
        backgroundImageElement.style.backgroundImage = theme.backgroundImage;
        console.log("Imagem de fundo atualizada:", theme.backgroundImage); // Debug
    }, 300); // 300ms de duração da transição
}

// Selecionando um tema ao clicar na lista
themeList.addEventListener("click", (event) => {
    if (event.target && event.target.tagName === "LI") {
        const theme = event.target.getAttribute("data-theme");

        // Atualizando o conteúdo com base no tema selecionado
        switch (theme) {
            case "sobre-mim":
                currentThemeIndex = 0;
                break;
            case "carreira":
                currentThemeIndex = 1;
                break;
            case "conquistas":
                currentThemeIndex = 2;
                break;
            case "marcas":
                currentThemeIndex = 3;
                break;
            case "inspiracoes":
                currentThemeIndex = 4;
                break;
            case "videos":
                currentThemeIndex = 5;
                break;
        }
        updateContent();  // Atualizando o conteúdo da página
    }
});

// Navegação com as setas
prevButton.addEventListener("click", () => {
    if (currentThemeIndex > 0) {
        currentThemeIndex--;
        updateContent();
    }
});

nextButton.addEventListener("click", () => {
    if (currentThemeIndex < themes.length - 1) {
        currentThemeIndex++;
        updateContent();
    }
});

// Inicializando a página com o primeiro tema
updateContent();
