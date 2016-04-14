var os = require('os');
var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Hello from service B running on ' + os.hostname());
});

app.listen(process.env.PORT || 3000);