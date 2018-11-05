const api = {
    getContacts () {
      return fetch("http://localhost:8088/contacts")
      .then(response => response.json())
    },
    postContacts (obj) {
      return fetch("http://localhost:8088/contacts", {
        method: "POST",
        body: JSON.stringify(obj),
        headers:{"Content-type": "application.json"}
      }
    )
  }
}

export default api
// (see main.js)