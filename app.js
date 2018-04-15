var app = require('http').createServer(handler)
var io = require('socket.io')(app)
var fs = require('fs')

app.listen(process.env.PORT || 3000)

function handler (req, res) {
  let url = req.url

  if (url == "/") {
    loadFile('/index.html', res)
  }
  else if ('/client.js' == url) {
    loadFile('/client.js', res)
  }
}

function loadFile(name, res) {
  fs.readFile(__dirname + name,
  function (err, data) {
    if (err) {
      res.writeHead(500)
      return res.end('Error loading ' + name)
    }

    res.writeHead(200)
    res.end(data)
  })
}

io.on('connection', socket => {
  socket.on('flow', msg => {
    io.emit('flow', msg)
  })
})
