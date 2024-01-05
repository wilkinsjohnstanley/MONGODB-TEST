const express = require('express')
//ctrl + z to undo
//initilize app & middleware
const app = express()

//localhost:3000
app.listen(3000, ()=> {
console.log('app is listening on port 3000')
})
//routes
app.get('/books', (req, res) => {
    res.json({mssg:"welcome to the api"})
})