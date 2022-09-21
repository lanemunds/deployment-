const express = require('express')
const path = require('path')
require('dotenv').config()
const port = process.env.PORT 
const app = express()
app.request(express.json())
pp.use("/", express.static(path.join(__dirname,'...client/index.html')))
app.use(express.static(path.join(__dirname,('.../client'))))



app.listen(port, ()=>{
    console.log('docked at port '+ port)
})