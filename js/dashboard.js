const url = "https://mee-backend.vercel.app/dyda";
let DATA = [];

const getdata = async () => {
  await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      render(data);
      stat(data);
      DATA = data;
    })
    .catch((error) => console.log(error));
};

window.onload = () => {
  getdata();
};

const table = document.getElementById("table-body");
const data = JSON.parse(localStorage.getItem("@data"));
// console.log(data);

const render = (data) => {
  table.innerHTML = "";
  data.map((d) => {
    let html = `<tr><td>${d.fullname}</td><td>${d.email}</td><td><button data-id=${d._id} class="btn bg-green-100 text-sm viewButton">Open</button></td></tr>`;
    table.innerHTML += html;
  });

  const viewButtons = document.querySelectorAll(".viewButton");
  for (let i = 0; i < viewButtons.length; i++) {
    const btn = viewButtons[i];
    btn.addEventListener("click", () => {
      console.log(btn.dataset.id);
      localStorage.setItem("@id", JSON.stringify(btn.dataset.id));
      window.location.href = "../pages/detail.html";
    });
  }
};

const stat = (data) => {
  let rejected = 0;
  let approved = 0;
  let pending = 0;

  data.map((d) => {
    if (d.status === "Pending") {
      pending++;
    } else if (d.status === "Approved") {
      approved++;
    } else {
      rejected++;
    }
  });
  document.getElementById("pending").innerHTML = pending;
  document.getElementById("approved").innerHTML = approved;
  document.getElementById("rejected").innerHTML = rejected;
};
