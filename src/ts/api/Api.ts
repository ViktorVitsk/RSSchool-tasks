import { ICar } from '../interfaces/ICar';
import { IData } from '../interfaces/IData';

export default class Api {
  private url: string;

  private garage: string;

  private engine: string;

  private winners: string;

  data!: IData;

  constructor(url: string) {
    this.url = url;
    this.garage = `${url}/garage`;
    this.engine = `${url}/engine`;
    this.winners = `${url}/winners`;
  }

  async initData() {
    this.data = await this.getData(1, 1);
  }

  async updateData(carsPage: number, winnersPage: number) {
    this.data = await this.getData(carsPage, winnersPage);
  }

  async getData(carsPage: number, winnersPage: number): Promise<IData> {
    const { cars, totalCars } = await this.getCars(carsPage);
    const { winners, totalWinners } = await this.getWinners(winnersPage);
    return {
      carsPage,
      cars,
      totalCars,
      winnersPage,
      winners,
      totalWinners,
      animation: {},
      view: 'garage',
      sortBy: null,
      sortOrder: null,
    };
  }

  async getCars(page: number) {
    const response = await fetch(`${this.garage}?_page=${page}&_limit=7`);
    const cars: [] = await response.json();
    const totalCars: number | null = Number(response.headers.get('X-Total-Count'));
    return {
      cars,
      totalCars,
    };
  }

  async getCar(id: number): Promise<ICar> {
    return (await fetch(`${this.garage}/${id}`)).json();
  }

  async createCar(newCar: object) {
    return (
      await fetch(this.garage, {
        method: 'POST',
        body: JSON.stringify(newCar),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async deleteCar(id: number) {
    return (await fetch(`${this.garage}/${id}`, { method: 'DELETE' })).json();
  }

  async updateCar(id: number, changeCar: object) {
    return (
      await fetch(`${this.garage}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(changeCar),
        headers: { 'Content-Type': 'application/json' },
      })
    ).json();
  }

  async startEngine(id: number) {
    return (await fetch(`${this.engine}?id=${id}&status=started`, { method: 'PATCH' })).json();
  }

  async stopEngine(id: number) {
    return (await fetch(`${this.engine}?id=${id}&status=stopped`, { method: 'PATCH' })).json();
  }

  async driveStatus(id: number) {
    const drive = await fetch(`${this.engine}?id=${id}&status=drive`, { method: 'PATCH' }).catch();
    return drive.status === 200 ? { success: true } : { success: false };
  }

  async getWinners(page = 1, sort?: string, order?: 'ASC' | 'DESC' | null) {
    const restParams = arguments.length === 3 ? `&_sort=${sort}&_order=${order}` : '';
    const response = await fetch(`${this.winners}?_page=${page}&_limit=10${restParams}`);
    const cars = await response.json();
    return {
      winners: await Promise.all(
        cars.map(async (winner: ICar) => {
          const current = { ...winner, car: await this.getCar(winner.id) };
          return current;
        }),
      ),
      totalWinners: Number(response.headers.get('X-Total-Count')),
    };
  }

  async getWinner(id: number) {
    return (await fetch(`${this.winners}/${id}`)).json();
  }

  async createWinner(newWinner: object) {
    return (
      await fetch(this.winners, {
        method: 'POST',
        body: JSON.stringify(newWinner),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    ).json();
  }

  async deleteWinner(id: number) {
    return (await fetch(`${this.winners}/${id}`, { method: 'DELETE' })).json();
  }

  async updateWinner(id: number, changeWinner: object) {
    return (
      await fetch(`${this.winners}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(changeWinner),
        headers: { 'Content-Type': 'application/json' },
      })
    ).json();
  }

  async setSortOrder(sortBy: 'wins' | 'time') {
    this.data.sortOrder = this.data.sortOrder === 'ASC' ? 'DESC' : 'ASC';
    const result = await this.getWinners(this.data.winnersPage, sortBy, this.data.sortOrder);
    this.data.winners = result.winners;
  }
}
