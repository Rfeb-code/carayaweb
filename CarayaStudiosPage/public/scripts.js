//Función  para seleccionar elementos
const selectElement = (s) => document.querySelector(s);

//Abrir el menú con click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

//Cerrar el menú con click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});