import { ICar } from '../interfaces/ICar';

export default class Api {
  private url: string;

  private garage: string;

  private engine: string;

  private winners: string;

  constructor(url: string) {
    this.url = url;
    this.garage = `${url}/garage`;
    this.engine = `${url}/engine`;
    this.winners = `${url}/winners`;
  }

  async getCars(page: string): Promise<object> {
    const response = await fetch(`${this.garage}?_${page}&_limit=7`);
    const cars: [] = await response.json();
    const totalCars: string | null = response.headers.get('X-Total-Count');
    return {
      cars,
      totalCars,
    };
  }

  async getCar(id: string): Promise<ICar> {
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

  async deleteCar(id: string) {
    return (await fetch(`${this.garage}/${id}`, { method: 'DELETE' })).json();
  }

  async updateCar(id: string, changeCar: object) {
    return (
      await fetch(`${this.garage}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(changeCar),
        headers: { 'Content-Type': 'application/json' },
      })
    ).json();
  }

  async startEngine(id: string) {
    return (await fetch(`${this.engine}?id=${id}&status=started`, { method: 'PATCH' })).json();
  }

  async stopEngine(id: string) {
    return (await fetch(`${this.engine}?id=${id}&status=stopped`, { method: 'PATCH' })).json();
  }

  async driveStatus(id: string) {
    const drive = await fetch(`${this.engine}?id=${id}&status=drive`, { method: 'PATCH' }).catch();
    return drive.status === 200 ? { success: true } : { success: false };
  }

  async getWinners(page = '1', sort?: string, order?: string) {
    const restParams = arguments.length === 3 ? `&_sort=${sort}&{_order}=${order}` : '';
    const response = await fetch(`${this.winners}?_page=${page}&_limit=10${restParams}`);
    const cars = await response.json();
    return {
      cars: await Promise.all(
        cars.map(async (winner: ICar) => {
          const current = { ...winner, car: await this.getCar(winner.id) };
          return current;
        }),
      ),
      totalCars: response.headers.get('X-Total-Count'),
    };
  }

  async getWinner(id: string) {
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

  async deleteWinner(id: string) {
    return (await fetch(`${this.winners}/${id}`, { method: 'DELETE' })).json();
  }

  async updateWinner(id: string, changeWinner: object) {
    return (
      await fetch(`${this.winners}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(changeWinner),
        headers: { 'Content-Type': 'application/json' },
      })
    ).json();
  }
}
