let signup = JSON.parse(localStorage.getItem("signup")) || [];
let submit = () => {
  let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
  if (
    name == "" ||
    email == "" ||
    password == ""
  ) {
    alert("Fill the form");
  } else {
    let Email =email;
    let Name = name;
    let Password = password;
    let obj = {
      email: Email,
      name: Name,
      password: Password,
    };
    signup.push(obj);
    localStorage.setItem("signup", JSON.stringify(signup));
    window.location.href = "../login/login.html";
  }
}
console.log(signup);




// document.querySelector("form").addEventListener("submit", signupFun);

// function signupFun() {
//   event.preventDefault();

//   let arr = JSON.parse(localStorage.getItem("signupData")) || [];
//   let obj = {
//     name: document.querySelector("#name").value,
//     email: document.querySelector("#email").value,
//     mobile: document.querySelector("#mobile").value,
//     password: document.querySelector("#password").value,
//   };
//   if (
//     obj.name == "" ||
//     obj.email == "" ||
//     obj.mobile == "" ||
//     obj.password == ""
//   ) {
//     alert("Fill the empty form");
//   } else {
//     arr.push(obj);
//     localStorage.setItem("signupData", JSON.stringify(arr));
//     window.location.href="signin.html"
//   }
// }