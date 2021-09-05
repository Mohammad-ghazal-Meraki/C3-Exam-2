const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/ExamDB').then(
    console.log('db ready to use'));


const BookModle = new mongoose.Schema({
    title: String, author: String, pages: Number, publisher: String, published_at: Date
});
//       const modle1 = mongoose.model('modle', ModleTest);



// // const modle = new ModleTest({ name: 'test' });
// modle1.save().then(() => console.log('mongo test'));





module.exports = mongoose.model(BookModle);
