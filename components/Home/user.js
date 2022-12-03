document.getElementById("sidecheck").addEventListener("click", function () {
  let side = document.getElementById("sidecheck");
  let lab = document.getElementById("lab");
  let button = document.querySelector("#menu");
  let sidebar = document.querySelector("#sidebar");

  if (side.checked == false) {
    sidebar.style.transform = "translateX(-270px)";
    button.style.backgroundColor = "#1794ff";
    document.querySelector("#logo").style.backgroundColor = "#1794ff";
  } else {
    sidebar.style.transform = "translateX(0)";
    button.style.backgroundColor = "#002849";
    document.querySelector("#logo").style.backgroundColor = "#002849";
  }
});


// =======================apend name=====================
let data = JSON.parse(localStorage.getItem("signup"));

let name = document.querySelector("#localname");
let name2 = document.querySelector("#lname");

name.innerText = `Hello, ${data[0].name}`;
name2.innerHTML = data[0].name;

console.log(data[0].name)




