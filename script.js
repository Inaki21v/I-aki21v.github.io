const botones = document.querySelectorAll('button');
const cuadrado = document.querySelector('#cuadrado iframe');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        cuadrado.src = boton.dataset.pagina;
    });
});
