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
const WRAPPER = document.querySelector(
  "body > div.top-gradient > header > div.burger-wrapper"
);
BTN.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 767.5px)").matches) {
    // BTN.style.transform = BTN.style.transform === "" ? "rotate(90deg)" : "";
    if (BTN.style.transform === "") {
      WRAPPER.style.display = "block";
      BTN.style.transform = "rotate(90deg)";
      MENU.style.right = "0px";
      FOR_DARKEN.classList.add("darken");
      document.querySelector("body").style.overflow = "hidden";
      if (FOR_DARKEN.classList.contains("darken")) {
        document
          .querySelector("body > div.darken")
          .addEventListener("click", () => {
            BTN.style.transform = "";
            MENU.style.right = "-350px";
            FOR_DARKEN.classList.remove("darken");
            document.querySelector("body").style.overflow = "auto";
            WRAPPER.style.display = "none";
          });
      }
    } else {
      BTN.style.transform = "";
      MENU.style.right = "-350px";
      FOR_DARKEN.classList.remove("darken");
      WRAPPER.style.display = "none";

      document.querySelector("body").style.overflow = "auto";
    }
  }
});
const LINK_HELP = document.querySelector(
  "body > div > header > div.burger-wrapper > div > nav > a.burger__menu__link-help.burger__link"
);
const LINK_CONTACTS = document.querySelector(
  "body > div > header > div.burger-wrapper > div > nav > a.burger__menu__link-contacts.burger__link"
);
LINK_HELP.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 767.5px)").matches) {
    MENU.style.right = "-350px";
    BTN.style.transform = "";
    document.querySelector("body").style.overflow = "auto";
    FOR_DARKEN.classList.remove("darken");
    WRAPPER.style.display = "none";
  }
});
LINK_CONTACTS.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 767.5px)").matches) {
    MENU.style.right = "-350px";
    BTN.style.transform = "";
    document.querySelector("body").style.overflow = "auto";
    FOR_DARKEN.classList.remove("darken");
    WRAPPER.style.display = "none";
  }
});
