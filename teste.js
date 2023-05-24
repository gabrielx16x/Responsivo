// Botão de idioma
const languageButton = document.getElementById('language-button');
languageButton.addEventListener('click', toggleLanguage);

function toggleLanguage() {
  const language = languageButton.textContent;
  if (language === 'Português') {
    languageButton.textContent = 'English';
  } else {
    languageButton.textContent = 'Português';
  }
}

// Botões de tamanho do texto
const increaseFontSizeButton = document.getElementById('increase-font-size');
const decreaseFontSizeButton = document.getElementById('decrease-font-size');
const bodyElement = document.body;

increaseFontSizeButton.addEventListener('click', increaseFontSize);
decreaseFontSizeButton.addEventListener('click', decreaseFontSize);

function increaseFontSize() {
  bodyElement.classList.add('large-text');
  bodyElement.classList.remove('small-text');
}

function decreaseFontSize() {
  bodyElement.classList.add('small-text');
  bodyElement.classList.remove('large-text');
}
