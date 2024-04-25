const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("ativo");
  NavMenu.classList.toggle("ativo");
});

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    menu.classList.remove("ativo");
    NavMenu.classList.remove("ativo");
  });
});

NavMenu.addEventListener("click", () => {
  menu.classList.remove("ativo");
  NavMenu.classList.remove("ativo");
});
