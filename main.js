// main.js

// Aguardando o carregamento completo da página
window.onload = function() {
  // Obtendo uma referência à div container pelo ID
  var container = document.getElementById('container');
  // Obtendo uma referência ao botão de início do projeto pelo ID
  var startButton = document.getElementById('startButton');

  // Tornando a div visível com opacidade zero
  container.style.display = 'block';
  container.style.opacity = 0;

  // Tornando o botão visível com opacidade zero
  startButton.style.display = 'inline-block';
  startButton.style.opacity = 0;

  // Criando um efeito de fade-in com um intervalo de tempo
  var fadeEffect = setInterval(function() {
    // Verificando se a opacidade da div é menor que 1
    if (container.style.opacity < 1) {
      // Aumentando gradualmente a opacidade da div e do botão
      container.style.opacity = parseFloat(container.style.opacity) + 0.05;
      startButton.style.opacity = parseFloat(startButton.style.opacity) + 0.05;
    } else {
      // Limpando o intervalo quando a opacidade atinge 1
      clearInterval(fadeEffect);
    }
  }, 50); // O intervalo de tempo é de 50 milissegundos
};
