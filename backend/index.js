const express = require("express")
const todoRoute = require("./src/routes/todo")
var cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.use("/", todoRoute)

app.listen(3000, () =>  console.log("Sever is running"))
