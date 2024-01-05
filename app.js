const express = require('express')
const { connectToDb, getDb } = require('./db')
//ctrl + z to undo
//initilize app & middleware
const app = express()
// db connection
let db


connectToDb((err)=>{
    if(!err){
    app.listen(3000, () => {
     console.log('app is listening on port 3000')
    })
    db = getDb()
    }
})

//routes
app.get('/books', (req, res) => {
    let books = []
    db.collection('books')
        .find() //cursor toArray fetches documents into array, forEach lets us process them individually
        .sort({author:1})
        .forEach(book=>books.push(book))
        .then(()=>{
            res.status(200).json(books)
        })
        .catch(()=>{
            res.status(500).json({error: 'Could not fetch the documents'})
        })
    res.json({mssg:"welcome to the api"})
})