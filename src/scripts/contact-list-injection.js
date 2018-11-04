import domHTML from "./contact-html"


// object holds the addContact function
let contactInject = {

  // function for dom insertion
  addContact (contacts) {
    // make variable for dom injection
    let contactList = document.getElementById("contactList")
    // loop through objects returned from database for injection
    contacts.forEach((individualObj) => {
      contactList.innerHTML += domHTML.createContact(individualObj)
    })
  }

}
export default contactInject

// for each of the objects that come through, they are injected into the dom