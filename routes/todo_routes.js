var todoController = require('../controllers/todo_controller.js')
var express        = require('express')
var todoRoutes     = express.Router()

// routes for getting all to do list items and adding new ones
todoRoutes.route('/todos')
  .get(todoController.index)
  .post(todoController.createItem)

// route to delete certain to do list item
todoRoutes.route('/todos/:id')
  .delete(todoController.destroyItem)

module.exports = todoRoutes
