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
BTN.addEventListener("click", () => {
  // BTN.style.transform = BTN.style.transform === "" ? "rotate(90deg)" : "";
  if (BTN.style.transform === "") {
    BTN.style.transform = "rotate(90deg)";
    MENU.style.right = "0px";
    console.log("ddd");
    document.querySelector("body").style.overflow = "hidden";
  } else {
    BTN.style.transform = "";
    MENU.style.right = "-350px";
    document.querySelector("body").style.overflow = "auto";
  }
});
const LINK_HELP = document.querySelector(
  "body > div > header > div.burger-wrapper > div > nav > a.burger__menu__link-help.burger__link"
);
const LINK_CONTACTS = document.querySelector(
  "body > div > header > div.burger-wrapper > div > nav > a.burger__menu__link-contacts.burger__link"
);
LINK_HELP.addEventListener("click", () => {
  MENU.style.right = "-350px";
  BTN.style.transform = "";
  document.querySelector("body").style.overflow = "auto";
});
LINK_CONTACTS.addEventListener("click", () => {
  MENU.style.right = "-350px";
  BTN.style.transform = "";
  document.querySelector("body").style.overflow = "auto";
});
