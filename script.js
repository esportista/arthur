document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById('theme-button');
    const themeList = document.getElementById('theme-list');

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

    // Fechar a lista ao clicar em um item da lista
    themeList.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            themeList.classList.add('hidden'); // Fecha a lista após selecionar um tema
        }
    });
});
