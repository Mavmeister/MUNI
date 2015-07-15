var app = require('express');
var restbus = require('restbus');
var http = require('http');
var WebSocket = require('ws')
 
http.createServer(app).listen('3030', function() {
  console.log('app is now listening on port 3030');
  restbus.listen(function() {
    console.log('restbus is now listening on port 3535');
  });
});

// var web = new WebSocket('ws://echo.websocket.org/');
// web.onerror = function(error){
//   console.log('web error ' + error)
// }
// web.onopen = function(){
//   console.log("Web socket open")
// }


// https://maps.googleapis.com/maps/api/distancematrix/JSON/destinations=41.232&destinations=-81.343&key=AIzaSyA7TbsUFsundVA54vNphHBB3Vn9vmxQYBs&mode=walking&origins=41.432&origins=-81.323&units=imperial
