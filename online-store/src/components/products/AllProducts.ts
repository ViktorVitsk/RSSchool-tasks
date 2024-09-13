import IItem from '../interfaces/IItem';
import Item from './Item';

export class AllProducts {
  products: Item[];
  // массив со всеми товарами и их свойствами
  constructor(data: IItem[]) {
    this.products = data.map((it) => new Item(it));
  }
}
