const tarjeta = document.querySelector('#tarjeta'),
      btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
      formulario = document.querySelector('#fomulario-tarjeta');

tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
}); 

btnAbrirFormulario.addEventListener('clik', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});