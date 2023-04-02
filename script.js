const abrir = document.getElementById("open");
const cerrar = document.getElementById("close");
const contenedor = document.querySelector('.contenedor');

abrir.addEventListener('click', ()=> contenedor.classList.add('show-nav'))

cerrar.addEventListener('click', ()=> contenedor.classList.remove('show-nav'))