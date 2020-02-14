const express = require('express');
const app = express();


// Endpoints

app.get('/', (req, res) => {
    res.end('Hello Word')
});

// Launch server
app.listen(3000);