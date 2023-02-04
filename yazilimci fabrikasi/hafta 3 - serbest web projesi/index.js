const inputName = document.getElementById("inputName");
const surname = document.getElementById("inputSurname");
const phone = document.getElementById("inputPhone");
const age = document.getElementById("inputAge");
const eMail = document.getElementById("inputEmail4");
const city = document.getElementById("inputCity");
const password = document.getElementById("inputPassword4");
const message = document.getElementById("exampleFormControlTextarea1");
const submitButton = document.getElementById("submitButton");
const modal = document.getElementById("modal-content");
const yesButton = document.getElementById("yesButton");


eventListeners();

function eventListeners() {
    submitButton.addEventListener("click", showInfos);
    yesButton.addEventListener("click", resetForm);
}

function showInfos(e) {
    modal.innerHTML = `
    <table class="table">
     <thead>
      <tr>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Phone</th>
      <th scope="col">Age</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${inputName.value}</td>
      <td>${surname.value}</td>
      <td>${phone.value}</td>
      <td>${age.value}</td>

  </tbody>
</table>


<table class="table">
  <thead>
    <tr>
      <th scope="col">E-Mail</th>
      <th scope="col">City</th>
      <th scope="col">Password</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${eMail.value}</td>
      <td>${city.value}</td>
      <td>${password.value}</td>

  </tbody>
</table>

<table class="table">
  <thead>
    <tr>
      <th scope="col-12">Message</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${message.value}</td>

  </tbody>
</table>
    `
    e.preventDefault()
}

function resetForm(e) {
    inputName.value = "";
    surname.value = "";
    phone.value = "";
    age.value = "";
    eMail.value = "";
    city.value = "";
    password.value = "";
    message.value = "";
    modal.innerHTML = "";
    location.reload();
}

