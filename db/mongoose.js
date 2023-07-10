const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://TheVedaVerse:TheVedaV4321@cluster0.gwb9v8i.mongodb.net/tvvDemo?retryWrites=true&w=majority")
.then(() => {
  console.log('connected mongo successful')
})
.catch((e) => {
  console.log('err while connecting to mongoDB')
  console.log(e);
});

module.exports = {
  mongoose
}