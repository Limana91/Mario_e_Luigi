const formulario = document.getElementById('formulario');
const mascara = document.querySelector('.mascara-formulario');

function mostrarForm() {
formulario.style.left = '50%';
formulario.style.transition = 'translateX(-50%) 0.5s ease-in-out';
mascara.style.visibility = 'visible';
}

function esconderForm() {
formulario.style.left = '-172px';
mascara.style.visibility = 'hidden';
}