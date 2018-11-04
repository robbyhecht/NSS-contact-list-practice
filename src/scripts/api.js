const api = {
    getContacts () {
      return fetch("http://localhost:8088/contacts")
      .then(response => response.json())
    },
    postContacts () {
      return fetch("http://localhost:8088/contacts", {
        method: 'POST',
        body: JSON.stringify(object),
        headers:{'Content-type': 'application.json'}
      }
    )
  }
}

export default api