var messages = []

window.onload = () => {
  var socket = io.connect('localhost:3000')

  document.querySelector('#send-button').addEventListener('click', () => {
    socket.emit('flow', document.querySelector('#flow-word').value)
  }, false)

  socket.on('flow', msg => {
    messages.unshift(msg)
    updateMessage()
  })
}

function updateMessage () {
  if (messages.length > 5) {
    messages.pop()
  }

  target = document.getElementById("received")
  innerText = ""

  messages.forEach(msg => {
    innerText += '<div class="message">' + msg + '</div>'
  })

  target.innerHTML = innerText
}
