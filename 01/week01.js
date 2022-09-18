//Week 01 Web Server

const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World! And welcome to CSE341 - Week 01.')
})

app.listen(port, () => {
    console.log(`Yes! I am runnning on port ${port}`)
})