// Métrica de madurez del software
const madurezForm = document.getElementById('madurez-form');
const madurezResult = document.getElementById('madurez-result');

madurezForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const agregados = parseInt(document.getElementById('agregados').value);
  const modificados = parseInt(document.getElementById('modificados').value);
  const eliminados = parseInt(document.getElementById('eliminados').value);

  const madurez = (agregados + modificados) / (2 * (agregados + modificados + eliminados));
  madurezResult.innerHTML = `La métrica de madurez del software es: ${madurez.toFixed(2)}`;
});

// Esfuerzo de Halstead
const halsteadForm = document.getElementById('halstead-form');
const halsteadResult = document.getElementById('halstead-result');

halsteadForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const operadores = parseInt(document.getElementById('operadores').value);
  const operandos = parseInt(document.getElementById('operandos').value);

  const longitudPrograma = operadores + operandos;
  const vocabularioPrograma = operadores + operandos;
  const volumenPrograma = longitudPrograma * Math.log2(vocabularioPrograma);
  const esfuerzoHalstead = volumenPrograma / 3000;

  halsteadResult.innerHTML = `El esfuerzo de Halstead es: ${esfuerzoHalstead.toFixed(2)}`;
});

// Conversión HTML
const htmlForm = document.getElementById('html-form');
const htmlResult = document.getElementById('html-result');

htmlForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const texto = document.getElementById('texto').value;
  const html = texto.replace(/\n/g, '<br>');
  htmlResult.innerHTML = html;
});

// Buscar y eliminar
// Obtener el formulario y el resultado
const buscarForm = document.querySelector('#buscar-form');
const buscarResult = document.querySelector('#buscar-result');

// Agregar un evento de submit al formulario
buscarForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Obtener los nombres y edades del textarea
  const nombresTextarea = document.querySelector('#nombres');
  const nombres = nombresTextarea.value.trim().split('\n').map((nombre) => {
    return nombre.trim();
  });

  // Obtener la lista de números
  const numerosInput = document.querySelector('#numeros');
  const numeros = numerosInput.value.trim().split(',').map((numero) => {
    return parseInt(numero.trim(), 10);
  });

  // Buscar los nombres múltiplos de los números
  const nombresMultiplos = nombres.filter((nombre) => {
    const edad = parseInt(nombre.split(' ')[1], 10);
    return numeros.some((numero) => {
      return edad % numero === 0;
    });
  });

  // Mostrar el resultado
  buscarResult.textContent = nombresMultiplos.join(', ');
});