document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões com a classe 'toggle-button'
    const buttons = document.querySelectorAll('.toggle-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Seleciona a div '.content' associada ao botão na mesma seção
            const section = button.closest('section'); // Localiza a seção pai do botão
            const content = section.querySelector('.content'); // Seleciona o conteúdo específico dentro dessa seção

            // Alterna a exibição do conteúdo e o texto do botão
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                button.textContent = '▲';
            } else {
                content.style.display = 'none';
                button.textContent = '▼';
            }
        });
    });
});