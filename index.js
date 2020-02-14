const express = require('express');
const app = express();
const config = require('./enviroment');

app.set('port', config.port);


// Endpoints

app.get('/', (req, res) => {
    res.end('Hello World : '+ config.version);
});

// Launch server
app.listen(3000, ()=> {
    console.log("Run server on port  = ", app.get('port'));
});