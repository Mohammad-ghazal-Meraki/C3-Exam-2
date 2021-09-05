const express = require("express");
const cors = require("cors");
const db = require("./db")
const app = express();
const expressRouter = new express.Router()


app.use(express.json())
app.use(cors());

const port = 5000;


app.use('/', expressRouter)

const BookModle = require('./db');
const { response } = require("express");
const { Db } = require("mongodb");

expressRouter.post('/books', (req, res) => {
  const { title, author, pages, publisher, published_at } = req.body;


  const newBook = new BookModle(title, author, pages, publisher, published_at).save((response) => {
    res.json('the new book is added successfuly')
  }).catch((err) => {
    throw err;
  })


})


expressRouter.get('/books', (req, res) => {
  db.find({}).then((response) => {
    req.json(response.data)
  }).catch((err) => { throw err })

})


expressRouter.get('/books/:book_id', (req, res) => {

  db.find({ _id: req.params.book_id }).then((response) => {
    req.json(response.data)
  }).catch((err) => { throw err })

})
expressRouter.delete('/books/:book_id', (req, res) => {

  db.deleteOne({ _id: req.params.book_id }).then((response) => {
    if (response.data)
      req.json('the spisific book deleted successfuly')
    else req.json('server Error')
  }).catch((err) => { throw err })

})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


