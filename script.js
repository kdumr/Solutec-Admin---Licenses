document.getElementById('search-input').addEventListener('input', function (e) {
    let value = e.target.value;
    
    // Remove caracteres que não são letras ou números
    value = value.replace(/[^a-zA-Z0-9]/g, '');

    let formattedValue = '';

    for (let i = 0; i < value.length && i < 12; i++) {
        if (i > 0 && i % 2 === 0) {
            formattedValue += ':'; // Adiciona ':' após cada dois caracteres
        }
        formattedValue += value[i];
    }

    e.target.value = formattedValue;
});


// script.js

const toggleSwitch = document.getElementById('toggle-theme');
const body = document.body;

// Função para aplicar o modo salvo
function applyTheme() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
        body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    } else {
        body.classList.remove('dark-mode');
        toggleSwitch.checked = false;
    }
}

// Listener para alternar o modo e salvar a preferência
toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    }
});

// Aplicar o modo ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    applyTheme();
});
