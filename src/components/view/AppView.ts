import { Product } from '../products/Product';
import data from '../products/data';
import Item from '../interfaces/IItem';

export class AppView {
  private readonly products: Item[];
  private itemsList = document.querySelector('.items-list');

  constructor() {
    this.products = data;
  }

  renderProducts() {
    const prodArr: string[] = Product.drawAll(this.products);
    prodArr.forEach((prod) => this.itemsList?.insertAdjacentHTML('beforeend', prod));
  }
}
