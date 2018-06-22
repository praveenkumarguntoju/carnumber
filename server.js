var express = require('express');
var app = express();
var request = require('request');
var formidable = require('formidable');
var fs = require('fs');
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('*', function (req, res) {
 var path = req.path;
 if(req.path == '/'){
   res.sendFile( __dirname + "/" + "index.html" );
 }else
 {
   res.sendFile( __dirname + req.path);
 }
});
 
var server = app.listen(process.env.PORT || 8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port);
});
