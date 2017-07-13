var express = require('express');
var app = express();
var path = require('path');

var serveIndex = require('serve-index')
var serveStatic = require('serve-static')

// Serve directory indexes for public/ftp folder (with icons)
app.use(serveIndex('dist'));
// Serve up public/ftp folder files
app.use(serveStatic('dist'));

// app.use(express.static(path.join(__dirname, 'dist')));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
