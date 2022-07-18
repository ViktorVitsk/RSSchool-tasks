// import data from './data';
import Item from '../interfaces/IItem';
export class Product {
  private static draw(item: Item) {
    return `
    <div class="item" data-id=${item.id} data-name="${item.name}" data-amount="${item.amount}" data-year="${
      item.year
    }" data-brand="${item.brand}" data-color="${item.color}" data-size="${item.size}" data-electric="${item.electric}" >
      <div class="item__name">${item.name}</div>
      <img class="item__img" src="assets/images/bikes/${item.id}.jpg" alt=""/>
      <div class="item__amount">Количество: ${item.amount}</div>
      <div class="item__year">Год выпуска: ${item.year}</div>
      <div class="item__brand">Бренд: ${item.brand}</div>
      <div class="item__color">Цвет: ${item.color}</div>
      <div class="item__size">Диаметр колёс: ${item.size}</div>
      <div class="item__electric">Электровелосипед: ${item.electric ? 'да' : 'нет'}</div>
    </div>`;
  }
  static drawAll(items: Item[]) {
    return items.map((prod) => this.draw(prod));
  }
}
