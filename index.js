const express = require('express')
const path = require('path')
require('dotenv').config()
const port = process.env.PORT 
const app = express()
app.request(express.json())
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(port, ()=>{
    console.log('docked at port '+ port)
})