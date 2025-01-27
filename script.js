// Obtendo os elementos
const themeList = document.getElementById("theme-list");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const themeTitle = document.getElementById("theme-title");
const themeDescription = document.getElementById("theme-description");

const themes = [
    { 
        title: "Sobre Mim", 
        description: "Me chamo Arthur Moreira Freitas<br>Nasci em 2010<br>Jogo como Ala direita e Fixo<br>Iniciei no Futsal aos 8 anos<br>Em 2023, me tornei atleta Federado<br>", 
        backgroundImage: "url('https://esportista.github.io/arquivo/imagens/ArthurComMedalha.png')" 
    },
    { 
        title: "Carreira", 
        description: "Apaixonado por esse esporte desde a infância<br>Trajetória que começa nas quadras do Colégio Inovação<br>Projetos sociais me ensinavam o fundamento do Futsal<br>Com o passar do tempo, comecei a jogar federado<br>Encaro cada partida como uma oportunidade de crescer,<br>não apenas como jogador, mas como pessoa,<br>motivado pelo amor ao futsal e pela dedicação ao que faço.", 
        backgroundImage: "url('https://esportista.github.io/arquivo/imagens/Arthur.png')" 
    },
    { 
        title: "Conquistas", 
        description: "Vice da Copa Paulista Gold - 2023<br>Campeão da Copa Paulista Gold - 2024<br>Campeão do Metropolitano Série Bronze - 2024<br>Vice Campeão Copa Primeiro de Maio - 2024<br>Vice Campeão Estadual Série Prata - 2024<br>", 
        backgroundImage: "url('https://esportista.github.io/arquivo/imagens/Arthur3.png')" 
    },
    { 
        title: "Eu Acredito Nelas", 
        description: "Umbro<br>Joma<br>", 
        backgroundImage: "url('https://esportista.github.io/arquivo/imagens/Arthur4.png')" 
    },
    { 
        title: "Inspirações", 
        description: "Primeiramente DEUS<br>Minha Família<br><br>Técnico na Base: Valdir (Treinador Palmeiras)<br>Atleta: Arthur Fortunato (Ala Seleção)<br>Técnico no Profissional: Marquinhos Xavier<br>", 
        backgroundImage: "url('https://esportista.github.io/arquivo/imagens/5Arthur.png')" 
    },
    { 
        title: "Vídeos", 
        description: "Aqui vai o texto sobre meus vídeos.", 
        backgroundImage: "url('https://esportista.github.io/arquivo/imagens/Arthur6.png')" 
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

// Função para alternar a ordem do menu
function toggleMenuOrder() {
    const themeList = document.getElementById("theme-list");
    const items = Array.from(themeList.children);
    items.reverse().forEach(item => themeList.appendChild(item));
}

// Adicionando um botão para alternar a ordem do menu
document.addEventListener("DOMContentLoaded", () => {
    const toggleOrderButton = document.createElement("button");
    toggleOrderButton.textContent = "Alternar Ordem do Menu";
    toggleOrderButton.style.position = "fixed";
    toggleOrderButton.style.top = "60px";
    toggleOrderButton.style.right = "20px";
    toggleOrderButton.style.zIndex = "1001";
    toggleOrderButton.style.padding = "10px";
    toggleOrderButton.style.backgroundColor = "#ff6f00";
    toggleOrderButton.style.color = "white";
    toggleOrderButton.style.border = "none";
    toggleOrderButton.style.borderRadius = "5px";
    toggleOrderButton.style.cursor = "pointer";
    toggleOrderButton.addEventListener("click", toggleMenuOrder);

    document.body.appendChild(toggleOrderButton);
});

// Inicializando a página com o primeiro tema
updateContent();
