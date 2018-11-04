import api from "./api.js"
import contactInject from "./contact-list-injection"


// collect data
api.getContacts()
// run it through the contact dom injection function
.then(entries => {
  contactInject.addContact(entries)
})

