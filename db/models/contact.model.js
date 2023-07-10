// refer docs  mongoosejs.com/docs/schematypes.html

const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,   
  },
  phoneNumber: {
    type: Number,
    required: true,
    trim: true,
    min: 1000000000,
    max: 9999999999
  },
  message: {
    type: String,
    required: true,
    trim: true    
  },
})

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = { Contact };