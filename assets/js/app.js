var cerrar = document.getElementsByClassName('cerrar');
var ocultarIzq = document.getElementById('ocultaTextIzquierda');
var ocultarDer = document.getElementById('ocultaTextDerecha');
var restaurar = document.getElementById('restaurar');

for (var i = 0; i < cerrar.length; i++) {
  cerrar[i].addEventListener('click', ocultarImagen);
};

function ocultarImagen() {
  var padre = this.parentElement;
  padre.style.visibility = 'hidden';
};

ocultarIzq.addEventListener('click', ocultarIzqierda);
function ocultarIzqierda() {
  var textoIzquierda = document.getElementById('textoIzquierda');
  textoIzquierda.style.visibility = 'hidden';
};

ocultarDer.addEventListener('click', ocultarDerecha);
function ocultarDerecha() {
  var textoDerecha = document.getElementById('textoDerecha');
  textoDerecha.style.visibility = 'hidden';
};

restaurar.addEventListener('click', mostrarTodo);
function mostrarTodo() {
  var textoDerecha = document.getElementById('textoDerecha');
  var textoIzquierda = document.getElementById('textoIzquierda');
  var pandaUno = document.getElementById('pandaUno');
  var pandaDos = document.getElementById('pandaDos');
  var pandaTres = document.getElementById('pandaTres');
  var pandaCuatro = document.getElementById('pandaCuatro');
  textoDerecha.style.visibility = 'visible';
  textoIzquierda.style.visibility = 'visible';
  pandaUno.style.visibility = 'visible';
  pandaDos.style.visibility = 'visible';
  pandaTres.style.visibility = 'visible';
  pandaCuatro.style.visibility = 'visible';
};
