const btn = document.querySelector(".burger-btn");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
btn.addEventListener("click", () => {
  btn.classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
  btn.classList.remove("active");
  menu.classList.remove("active");
  overlay.classList.remove("active");
});
