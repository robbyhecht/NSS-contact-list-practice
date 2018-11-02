
const API = {
  pingContacts () {
    return fetch("http://localhost:8088/contacts")
    .then(response => response.json())
  }
}

export default API