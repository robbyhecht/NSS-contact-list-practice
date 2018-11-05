import api from "./api.js"
import contactInject from "./contact-list-injection"
// import contactForm from "./contact-form"


// collect data, then run it through the contact dom injection function
api.getContacts()
.then(entries => {
  contactInject.addContact(entries)
})


let submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", function() {
  event.preventDefault()
  console.log("button click")

})