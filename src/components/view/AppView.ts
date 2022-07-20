export class AppView {
  static itemsList: HTMLElement = document.querySelector('.items-list') as HTMLElement;

  static renderProducts(productsData: string[]) {
    productsData.forEach((prod: string) => this.itemsList?.insertAdjacentHTML('beforeend', prod));
  }
}
