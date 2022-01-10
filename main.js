let menuIcon = document.querySelector("nav .icon")
console.log (menuIcon)
let nav = document.getElementById("nav")
menuIcon.onclick = function myFunction() {
  nav.classList.toggle("show");
}
let span = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);
  // if (this.scrollY >= 1000) {
  //   span.classList.add("show");
  // } else {
  //   span.classList.remove("show");
  // }
  this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo (top)
};
