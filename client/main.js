console.log('hello World')

const contactUs = (event)=>{
    event.preventDefault()
    alert("Please don't contact us")
}

const contact = document.querySelector('#contact')

contact.addEventListener('click',contactUs)