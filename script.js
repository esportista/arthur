// Obtendo os elementos
const themeButton = document.getElementById("theme-button");
const themeList = document.getElementById("theme-list");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

const themes = [
    { title: "Sobre Mim", description: "Aqui vai o texto sobre mim." },
    { title: "Carreira", description: "Aqui vai o texto sobre minha carreira." },
    { title: "Conquistas", description: "Aqui vai o texto sobre minhas conquistas." },
    { title: "Marcas em que Acredito", description: "Aqui vai o texto sobre as marcas em que acredito." },
    { title: "Inspirações", description: "Aqui vai o texto sobre minhas inspirações." },
    { title: "Vídeos", description: "Aqui vai o texto sobre meus vídeos." }
];

let currentThemeIndex = 0; // Índice do tema atual

// Função para atualizar o título e a descrição
function updateContent() {
    const theme = themes[currentThemeIndex];
    document.getElementById("theme-title").textContent = theme.title;
    document.getElementById("theme-description").textContent = theme.description;
}

// Exibir ou ocultar a lista de temas ao clicar no botão
themeButton.addEventListener("click", () => {
    themeList.classList.toggle("hidden");
});

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
        themeList.classList.add("hidden");  // Ocultando a lista
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
