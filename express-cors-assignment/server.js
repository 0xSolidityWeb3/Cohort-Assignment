const express = require('express')
const cors = require('cors')
const app =  express()

const PORT = 3000
app.use(express.json())
app.use(cors())

app.post('/api/sum', function(req, res) {
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)
    res.json({
        sum: a + b
    })
})

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})