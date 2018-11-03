const domHTML = {
  createContact (contacts) {
    let contactContent = `
    <section class="newContacts">
      <h3>${contacts.firstName} ${contacts.lastName}</h3>
      <p>${contacts.phone}</p>
      <p>${contacts.address.street}<br>${contacts.address.city}<br>${contacts.address.state}</p>
    </section>
    `
    return contactContent
  }
}

export default domHTML



// A Contact component that displays a person's name, phone number, and address.