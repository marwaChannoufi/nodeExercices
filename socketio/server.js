var express = require('express')
var http= require("http")
var app= express()

// to create a server 
var server =http.createServer(app).listen(3000)
var io= require("socket.io")(server)

// from with path or directory expres does work

app.use(express.static("./public"))

io.on("connection",(socket)=>{
    socket.on("chat",(message)=>{
        socket.broadcast.emit("message",message)
    })
    socket.emit("message","chat")
})

console.log("socket server open ");