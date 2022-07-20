import IItem from '../interfaces/IItem';
import Item from './Item';

export class AllProducts {
  products: Item[];
  constructor(data: IItem[]) {
    this.products = data.map((it) => new Item(it));
  }
}
