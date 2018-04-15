window.onload = () => {
  var socket = io.connect('localhost:3000')

  document.querySelector('#send-button').addEventListener('click', () => {
    socket.emit('flow', document.querySelector('#flow-word').value)
  }, false)

  socket.on('flow', msg => {
    console.log(msg)
  })
}
