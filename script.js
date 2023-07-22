document.addEventListener("DOMContentLoaded", function() {
    // Identifica o elemento de áudio
    var meuAudio = document.getElementById("audio");
  
    // Define o volume desejado (neste caso, 0.5 para meio volume)
    var volumeDesejado = 0.1;

    // Define o volume do áudio
    meuAudio.volume = volumeDesejado;
  });
  