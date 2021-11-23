let spinnerWrapper = document.querySelector(".spinner-wrapper");
window.addEventListener("load", function () {
  spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});
let toggle = document.querySelector(".toggle");
let topbar = document.querySelector(".topbar");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
toggle.onclick = function () {
  toggle.classList.toggle("active");
  topbar.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
//Width
function iWork() {
  if (document.documentElement.clientWidth < 900) {
    if (!toggle.classList.contains("active")) {
      toggle.classList.add("active");
      topbar.classList.add("active");
      navigation.classList.add("active");
      main.classList.add("active");
    }
  }
}
setInterval(iWork, 100);
// Email
let firstName = document.querySelector(".firstName");
let lastName = document.querySelector(".lastName");
let email = document.querySelector(".email");
let mobile = document.querySelector(".mobile");
let message = document.querySelector(".message");
let button = document.querySelector(".button");
function sendEmail() {
  if (firstName.value == "" || lastName.value == "") {
    alert("Enter your name!");
  } else {
    var msg =
      "mailto:saumitraparkour@gmail.com?subject=Reg. Coffee&body=Hello Saumitra this is " +
      firstName.value +
      " " +
      lastName.value +
      " and this is my message " +
      message.value;
    button.setAttribute("href", msg);
  }
}
// function myFunction(x) {
//   if (x.matches) {
//     toggle.classList.remove("active");
//     topbar.classList.remove("active");
//     navigation.classList.remove("active");
//     main.classList.remove("active");
//   }
// }
// var x = window.matchMedia("(max-width: 780px)");
// myFunction(x);
// x.addEventListener(myFunction);
