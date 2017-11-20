// Diseñar un formulario que permita ingresar un texto y un botón para "twittear".
window.addEventListener('load', function() {
  // Contar la cantidad de caracteres de forma regresiva.
  document.getElementById('sumit-message').disabled = true; // desabilitando el boton
  var message = document.getElementById('message-input');
  var counter = document.getElementById('counter');
  message.addEventListener('keyup', function() {
    'use strict';// uso estricto
    counter.textContent = 140 - this.value.length;
    if (counter.textContent < 0) {// Si pasa los 140 caracteres, mostrar el contador en negativo.
      counter.setAttribute('id', 'red');
      document.getElementById('sumit-message').disabled = true; // Si pasa los 140 caracteres, deshabilitar el botón.
      // Si pasa los 120 caracteres, mostrar el contador con OTRO color.
    } else if (counter.textContent < 10) {
      counter.setAttribute('id', 'green');
      document.getElementById('sumit-message').disabled = false;
      // Si pasa los 130 caracteres, mostrar el contador con OTRO color.
    } else if (counter.textContent < 20 && counter.textContent >= 10) {
      counter.setAttribute('id', 'blue');
      document.getElementById('sumit-message').disabled = false;
    } else {
      counter.setAttribute('id', 'black');
      document.getElementById('sumit-message').disabled = false;
    }
  });
});
// Asignando la variable submitButton al boton
var submitButton = document.getElementById('sumit-message');
document.getElementById('sumit-message').disabled = false;
// Agregando un evento de click al botón.
submitButton.addEventListener('click', function() {
  // No ingresar texto vacío (deshabilitar el botón de "twittear").
  var message = document.getElementById('message-input').value;
  if (message === '') {
    document.getElementById('sumit-message').disabled = true;
  } else {
    var message = document.getElementById('message-input').value;
    var parrafo = document.createElement('p');
    var text = document.createTextNode(message);
    parrafo.appendChild(text);
    document.body.children[2].children[1].children[0].children[1].children[0].appendChild(parrafo);
    parrafo.innerHTML = message;
    // Agregar la hora en que se publicó el tweet. En el formato de 24 horas: hh:mm.
    var now = new Date() ;
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var second = now.getSeconds();
    var hourShow = hours + ':' + minutes + ':' + second;
    var showTime = document.createElement('div');
    var textd = document.createTextNode(hourShow);
    showTime.appendChild(textd);
    document.body.children[2].children[1].children[0].children[1].children[0].appendChild(showTime);
    showTime.setAttribute('id', 'showtime');
    // Limpiando contenedor del tweet
    document.getElementById('message-input').value = '';
  }
});
// Al presionar enter(/n) que crezca el textarea de acuerdo al tamaño del texto.
var message = document.body.children[2].children[1].children[0].children[0].children[0];
message.addEventListener('keypress', function(event) {
  var enter = event.keyCode; // asignando al enter un valor
  // console.log(document.body.children[2].children[1].children[0].children[0].children[0].getAttribute('rows'));
  var rows = 2;
  if (enter === 13) {// si la tecla es 13 ;eso significa que es la tecla enter
    rows = rows + 1; // aumentar una fila
  }
  message.setAttribute('rows', rows);
});
