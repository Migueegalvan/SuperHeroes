document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
  
    // Recuperar el tiempo desde localStorage
    const savedTime = localStorage.getItem('videoTime');
    if (savedTime) {
      video.currentTime = savedTime;
    }
  
    // Guardar el tiempo actual antes de salir de la página
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('videoTime', video.currentTime);
    });
  });