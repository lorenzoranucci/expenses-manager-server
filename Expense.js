var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price:{
    type: Number,
    required:true
  }

});
var Model = mongoose.model('expense', ExpenseSchema);
module.exports = Model;