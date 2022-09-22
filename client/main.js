
const rollbar = require('rollbar')

console.log('hello World')

const contactUs = (event)=>{
    event.preventDefault()
    alert("Please don't contact us")
    rollbar.log();('hello')
const buyNow = (event)=>{
    event.preventDefault()
    alert("Please don't contact us")
    rollbar.log();('hello')
}

const contact = document.querySelector('#contact')
const buy = document.querySelector('#buy')

contact.addEventListener('click',contactUs)
buy.addEventListener('click',buyNow)

