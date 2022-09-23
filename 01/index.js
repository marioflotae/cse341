//Week 01 Web Server

const mongodb = require('./connection/db');
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello Mario')
})

app.use('/', require('./routes'));

app.get()


mongodb().then(() => {
    app.listen(port, () => {
        console.log(`Listening on port: ${port}`);
    });
});