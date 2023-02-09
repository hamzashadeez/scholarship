const url = "https://mee-backend.vercel.app/dyda";
window.onload = () => {
  const id = JSON.parse(localStorage.getItem("@id"));
  getData(id);

  document.getElementById("approveBtn").addEventListener("click", () => {
    // call a function
    fetch(`https://mee-backend.vercel.app/dyda/approve/${id}`, {
      method: "PUT",
      body: {},
    })
      .then(() => {
        alert("Successfully Approved ✅");
        document.getElementById("status").innerHTML = "Approved";
        // window.location.href = "../pages/dashboard.html";
      })
      .catch((err) => alert(err));
  });
  document.getElementById("rejectBtn").addEventListener("click", () => {
    // call a function
    fetch(`https://mee-backend.vercel.app/dyda/reject/${id}`, {
      method: "PUT",
      body: {},
    })
      .then(() => {
        alert("Successfully Rejected ❌");
        document.getElementById("status").innerHTML = "Rejected";
        // window.location.href = "../pages/dashboard.html";
      })
      .catch((err) => alert(err));
  });
};

const getData = async (id) => {
  fetch(`https://mee-backend.vercel.app/dyda/${id}`)
    .then((response) => response.json())
    .then((data) => {
      renderElementData(data);
    })
    .catch((error) => console.log(error));
};

const renderElementData = (data) => {
  document.getElementById("name").innerHTML = data.fullname;
  document.getElementById("email").innerHTML = data.email;
  document.getElementById("phone").innerHTML = data.phone;
  document.getElementById("address").innerHTML = data.address;
  document.getElementById("school").innerHTML = data.school;
  document.getElementById("certificate").innerHTML = data.certificate;
  document.getElementById("state").innerHTML = data.state;
  document.getElementById("nin").innerHTML = data.nin;
  document.getElementById("noOfWifes").innerHTML = data.noOfWifes;
  document.getElementById("status").innerHTML = data.status;
  document.getElementById("noOfKids").innerHTML = data.noOfChildren;
};
