const form = document.getElementById("form");
const dismissBtn = document.getElementById("dismiss-btn");

const signUpScreen = document.getElementById("sign-up");
const thankyouScreen = document.getElementById("thank-you");

let email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (email.value) {
    let userEmail = document.getElementById("user-email");
    signUpScreen.style.display = "none";
    thankyouScreen.style.display = "flex";

    userEmail.innerHTML = email.value;
  }
});

dismissBtn.addEventListener("click", () => {
  signUpScreen.style.display = "flex";
  thankyouScreen.style.display = "none";

  email.value = "";
});
