const express = require('express');
const path = require('path');
const userController = require('./controllers/Users');
const gameController = require('./controllers/Game');

const app = express();
const port = process.event.PORT ||  3000;

app
    .get('/port', (req, res)=> res.send("Using port: " + port))
    .use('/static', express.static(path.join(__dirname, '../NoFramework')))
    .use ('/users', userController )
    .use('/game', gameController );    



app.listen(port, () => console.log(`Running on http://localhost:${port}`));