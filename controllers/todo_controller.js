var Item      = require('../models/item.js')

// function to list all to do list items
function index(req,res){
  Item.find({}, function(err,items){
    if(err) console.log(err)
    res.send(items)
  })
}

// function to create a new to do list item
function create(req,res){
  console.log('Created a item!')
  var newItem = new Item()

  newItem.item = req.body.item
  newItem.complete = false

  newItem.save(function(err){
		if(err){
			if(err.code == 11000){
				return res.json({success: false, message: "Item already exists" })
			} else {
				res.send(err)
			}
		}
		res.json({success: true, message: "Item added!"})
	})
}

// destroy function
function destroy(req,res){
  Item.remove({_id:req.params.id}, function(err,item){
    if (err) res.send(err)
    console.log(item)
    res.json({success:true, message:"You must have just done it"})
  })
}

// exporting functions to be available in all files
module.exports = {
  index: index,
  createItem: create,
  destroyItem: destroy
}
