const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000
let numberOfRequest = 0

//built-in middleware
app.use(cors())

//custom middleware
app.use((req, res, next) => {
    console.log(`Requested URL : ${req.url}`)
    numberOfRequest ++;
    console.log(`Number of Request : ${numberOfRequest}`)
    next()
})

//query reading
app.get('/search', (req, res) => {
    const query = req.query.name
    res.send(`Query is ${query}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})