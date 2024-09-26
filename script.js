// script.js

// Chave de API da Pexels (substituída pela sua)
const API_KEY = 'uC2espeKwTtgQTUNuMwOcQgzL9u6kmQoNiVVab6CXxHV1CzMK0J6X4Qq';

document.getElementById('generateBtn').addEventListener('click', function() {
    const inputText = document.getElementById('textInput').value;

    if (inputText.trim() === '') {
        alert('Por favor, digite algo no campo de texto.');
        return;
    }

    // URL para a API de pesquisa de imagens da Pexels
    const apiUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(inputText)}&per_page=1`;

    fetch(apiUrl, {
        headers: {
            Authorization: API_KEY
        }
    })
    .then(response => response.json())
    .then(data => {
        const imageContainer = document.getElementById('imageContainer');
        imageContainer.innerHTML = ''; // Limpa qualquer imagem anterior

        // Verifica se há resultados de imagens
        if (data.photos && data.photos.length > 0) {
            const imageUrl = data.photos[0].src.medium;
            
            // Cria e exibe a imagem na página
            const imgElement = document.createElement('img');
            imgElement.src = imageUrl;
            imgElement.alt = 'Imagem gerada';
            imgElement.style.width = '100%';  // Ajuste de tamanho para largura total

            imageContainer.appendChild(imgElement);
        } else {
            imageContainer.innerHTML = '<p>Nenhuma imagem encontrada. Tente outra palavra-chave.</p>';
        }
    })
    .catch(error => {
        console.error('Erro ao gerar imagem:', error);
        alert('Ocorreu um erro ao gerar a imagem. Tente novamente mais tarde.');
    });
});
