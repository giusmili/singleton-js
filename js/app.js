document.addEventListener("DOMContentLoaded", (e) => {
  console.log(e.target);
  // utilisateur type
  class User {
    constructor(log, pwd) {
      if (!User.instance) {
        this._log = log;
        this._pwd = pwd;

        User.instance = this;
      }

      return User.instance;
    }

    get_User() {
      return this._log + ' ' + this._pwd;
    }
  }

  const userForm = document.querySelector("form");
  console.log(userForm)

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const logInput = document.getElementById("username");
    const pwdInput = document.getElementById("password");

    const firstUser = new User(logInput.value, pwdInput.value);
    // condition ternaire
    logInput.value && pwdInput.value
    ? console.log(firstUser.get_User())
    : Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
      
    localStorage.setItem("user", logInput.value )
  
      

    //console.log(firstUser.get_User());
  });

});
