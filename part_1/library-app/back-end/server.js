const express = require("express");
const cors = require("cors");
require("./db")
const app = express();
const expressRouter = new express.Router()


app.use(express.json())
app.use(cors());

const port = 5000;


app.use('/', expressRouter)

const BookModle = require('./db');
const { response } = require("express");

expressRouter.post('/books', (req, res) => {
  const { title, author, pages, publisher, published_at } = req.body;


  const newBook = new BookModle(title, author, pages, publisher, published_at).save((response) => {
    res.json('the new book is added successfuly')
  }).catch((err) => {
    throw err;
  })


})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


