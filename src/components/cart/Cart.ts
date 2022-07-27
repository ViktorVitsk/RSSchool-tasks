export class Cart {
  products: string[];
  counter: HTMLElement;
  constructor(products: string[], counter: HTMLElement) {
    this.products = products;
    this.counter = counter;
  }

  startCartItemsListener() {
    const itemsHTML: Element | null = document.querySelector('.items-list');
    itemsHTML?.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement) {
        const target: HTMLElement = event.target;
        const bike: Element | null = target.closest('.item');
        if (bike) {
          const bikeId: string | null = bike.getAttribute('data-id');
          if (bikeId) {
            const index: number = this.products.indexOf(bikeId);
            if (index > -1) {
              this.products.splice(index, 1);
              bike.classList.remove('in-cart');
              this.counter.innerText = this.products.length + '';
            } else {
              if (this.products.length >= 20) {
                alert('Извините, все слоты заполнены');
              } else {
                this.products.push(bikeId);
                bike.classList.add('in-cart');
                this.counter.innerText = this.products.length + '';
              }
            }
            localStorage.setItem('cartVitsk', JSON.stringify(this.products));
          }
        }
      }
    });
  }
}
