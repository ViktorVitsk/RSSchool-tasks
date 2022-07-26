export default function brandsDraw(): void {
  const brands: NodeListOf<Element> = document.querySelectorAll('.brand');
  // добавляет картинки кнопкам брэндов
  brands.forEach((i) => {
    if (i instanceof HTMLElement) {
      i.style.background = `url(./assets/images/brands/${i.getAttribute('data-brand')}.png) 0 0 / contain no-repeat`;
    }
  });
}
