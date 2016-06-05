var express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  
  IP = process.env.IP,
  PORT = process.env.PORT;

  app.use(bodyParser());
  app.use(express.static('.'));
  
  app.get('/', function (request, response) {
    response.sendfile('index.html');
  });
  
  app.listen(PORT, IP, 
  
  function(){
      console.log("The server is run  on \n port :", PORT, "\n ip", IP);
  },
  function(err){
      console.log("Can't run server at :", PORT, "\n ip", IP, "\n ERROR : ", err);
  });