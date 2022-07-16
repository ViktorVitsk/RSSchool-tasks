import data from './data';
export class ProductsList {
  private bikesData = data;
  render() {
    return this.bikesData.map((item) => {
      return `
    <div class="item" data-id=${item.id}>
      <div class="item__name">${item.name}</div>
      <img class="item__img" src="assets/images/bikes/${item.id}.jpg" alt=""/>
      <div class="item__amount">Количество: ${item.amount}</div>
      <div class="item__year">Год выпуска: ${item.year}</div>
      <div class="item__brand">Бренд: ${item.brand}</div>
      <div class="item__color">Цвет: ${item.color}</div>
      <div class="item__size">Диаметр колёс: ${item.size}</div>
      <div class="item__electric">Электровелосипед: ${item.electric ? 'да' : 'нет'}</div>
    </div>`;
    });
  }
}
