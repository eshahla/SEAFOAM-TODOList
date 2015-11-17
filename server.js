var express = require('express'),
  app = express(),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose')

// connecting to mongo database hosted on mongo labs
mongoose.connect('mongodb://samhager11:password123@ds055564.mongolab.com:55564/seafoam-todo')

// track requests to logger
app.use(logger('dev'))

//makes json object available in requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//testing the todo model(usually will have model in controller)
//not saved to database
var Item = require('./models/item.js')
var item1 = new Item({item: 'bananas', complete: true})
console.log(item1)


//import the user routes
// var todoRoutes = require('./routes/todo_routes.js')
// app.use('/api', todoRoutes)

//setup server port to run app
app.listen(3000)
console.log('Server is running on 3000')
