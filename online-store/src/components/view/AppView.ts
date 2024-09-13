export class AppView {
  // обертка контейнера с товарами
  static itemsList: HTMLElement = document.querySelector('.items-list') as HTMLElement;

  // Вставляет товары в HTML document
  static renderProducts(productsData: string[]): void {
    productsData.forEach((prod: string) => this.itemsList?.insertAdjacentHTML('beforeend', prod));
  }
  // добавляет/удаляет класс товарам которые были добавлены/удалены в корзину
  // (вызывается в методе renderThroughFiltersValue класса Filters)
  static renderCart(cart: string[], cartAmount: HTMLElement): void {
    const bikes: NodeListOf<Element> = document.querySelectorAll('.item');
    if (cart.length >= 0 && cart.length < 21) {
      bikes.forEach((item: Element) => {
        const bikeId: string | null = item.getAttribute('data-id');
        if (bikeId) {
          if (cart.includes(bikeId)) {
            item.classList.add('in-cart');
          } else {
            item.classList.remove('in-cart');
          }
        }
      });
    } else {
      alert('Извините, все слоты заполнены');
    }
    cartAmount.innerText = cart.length + '';
  }
}
