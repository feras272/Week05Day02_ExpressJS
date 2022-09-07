console.log('Tuwaiq Academy - JavaScript');
console.log('Week 5 Day 2 - Express JS');

const express = require('express');
const app = express();
const port = 3000;

// Midleware : read what iside post (body)
// use => using this operation before any request
app.use(express.json)

const data = [
    {user:"Feras", password:"1234"},
    {user:"Ahmad", password:"5678"},
    {user:"Khalid", password:"1020"},
    {user:"Nasser", password:"1122"},
    {user:"Yousif", password:"1111"}
]

app.get("/user", (req, res) => {
    res.json(data[0])
});

app.get("/", (req, res) => {
    res.send('This is respond GET http://localhost:3000/');
});


// Request => Body => raw => JSON 
app.post("/", (req, res) => {
    res.send('This is respond POST');
});

app.put("/", (req, res) => {
    res.send('This is respond PUT http://localhost:3000');
});

app.delete("/", (req, res) => {
    res.send('This is respond DELETE');
});

app.listen(port, () => {
    console.log('SERVER ARE WORKING ... on port ${port}');
});