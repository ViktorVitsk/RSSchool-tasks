import { ProductsList } from '../products/ProductsList';

export class AppView {
  private products = new ProductsList();
  private itemsList = document.querySelector('.items-list');

  renderProducts() {
    const prodArr: string[] = this.products.render();
    prodArr.forEach((prod) => this.itemsList?.insertAdjacentHTML('beforeend', prod));
  }
}
