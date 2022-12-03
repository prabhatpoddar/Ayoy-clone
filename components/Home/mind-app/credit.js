function log() {
  window.location.href = "index.html";
}
document.getElementById("flex7").addEventListener("click", myFun);
function myFun() {
  console.log("object");
  window.location.href = "../../pricing/pricing.html";
}

let user = JSON.parse(localStorage.getItem("signup"));
