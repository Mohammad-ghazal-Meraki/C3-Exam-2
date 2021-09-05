const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/ExamDB').then(
    console.log('db ready to use'));


const modleTest = new mongoose.Schema({
    name: String
});
//       const modle1 = mongoose.model('modle', ModleTest);



// // const modle = new ModleTest({ name: 'test' });
// modle1.save().then(() => console.log('mongo test'));





//module.exports = mongoose.model(modleTest);
