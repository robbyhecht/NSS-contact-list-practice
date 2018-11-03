import API from "./api-call"
import contactInject from "./contact-list-injection"

let apiCall = {
  // gets data from api
  getData() {
    API.pingContacts()
    .then(entries =>
      contactInject.addContact(entries)
    )
  },
  // saves data to api
  // postData() {
  // API.pingContacts()
  // .then()
  // }

}

export default apiCall





// A ContactCollection component that loads existing contacts from storage, and saves new ones. Each new contact should have an auto-generated identifier.




// API.getJournalEntries()
// .then(entries =>
//   renderDom.addJournalEntry(entries)
// )