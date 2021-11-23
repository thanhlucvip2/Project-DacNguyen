// click menu phone
const menuPhone = document.getElementById("menu-phone");
menuPhone.style.display = "none";

function clickmenuphone() {
  if (menuPhone.style.display === "none") {
    menuPhone.style.display = "block";

    setTimeout(() => {
      menuPhone.style.display = "none";
    }, 50000);
  } else {
    menuPhone.style.display = "none";
  }
}

//MENU
//home
const home = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        active_menu(1);
        return;
      }
    });
  },
  { rootMargin: "0px 0px -80% 0px" }
);

home.observe(document.getElementById("home"));
//benefit
const benefit = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        active_menu(2);
        return;
      }
    });
  },
  { rootMargin: "0px 0px -80% 0px" }
);

benefit.observe(document.getElementById("benefit"));
//product
const product = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        active_menu(3);
        return;
      }
    });
  },
  { rootMargin: "0px 0px -80% 0px" }
);

product.observe(document.getElementById("product"));
//list-product
const list_product = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        active_menu(4);
        return;
      }
    });
  },
  { rootMargin: "0px 0px -80% 0px" }
);

list_product.observe(document.getElementById("list-product"));
//content
const content = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        active_menu(5);
        return;
      }
    });
  },
  { rootMargin: "0px 0px -80% 0px" }
);

content.observe(document.getElementById("content"));
//contact
const contact = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        active_menu(6);
        return;
      }
    });
  },
  { rootMargin: "0px 0px -80% 0px" }
);

contact.observe(document.getElementById("contact"));

function active_menu(number) {
  if (number > 1) {
    document
      .getElementById("animation_menu_desktops")
      .classList.add("animation_menu_desktop");
    document.getElementById("logo-menuScroll").style.display = "none";
    document.getElementById("logo-text").style.display = "block";
  }
  if (number === 1) {
    document
      .getElementById("animation_menu_desktops")
      .classList.remove("animation_menu_desktop");
    document.getElementById("logo-menuScroll").style.display = "block";
    document.getElementById("logo-text").style.display = "none";
  }
  document.getElementById("menu1").classList.remove("active_menu");
  document.getElementById("menu1").style.color = "#e6d6be";
  document.getElementById("menu2").classList.remove("active_menu");
  document.getElementById("menu2").style.color = "#e6d6be";
  document.getElementById("menu3").classList.remove("active_menu");
  document.getElementById("menu3").style.color = "#e6d6be";
  document.getElementById("menu4").classList.remove("active_menu");
  document.getElementById("menu4").style.color = "#e6d6be";
  document.getElementById("menu5").classList.remove("active_menu");
  document.getElementById("menu5").style.color = "#e6d6be";
  document.getElementById("menu6").classList.remove("active_menu");
  document.getElementById("menu6").style.color = "#e6d6be";
  document.getElementById("menu-phone-1").style.color = "rgb(215 200 152)";
  document.getElementById("menu-phone-2").style.color = "rgb(215 200 152)";
  document.getElementById("menu-phone-3").style.color = "rgb(215 200 152)";
  document.getElementById("menu-phone-4").style.color = "rgb(215 200 152)";
  document.getElementById("menu-phone-5").style.color = "rgb(215 200 152)";
  document.getElementById("menu-phone-6").style.color = "rgb(215 200 152)";
  document.getElementById("menu-mobile-1").classList.remove("active_menu");
  document.getElementById("menu-mobile-1").style.color = "rgb(255 255 255)";
  document.getElementById("menu-mobile-2").classList.remove("active_menu");
  document.getElementById("menu-mobile-2").style.color = "rgb(255 255 255)";
  document.getElementById("menu-mobile-3").classList.remove("active_menu");
  document.getElementById("menu-mobile-3").style.color = "rgb(255 255 255)";
  document.getElementById("menu-mobile-4").classList.remove("active_menu");
  document.getElementById("menu-mobile-4").style.color = "rgb(255 255 255)";
  document.getElementById("menu-mobile-5").classList.remove("active_menu");
  document.getElementById("menu-mobile-5").style.color = "rgb(255 255 255)";
  document.getElementById("menu-mobile-6").classList.remove("active_menu");
  document.getElementById("menu-mobile-6").style.color = "rgb(255 255 255)";
  document.getElementById(`menu${number}`).classList.add("active_menu");
  document.getElementById(`menu${number}`).style.color = "rgb(255 177 0)";
  document.getElementById(`menu-mobile-${number}`).classList.add("active_menu");
  document.getElementById(`menu-mobile-${number}`).style.color =
    "rgb(255 177 0)";
  document.getElementById(`menu-phone-${number}`).style.color =
    "rgb(255 113 113)";
}
