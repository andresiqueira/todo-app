const express = require("express");
const todoRoute = require("./src/routes/todo")

const app = express()
app.use(express.json())

app.use("/", todoRoute)

app.listen(3000, () =>  console.log("Sever is running"))
