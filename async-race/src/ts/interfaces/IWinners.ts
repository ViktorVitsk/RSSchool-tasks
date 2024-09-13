import { ICar } from './ICar';
import { IWinner } from './IWinner';

export interface IWinners extends IWinner {
  car: ICar;
}
