const table = document.getElementById("table-body");
const data = JSON.parse(localStorage.getItem("@data"));
console.log(data);

const render = () => {
  table.innerHTML = "";
  data.map((d) => {
    let html = `<tr><td>${d.fullname}</td><td>${d.email}</td><td>${d.certificate}</td></tr>`;
    table.innerHTML += html;
  });
};

render();
