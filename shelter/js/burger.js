(function () {
  const burger = document.querySelector(".burger__img");
  burger.addEventListener("click", () => {
    burger.classList.toggle("#burger_active");
  });
})();
