const express = require("express");
const { 
  getAllTodo, 
  getOneTodo, 
  createTodo, 
  deleteTodo, 
  updateTodo
} = require("../controllers/todo");
const route = express.Router()

route.get("/", getAllTodo)
route.get("/:id", getOneTodo)
route.post("/", createTodo)
route.put("/:id", updateTodo)
route.delete("/:id", deleteTodo)

module.exports = route