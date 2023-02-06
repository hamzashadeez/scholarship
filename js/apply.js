const fullname = document.getElementById("name");
const email = document.getElementById("email");
const school = document.getElementById("school");
const certificate = document.getElementById("certificate");
const state = document.getElementById("state");
const phone = document.getElementById("phone");
const address = document.getElementById("address");
const nin = document.getElementById("nin");
const noOfWifes = document.getElementById("noOfWifes");
const noOfChildren = document.getElementById("noOfChildren");

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let newData = {
    fullname: fullname.value,
    email: email.value,
    school: school.value,
    certificate: certificate.value,
    state: state.value,
    phone: phone.value,
    address: address.value,
    nin: nin.value,
    noOfWifes: noOfWifes.value,
    noOfChildren: noOfChildren.value,
    status: "Pending",
  };
  fetch(`https://mee-backend.vercel.app/dyda`, {
    // fetch(`http://localhost:5000/dyda`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("Application Successful ✅, We will get back to you soon!");
    })
    .catch((error) => {
      console.error("catch: ", error);
    });
  // let newData = [...JSON.parse(localStorage.getItem("@data")), data];
  // localStorage.setItem("@data", JSON.stringify(newData));
  // window.location.href = "";
});
