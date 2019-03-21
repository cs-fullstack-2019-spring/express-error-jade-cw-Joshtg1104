const express = require('express');
const router = express.Router();
//route to index
router.get('/', (req, res) => {
    res.send("Enter a Placeholder in the URL");
});
//route to exercise 1
router.get('/exercise1/:word/:word2', (req, res) => {
    res.render('index', {placeholder: req.params.word, placeholder2: req.params.word2});
});
//route to exercise 2
router.get('/exercise2/:number', (req, res) => {
    res.render('index2', {placeholder1: req.params.number});
});

module.exports = router;