const express = require("express")
const validator = require("../middlewares/validators/todo")

const { 
  getAllTodo, 
  getOneTodo, 
  createTodo, 
  deleteTodo, 
  updateTodo
} = require("../controllers/todo")
const route = express.Router()

route.get("/", getAllTodo)
route.get("/:id", getOneTodo)
route.post("/", validator ,createTodo)
route.put("/:id", updateTodo)
route.delete("/:id", deleteTodo)

module.exports = route