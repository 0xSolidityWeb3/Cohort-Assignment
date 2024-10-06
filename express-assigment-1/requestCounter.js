//Create a middleware that counts total number of requests sent to a server. 
//Also create an endpoint that exposes it

const express = require('express')
const app = express()
const PORT = 3000
let requestCount = 0 

app.use(function(req, res, next){
    requestCount = requestCount + 1;
    next()
})

app.get('/', function(req, res){
    res.json({status: "GET request sent"})
})

app.get('/requestCount', function(req, res){
    res.json({"requestCount": requestCount})
})

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})