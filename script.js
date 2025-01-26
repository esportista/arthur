// Obtendo os elementos
const themeList = document.getElementById("theme-list");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const themeTitle = document.getElementById("theme-title");
const themeDescription = document.getElementById("theme-description");

const themes = [
    { 
        title: "Sobre Mim", 
        description: "Me chamo Arthur Moreira Freitas, mais conhecido como Tuco.<br>Nasci em 2010.<br>Jogo como Ala direita e também como Fixo.<br>Iniciei no Futsal aos 8 anos.<br>Em 2023, me tornei atleta Federado.", 
        backgroundImage: "url('https://esportista.github.io/arquivo/imagens/ArthurComMedalha.png')" 
    },
    { 
        title: "Carreira", 
        description: "Apaixonado por esse esporte desde a infância. Comecei minha trajetória nas quadras do Colégio Inovação, onde dei meus primeiros passos com a bola.<br>Depois participei de projetos sociais (Croif e Associações) que ensinavam o fundamento do Futsal.<br>Com o passar do tempo, comecei a jogar federado, e o último time que atuei foi o ACAP.<br>Hoje, encaro cada partida como uma oportunidade de crescer, não apenas como jogador, mas como pessoa, sempre motivado pelo amor ao futsal e pela dedicação ao que faço.", 
        backgroundImage: "url('https://esportista.github.io/arquivo/imagens/Arthur.png')" 
    },
    { 
        title: "Conquistas", 
        description: "Aqui vai o texto sobre minhas conquistas.", 
        backgroundImage: "url('https://esportista.github.io/arquivo/imagens/Arthur3.png')" 
    },
    { 
        title: "Marcas em que Acredito", 
        description: "Aqui vai o texto sobre as marcas em que acredito.", 
        backgroundImage: "url('https://esportista.github.io/arquivo/imagens/Arthur4.png')" 
    },
    { 
        title: "Inspirações", 
        description: "Aqui vai o texto sobre minhas inspirações.", 
        backgroundImage: "url('https://esportista.github.io/arquivo/imagens/5Arthur.png')" 
    },
    { 
        title: "Vídeos", 
        description: "Aqui vai o texto sobre meus vídeos.", 
        backgroundImage: "url('https://exemplo.com/videos.jpg')" 
    }
];

let currentThemeIndex = 0; // Índice do tema atual

// Função para atualizar o título, a descrição e a imagem de fundo com transição suave
function updateContent() {
    const theme = themes[currentThemeIndex];

    // Adiciona uma transição suave
    themeTitle.style.opacity = 0;
    themeDescription.style.opacity = 0;

    setTimeout(() => {
        themeTitle.textContent = theme.title; // Usa textContent para o título
        themeDescription.innerHTML = theme.description; // Usa innerHTML para a descrição (permite <br>)
        themeTitle.style.opacity = 1;
        themeDescription.style.opacity = 1;

        // Atualiza a imagem de fundo na coluna da imagem
        const themeImage = document.getElementById('theme-image');
        themeImage.style.backgroundImage = theme.backgroundImage;
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
