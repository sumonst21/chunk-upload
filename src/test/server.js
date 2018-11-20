#!/usr/bin/env node

const express = require('express');
const uploader = require('../server.js');

var app = express();

var port = process.env.PORT || 3000;

app.use(express.static('sample'));
app.use('/lib', express.static('./lib'));

app.use('/upload', uploader());

/*
app.get('/', function (req, res) {
  res.send('Hello World!')
})
*/



app.put('/upload', (req, res) => {
    
    console.log('-------------****');
    //console.log(JSON.stringify(req.headers));
    console.log(req.uploader);
    console.log('-------------**--');
    
    res.send('OK');
    
});

process.on('SIGINT', function() {
    console.log('RECEIVED SIGINT');
    process.exit(0);
});

process.on('SIGTERM', function() {
    console.log('RECEIVED SIGTERM');
    process.exit(0);
});

app.listen(port, function () {
    console.log('app listening on port ' + port + '!');
});



