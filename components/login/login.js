let form = document.querySelector("form");
form.addEventListener("submit", subfunc);

let signupls = JSON.parse(localStorage.getItem("signup")) || [];

let flag = false;
function subfunc(e) {
  e.preventDefault();
  if (form.email.value == "" || form.password.value == "") {
    alert("Fill the form");
  } else {
    let email = form.email.value;
    let password = form.password.value;
    let obj = {
      Email: email,
      Password: password,
    };

    if (signupls.length <= 0) {
      alert("User Data is not found plese Register");
      window.location.href = "../signup/signup.html";
    } else if (signupls.length >= 1) {
      for(let i=0;i<signupls.length;i++) {
        if (obj.Email === signupls[i].email && obj.Password === signupls[i].password) {
          flag = true;
          alert("Login Succeccfully Completed");
          localStorage.setItem("flag", JSON.stringify(flag));
          return window.location.href = "user.html";
        } else {
          flag=false;
        }
      }
    }
  }
  if(flag===false){
    alert("Invalid Data")
  }
}

console.log(signupls);
