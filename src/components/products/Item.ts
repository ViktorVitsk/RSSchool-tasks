// import data from './data';
import IItem from '../interfaces/IItem';
export default class Item {
  private readonly _id: string;
  private readonly _brand: string;
  private readonly _name: string;
  private readonly _amount: string;
  private readonly _year: string;
  private readonly _color: string;
  private readonly _size: string;
  private readonly _electric: string;

  constructor(item: IItem) {
    this._id = item.id;
    this._brand = item.brand;
    this._name = item.name;
    this._amount = item.amount;
    this._year = item.year;
    this._color = item.color;
    this._size = item.size;
    this._electric = item.electric;
  }

  render() {
    return `
    <div class="item" data-id=${this._id}>
      <div class="item__name">${this._name}</div>
      <img class="item__img" src="assets/images/bikes/${this._id}.jpg" alt=""/>
      <div>Количество: ${this._amount}</div>
      <div>Год выпуска: ${this._year}</div>
      <div>Бренд: ${this._brand}</div>
      <div>Цвет: ${this._color}</div>
      <div>Диаметр колёс: ${this._size}</div>
      <div>Электровелосипед: ${this._electric}</div>
    </div>`;
  }
  public get electric(): string {
    return this._electric;
  }
  public get size(): string {
    return this._size;
  }
  public get color(): string {
    return this._color;
  }
  public get year(): string {
    return this._year;
  }
  public get amount(): string {
    return this._amount;
  }
  public get name(): string {
    return this._name;
  }
  public get brand(): string {
    return this._brand;
  }
  public get id(): number {
    return parseInt(this._id);
  }
  public getValues(): string[] {
    return [this._brand, this._size, this._color, this._electric];
  }
}
