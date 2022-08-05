import { ICar } from './ICar';

export interface IData {
  carsPage: number;
  cars: ICar[];
  totalCars: number;
  winnersPage: number;
  winners: {
    car: ICar;
    id: number;
    time: number;
    wins: number;
  }[];
  totalWinners: number;
  animation: object;
  view: string;
  sortBy: 'id' | 'wins' | 'time' | null;
  sortOrder: 'ASC' | 'DESC' | null;
}
