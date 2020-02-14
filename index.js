const express = require('express');
const app = express();


// Endpoints

app.get('/', (req, res) => {
    res.end('Hello World 1.0.0')
});

// Launch server
app.listen(3000);