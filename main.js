let indice = 0;

function mostrarSiguienteImagen() {
  const slides = document.querySelector('.slides');
  indice = (indice + 1) % 3; // 3 imágenes
  slides.style.transform = `translateX(-${indice * 400}px)`;
}

// Cambiar imagen cada 3 segundos
setInterval(mostrarSiguienteImagen, 3000);
