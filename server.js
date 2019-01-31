const express = require('express'),
app = express(),
path = require('path'),
port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist/sendtodevice/')));

app.listen(port, () => {
    console.log(port)
})