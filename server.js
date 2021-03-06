const fs = require('fs');
const path = require('path');
const express = require('express');
//const { animals } = require('./Develop/db');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('Develop/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//write app.POST
//this will write to db.json
//it will take in the note title & note text
//take
//add the ID before push to array

//req is stuff from user
//res is what you send

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/db/db.json'));
});

app.post('/api/notes', (req, res) => {
    console.log(req.body);
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});