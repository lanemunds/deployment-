const express = require('express')
const path = require('path')
require('dotenv').config()
const port = process.env.PORT ||5000
const app = express()
app.use(express.json())

app.use('/', express.static(path.join(__dirname,'..client/index.html')))
app.use(express.static(path.join(__dirname,('../client'))))

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '774d489357f949608451bc855c7edafd',
  captureUncaught: true,
  captureUnhandledRejections: true
});

rollbar.log("Hello world!");

try {
    nonExistentFunction();
  } catch (error) {
    rollbar.error(error)};
try {
    nonExistentFunction2();
  } catch (error) {
    rollbar.critical(error)};

app.listen(port, ()=>{
    console.log('docked at port '+ port)
})