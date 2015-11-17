var mongoose = require('mongoose');


//create todo list schema
var itemSchema = new mongoose.Schema({
  item: String
  ,complete: Boolean
})

//create a Todo model using mongoose.model - 'Todo' must match database name in app.js
var Item = mongoose.model('Item', itemSchema)


//make this model accessible (to the controller) using exports
module.exports = Item
