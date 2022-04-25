// const CARDS = document.querySelectorAll(".pets__card");
// CARDS.forEach((card) => {
//   card.addEventListener("click", (event) => {
//     console.log(event);
//   });
// });
const CARDS_ARRAY = [
  document.querySelector(".katrine"),
  document.querySelector(".jennifer"),
  document.querySelector(".woody"),
  document.querySelector(".sophia"),
  document.querySelector(".timmy"),
  document.querySelector(".charly"),
  document.querySelector(".scarlett"),
  document.querySelector(".freddie"),
];
CARDS_ARRAY.forEach((pet) => {
  pet.addEventListener("click", (event) => {
    console.log(event);
  });
});
