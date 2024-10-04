//Design a RESTFull API 
const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json')
const app =  express()
const PORT = 3000;

app.use(express.json())

//REST API
app.get('/api/users', function(req, res){
    res.status(200).json(users)
})

//Server Side Rendering at '/users' endpoint 
app.get('/users', function(req, res){
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `
    res.status(200).send(html)
})
//GET all the users
app.route('/api/users/:id').get(function(req, res){
    const id = parseInt(req.params.id)
    const user = users.find((user) => user.id === id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user)
})
//Update the existing user with ID
.put(function(req, res){
    //Get the user data from the body to edit 
    const id = parseInt(req.params.id)
    const filePath = './MOCK_DATA.json'
    const userIndex = users.findIndex((user) => user.id === id);
    if(userIndex === -1){
        return res.status(404).json({Error: "User not found"})
    }
    const upatedUser = req.body
    users[userIndex] = {...users[userIndex], ...upatedUser}
    fs.writeFile(filePath, JSON.stringify(users), (err) => {
        if(err){
            console.error(err)
            return res.status(500).send("Error while writing to file")
        }
    })
    return res.status(200).json({status: "Data Changed"})
})
//Delete the user with ID
.delete(function(req, res){
    //Get the ID from the URL
    const id = parseInt(req.params.id)
    //Find the index of user with matching ID
    const userIndex = users.findIndex((user) => user.id === id)
    delete users[userIndex]
    return res.status(200).json({status: `Deleted User ${id}`})

})
//Update the user DB with new user data
app.post('/api/users', function(req, res){

    const user = req.body
    const filePath = './MOCK_DATA.json'
    users.push({id: users.length + 1, ...user})

    fs.writeFile(filePath, JSON.stringify(users), (err) => {
        if(err){
            console.error(err)
            return res.status(500).send("Error while writing to file")
        }
        return res.status(200).json({status:  "success"})
    })
    
})


app.listen(PORT, () => {
    console.log(`Server Running at Port ${PORT}`)
})