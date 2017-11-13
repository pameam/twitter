// Versión 0.0.1
// Diseñar un formulario que permita ingresar un texto y un botón para "twittear".
var submitButton = document.getElementById('sumit-message');
var messageArray = [];
// En el evento, obtener el texto.
function addToAarray() {
  var message = document.getElementById('message-input').value;
  messageArray.push(message);
}
// Agregar el texto al HTML.
function printArray() {
  var parrafo = document.createElement('p');
  var text = document.createTextNode(message);
  parrafo.appendChild(text);
  document.body.children[1].children[1].appendChild(parrafo);
  // var space = document.createElement('article');
  // document.body.children[1].children[1].appendChild(space);
  text = '';
  for (var i = 0;i < messageArray.length;i++) {
    text += messageArray[i] + '<br>' ;
  }
  showTime();
  document.body.children[1].children[1].appendChild(parrafo).innerHTML = parrafo;
}
// Agregando un evento de click al botón o de submit al formulario.
var click = submitButton.addEventListener('click', function() {
  var message = document.getElementById('message-input').value;
  var parrafo = document.createElement('p');
  var text = document.createTextNode(message);
  parrafo.appendChild(text);
  document.body.children[1].children[1].appendChild(parrafo);
  parrafo.innerHTML = message;
  clearText();
});
// Limpiando contenedor del tweet
function clearText() {
  document.getElementById('message-input').value = '';
}

// Versión 0.0.2
//
// No ingresar texto vacío (deshabilitar el botón de "twittear").
var message = document.getElementById('message-input').value;
if (message = '') {
  document.getElementById('sumit-message').disabled = false;
} else {
  click;
}
// Contar la cantidad de caracteres de forma regresiva.
var message = document.getElementById('message-input');
var counter = document.getElementById('counter');
message.onkeyup = function() {
  'use strict';// uso estricto
  counter.textContent = 140 - this.value.length;

  // Versión 0.0.3
  //
  if (counter.textContent < 0) {// Si pasa los 140 caracteres, mostrar el contador en negativo.
    counter.style.color = '#f00';
    document.getElementById('sumit-message').disabled = true; // Si pasa los 140 caracteres, deshabilitar el botón.
    // Si pasa los 120 caracteres, mostrar el contador con OTRO color.
  } else if (counter.textContent < 10) {
    counter.style.color = '#32CD32';
    document.getElementById('sumit-message').disabled = false;
    // Si pasa los 130 caracteres, mostrar el contador con OTRO color.
  } else if (counter.textContent < 20) {
    counter.style.color = '#FFD700';
    document.getElementById('sumit-message').disabled = false;
  } else {
    counter.style.color = '#000';
    document.getElementById('sumit-message').disabled = false;
  }
};

// Versión 0.0.4
//
// Al presionar enter(/n) que crezca el textarea de acuerdo al tamaño del texto.


// Versión 0.0.5 (Extra)
//
// Si la cantidad de caracteres ingresados (sin dar un enter), supera al tamaño del textarea por defecto, debe de agregarse una línea más para que no
// aparezca el scroll. (Si en caso aplica)

// Versión 0.0.6 (Extra)
//
// Agregar la hora en que se publicó el tweet. En el formato de 24 horas: hh:mm.
function showTime() {
  var now = new Date() ;
  var hours = now.getHours();
  var minutes = now.getMinutes();
  if (hours < 10) {
    hours = '0' + hours ;
  }
  if (minutes < 10) {
    minutes = '0' + minutes ;
  }
  var hourShow = document.createElement('div');
  document.body.children[1].children[1].appendChild(hourShow);
  document.getElementsByTagName('div').textContent = hours + ':' + minutes ;
}
