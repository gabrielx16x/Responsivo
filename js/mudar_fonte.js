document.getElementById("BtnAumentar").addEventListener("click", AumentarFonte);
document.getElementById("BtnDiminuir").addEventListener("click", DiminuirFonte);

function AumentarFonte() {
  var textElements = document.getElementsByClassName("texto");
  for (var i = 0; i < textElements.length; i++) {
    var currentFontSize = window.getComputedStyle(textElements[i]).fontSize;
    var fontSize = parseFloat(currentFontSize);
    fontSize += 2;
    textElements[i].style.fontSize = fontSize + "px";
  }
}

function DiminuirFonte() {
  var textElements = document.getElementsByClassName("texto");
  for (var i = 0; i < textElements.length; i++) {
    var currentFontSize = window.getComputedStyle(textElements[i]).fontSize;
    var fontSize = parseFloat(currentFontSize);
    fontSize -= 2;
    textElements[i].style.fontSize = fontSize + "px";
  }
}
