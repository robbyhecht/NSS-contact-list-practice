import api from "./api.js"
import contactInject from "./contact-list-injection"
// import domHTML from "./contact-html"
// import eventListen from "./contact-form"


// collect data, then run it through the contact dom injection function
api.getContacts()
.then(entries => {
  contactInject.addContact(entries)
})


let submitButton = document.getElementById("submitButton")
let contactForm = document.getElementsByClassName("contactForm")
submitButton.addEventListener("click", function() {
  event.preventDefault()
  console.log("button click")
  api.postContacts(contactForm)
})