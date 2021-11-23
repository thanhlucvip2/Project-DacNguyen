document.getElementById("menu-mobile").style.display = "none";
function closeMenuMobile() {
  document
    .getElementById("menu-mobile")
    .classList.add("animation-menu-mobile-out");
  setTimeout(() => {
    document.getElementById("menu-mobile").style.display = "none";
    document
      .getElementById("menu-mobile")
      .classList.remove("animation-menu-mobile-out");
  }, 600);
}

function openMenuMobile() {
  document.getElementById("menu-mobile").style.display = "block";
  document
    .getElementById("menu-mobile")
    .classList.add("animation-menu-mobile-in");
  setTimeout(() => {
    document
      .getElementById("menu-mobile")
      .classList.remove("animation-menu-mobile-in");
  }, 700);
}
