let contactForm = {

  collectFormInfo = () => {

    let fName = document.getElementById("firstName").value
    let lName = document.getElementById("lastName").value
    let phoneNum = document.getElementById("phoneNumber").value
    let addy = document.getElementById("userStreet").value

    let contactObject = {
      firstName: fName,
      lastName: lName,
      phone: phoneNum,
      address: addy
    }

    return contactObject

  }

}

export default contactForm