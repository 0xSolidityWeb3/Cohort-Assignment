const express = require('express')
const app = express()
const PORT = 3000

app.get('/add',function(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        result: a + b
    })
})

app.get('/divide', function(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        result: a / b
    })
})

app.get('/multiply', function(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        result: a * b
    })
})

app.get('/subtract', function(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        result: a - b
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})