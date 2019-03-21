const express = require('express');
const app = express();
const index = require('./routes/index.js');

app.use(express.static('public'));
app.use('/', index);
app.set('view engine', 'pug');

app.listen(8000, () => {
    console.log("Testing Testing")
});