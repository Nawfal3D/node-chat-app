const http = require('http');
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
//const hbs = require('hbs');
const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3012;


var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket)=>{
  console.log('New user connected');


socket.on('disconnect', ()=>{
  console.log('User was diconnected');
});

});

server.listen(port,()=>{
  console.log(`server is up on port ${port}`);
});
