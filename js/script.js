const btn = document.querySelector(".burger-btn");
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const ms = document.querySelector(".menu-sidebar");
const sidebar = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
  btn.classList.add("active");
  menu.classList.add("active");
  overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
  btn.classList.remove("active");
  menu.classList.remove("active");
  ms.classList.remove("active");
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

ms.addEventListener("click", () => {
  ms.classList.add("active");
  sidebar.classList.add("active");
  overlay.classList.add("active");
});
