const userText = document.getElementById('inputText')
const characters = document.getElementById('char')


userText.addEventListener('input', function () {
    const textWithoutSpaces = userText.value.replace(/\s/g, '');
    characters.innerHTML = textWithoutSpaces.length + ' Letras';
    
   
});

function muestraReloj() {
    const fechaHora = new Date();
    const horas = fechaHora.getHours();
    const minutos = fechaHora.getMinutes();
    const segundos = fechaHora.getSeconds();
  
    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }
  
    document.getElementById("reloj").innerHTML = horas +':'+ minutos+':'+ segundos;
  }
  
  window.onload = function() {
    setInterval(muestraReloj, 1000);
  };





