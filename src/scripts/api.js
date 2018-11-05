const api = {
    getContacts () {
      return fetch("http://localhost:8088/contacts")
      .then(response => response.json())
    },
    postContacts (contact) {
      return fetch("http://localhost:8088/contacts", {
        method: "POST",
        body: JSON.stringify(contact),
        headers:{"Content-type": "application.json"}
      }
    )
  }
}

export default api