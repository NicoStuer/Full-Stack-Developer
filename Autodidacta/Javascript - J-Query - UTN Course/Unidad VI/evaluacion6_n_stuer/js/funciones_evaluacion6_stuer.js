let precioFinal = document.getElementById('precioFinal');
let precioInicial = document.querySelector('#precioInicial')

document.querySelectorAll('input[type=radio][name=registro]').forEach(oneRadio => {
    oneRadio.addEventListener('click', (e) => {
      let precio = document.querySelector('input[type=number]').value;
    let mValue = e.target.value;
    precioInicial.textContent =`El precio de su producto es: $${precio}`;
    precioFinal.innerHTML = `El precio con iva incluido seria: $${mValue*precio}`;
  });
});