//Comando para establecer la conexió

var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function () {
  console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
  console.log('Desconectado del servidor');
});

socket.on('estadoActual', function (resp) {
  label.text(resp.actual);
  console.log(resp.actual);
})
$('button').on('click', function () {

  socket.emit('siguienteTicket', null, function (siguienteTicket) {

    label.text(siguienteTicket);



  });


  console.log('Click');

})