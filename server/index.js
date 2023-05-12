const express = require("express");
const cors = require("cors")
//const path = require("path")
require("./src/db/mongoose")
const app = express()
const taskRouter = require("./src/routers/task");

const port = 5000 || process.env.PORT;

//server can receive requests from your frontend application with different port number
app.use(cors())
app.use(express.json())

//app.use(express.static(path.resolve(__dirname, '../client/public/')));

app.use(taskRouter)

app.listen(port,()=>{
    console.log("Server is running on...")
})
