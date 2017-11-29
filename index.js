const express = require('express')
const path = require('path')

const server = express()

// membuat route
// express js

server.get('/', function(req, res) {
    // kalau ada request http method get ke url /berita
    res.send('ini adalah home route')
})

server.get('/berita', function(req, res) {
    // kalau ada request http method get ke url /berita
    res.sendFile(path.join(__dirname+'/index.html'))
})

server.listen(3000, function() {
    console.log('Server berjalan di port 3000')
})