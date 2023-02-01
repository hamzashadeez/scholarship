const fullname = document.getElementById("name");
const email = document.getElementById("email");
const school = document.getElementById("school");
const certificate = document.getElementById("certificate");
const state = document.getElementById("state");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const nin = document.getElementById("nin");

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let data = {
    fullname: fullname.value,
    email: email.value,
    school: school.value,
    certificate: certificate.value,
    state: state.value,
    phone: phone.value,
    address: address.value,
    nin: nin.value,
  };

  let newData = [...JSON.parse(localStorage.getItem("@data")), data];
  localStorage.setItem("@data", JSON.stringify(newData));
  // window.location.href = "";
  alert("Application Successful ✅, We will get back to you soon!");
});
