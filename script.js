// Seleciona os elementos
const themeButton = document.getElementById('theme-button');
const themeList = document.getElementById('theme-list');
const themeTitle = document.getElementById('theme-title');
const themeDescription = document.getElementById('theme-description');
const themes = [
    { title: "Sobre Mim", description: "Aqui vai o texto sobre mim." },
    { title: "Carreira", description: "Aqui vai o texto sobre minha carreira." },
    { title: "Conquistas", description: "Aqui vai o texto sobre minhas conquistas." },
    { title: "Marcas em que Acredito", description: "Aqui vai o texto sobre marcas que admiro." },
    { title: "Inspirações", description: "Aqui vai o texto sobre minhas inspirações." },
    { title: "Vídeos", description: "Aqui vão alguns vídeos." }
];
let currentIndex = 0;

// Alterna a visibilidade da lista de temas ao clicar no botão
themeButton.addEventListener('click', () => {
    const isHidden = themeList.classList.contains('hidden');
    if (isHidden) {
        themeList.classList.remove('hidden');
        themeButton.setAttribute('aria-expanded', 'true');
    } else {
        themeList.classList.add('hidden');
        themeButton.setAttribute('aria-expanded', 'false');
    }
});

// Atualiza o tema ao clicar em um item da lista
themeList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const index = Array.from(themeList.children).indexOf(e.target);
        updateContent(index);
        themeList.classList.add('hidden'); // Esconde a lista após selecionar um tema
        themeButton.setAttribute('aria-expanded', 'false');
    }
});

// Navegação pelos botões de próximo e anterior
document.getElementById('prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + themes.length) % themes.length;
    updateContent(currentIndex);
});

document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % themes.length;
    updateContent(currentIndex);
});

// Atualiza o título e a descrição com base no índice atual
function updateContent(index) {
    currentIndex = index;
    themeTitle.textContent = themes[index].title;
    themeDescription.textContent = themes[index].description;
}
