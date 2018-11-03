import domHTML from "./contact-html"

// object holds the addContact function
let contactInject = {
  // function for dom insertion
  addContact (contacts) {
    // make variable for dom injection
    let contactList = document.getElementById("contactList")
    // loop through objects returned from database for injection
    contacts.forEach((person) => {
      contactList.innerHTML += domHTML.createContact(person)
    })
  }
}
export default contactInject


// A ContactList component that displays all contacts. It should import the Contact (contact-html) component and the ContactCollection component.
// addFoodToDom = (food) => {
//   food.forEach((item) => {
//     foodList.innerHTML += foodFactory(item);
//   });
// }

// const renderDom = {
//   addJournalEntry (entries) {
//     entries.forEach(entry => {
//       // calls the create function inside the add function
//       entryLog.innerHTML += domManager.createJournalEntry(entry);
//     });
//   }
// }