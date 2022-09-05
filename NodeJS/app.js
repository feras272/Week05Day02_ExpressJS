console.log('Tuwaiq Academy - JavaScript');
console.log('Week 5 Day 2 - Express JS');

const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('This is respond GET');
});

app.listen(port, () => {
    console.log('SERVER ARE WORKING ...');
});