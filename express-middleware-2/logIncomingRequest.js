//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const app = express();

function logRequests(req, res, next) {
    // write the logic for request log here
    const method = req.method;
    const url = req.url;
    const ip = req.ip
    const timeStamp = new Date().toISOString()
    console.log(`Time: ${timeStamp}\nMethod: ${method}\nURL: ${url}\nIP-${ip}`)
    next()
}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});


app.listen(3000)