//Create a middleware function that logs each incoming 
//request’s HTTP method, URL, and timestamp to the console

const express = require('express')
const app = express()
const PORT = 3000

app.use(function(req, res, next){
    const method = req.method;
    const url = req.url
    const timestamp = new Date().toDateString()
    console.log(`URL : ${url}\nMethod: ${method}\nTimestamp: ${timestamp}`)
    next()
})

app.get('/', function(req, res) {
    res.json({result: "GET Request sent"})
})

app.post('/', function(req, res){
    res.json({result: "POST Request sent"})
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})