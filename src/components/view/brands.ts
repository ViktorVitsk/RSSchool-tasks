export default function brandsDraw() {
  const brands = document.querySelectorAll('.brand');
  brands.forEach((i) => {
    if (i instanceof HTMLElement) {
      console.log(i.getAttribute('data-brand'));
      i.style.background = `url(./assets/images/brands/${i.getAttribute('data-brand')}.png) 0 0 / contain no-repeat`;
    }
  });
}
