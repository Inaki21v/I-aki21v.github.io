const cuadrado = document.getElementById('cuadrado');
const botones = document.querySelectorAll('.boton');

botones.forEach((boton, indice) => {
  boton.addEventListener('click', () => {
    cuadrado.innerHTML = `<iframe src="pagina${indice + 1}.html"></iframe>`;
  });
});
