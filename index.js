var express = require('express');
app = express();
app.use('/', express.static(__dirname + '/app'));
app.use('/scripts', express.static(__dirname + '/node_modules'));
app.listen(55);