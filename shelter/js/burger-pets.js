// (function () {
//   const burger = document.querySelector(".burger__img");
//   burger.addEventListener("click", () => {
//     burger.classList.toggle("#burger_active");
//   });
// })();
const BTN = document.querySelector("body > div > header > nav");
const MENU = document.querySelector(
  "body > div > header > div.burger-wrapper > div"
);
const FOR_DARKEN = document.querySelector("body > div:nth-child(1)");
const FOR_DARKEN_HEADER = document.querySelector(
  "body > div.background > header"
);
const FOR_DARKEN_LOGO = document.querySelector(
  "body > div.background > header > div.logo"
);

BTN.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 767.5px)").matches) {
    // BTN.style.transform = BTN.style.transform === "" ? "rotate(90deg)" : "";

    if (BTN.style.transform === "") {
      BTN.style.background = "url(../assets/icons/Burger-main.png)";
      BTN.style.transform = "rotate(90deg)";
      MENU.style.right = "0px";
      FOR_DARKEN.classList.add("darken");
      FOR_DARKEN_HEADER.style.background = "rgba(41, 41, 41, 0.6)";
      FOR_DARKEN_LOGO.style.visibility = "hidden";
      document.querySelector("body").style.overflow = "hidden";
      if (FOR_DARKEN.classList.contains("darken")) {
        document
          .querySelector("body > div.darken")
          .addEventListener("click", () => {
            BTN.style.transform = "";
            MENU.style.right = "-350px";
            FOR_DARKEN.classList.remove("darken");
            FOR_DARKEN_HEADER.style.background = "";
            FOR_DARKEN_LOGO.style.visibility = "";

            document.querySelector("body").style.overflow = "auto";
            BTN.style.background = "";
          });
      }
    } else {
      BTN.style.transform = "";
      MENU.style.right = "-350px";
      FOR_DARKEN.classList.remove("darken");
      FOR_DARKEN_HEADER.style.background = "";
      FOR_DARKEN_LOGO.style.visibility = "";

      document.querySelector("body").style.overflow = "auto";
      BTN.style.background = "";
    }
  }
});
const LINK_HELP = document.querySelector(
  "body > div > header > div.burger-wrapper > div > nav > a.burger__menu__link-help.burger__link"
);
const LINK_CONTACTS = document.querySelector(
  "body > div > header > div.burger-wrapper > div > nav > a.burger__menu__link-contacts.burger__link"
);
// LINK_HELP.addEventListener("click", () => {
//   if (window.matchMedia("(max-width: 767.5px)").matches) {
//     MENU.style.right = "-350px";
//     BTN.style.transform = "";
//     FOR_DARKEN.classList.remove("darken");
//     FOR_DARKEN_HEADER.style.background = "";

//     document.querySelector("body").style.overflow = "auto";
//   }
// });
LINK_CONTACTS.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 767.5px)").matches) {
    MENU.style.right = "-350px";
    BTN.style.transform = "";
    FOR_DARKEN.classList.remove("darken");
    FOR_DARKEN_HEADER.style.background = "";
    FOR_DARKEN_LOGO.style.visibility = "";

    document.querySelector("body").style.overflow = "auto";
    // BTN.style.background = "url(../assets/icons/Burger-pets.png)";
    BTN.style.background = "";
  }
});
