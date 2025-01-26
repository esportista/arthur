// Obtendo os elementos
const themeButton = document.getElementById("theme-button");
const themeList = document.getElementById("theme-list");

// Quando o botão for clicado, alterna a visibilidade da lista de temas
themeButton.addEventListener("click", () => {
    themeList.classList.toggle("hidden");
});

// Opcional: Se você quiser mudar o título e descrição conforme o tema selecionado
const themeItems = document.querySelectorAll("#theme-list li");

themeItems.forEach(item => {
    item.addEventListener("click", (event) => {
        const theme = event.target.getAttribute("data-theme");
        const title = document.getElementById("theme-title");
        const description = document.getElementById("theme-description");

        // Exemplo de alteração de conteúdo baseado no tema selecionado
        switch (theme) {
            case "sobre-mim":
                title.textContent = "Sobre Mim";
                description.textContent = "Aqui vai o texto sobre mim.";
                break;
            case "carreira":
                title.textContent = "Carreira";
                description.textContent = "Aqui vai o texto sobre minha carreira.";
                break;
            case "conquistas":
                title.textContent = "Conquistas";
                description.textContent = "Aqui vai o texto sobre minhas conquistas.";
                break;
            case "marcas":
                title.textContent = "Marcas em que Acredito";
                description.textContent = "Aqui vai o texto sobre as marcas em que acredito.";
                break;
            case "inspiracoes":
                title.textContent = "Inspirações";
                description.textContent = "Aqui vai o texto sobre minhas inspirações.";
                break;
            case "videos":
                title.textContent = "Vídeos";
                description.textContent = "Aqui vai o texto sobre meus vídeos.";
                break;
            default:
                title.textContent = "Tema";
                description.textContent = "Texto do tema.";
        }

        // Oculta a lista após a seleção de um tema
        themeList.classList.add("hidden");
    });
});
