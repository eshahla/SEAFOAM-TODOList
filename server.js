var express = require('express'),
  app = express(),
  logger = require('morgan'),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose')

// connecting to mongo database hosted on mongo labs
mongoose.connect('mongodb://samhager11:password123@ds055564.mongolab.com:55564/seafoam-todo')
