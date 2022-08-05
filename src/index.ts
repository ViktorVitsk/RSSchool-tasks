// /* eslint-disable @typescript-eslint/no-unused-vars */
import './global.css';
import render from './ts/view/RenderHTML';
import Api from './ts/api/Api';
import { IData } from './ts/interfaces/IData';

const URL = 'http://127.0.0.1:3000';
const check = async () => {
  const api: Api = new Api(URL);
  const data: IData = await api.getData(1, 1);
  render.render(data.cars, data.totalCars, data.carsPage);
  // const car = await api.getCar('4');
  // await api.createCar({ name: 'Lambo', color: 'red' });
  // await api.deleteCar('5');
  // await api.updateCar('5', { name: 'XyLambo', color: 'green' });
  // const startEngine = await api.startEngine('1');
  // const status = await api.driveStatus('1');
  // console.log(status);
  const cars = await api.getCars(2);
  console.log(cars);
  // console.log(startEngine);
  // const stopEngine = await api.stopEngine('1');
  // await api.createWinner({
  //   id: 4,
  //   wins: 3,
  //   time: 4.21,
  // });
  // await api.updateWinner('4', {
  //   time: 1,
  //   wins: 6,
  // });
  // await api.deleteWinner('2');
  // const winners = await api.getWinners();
  // console.log('winners===', winners);
  // const winner = await api.getWinner('4');
  // console.log(winner);
  console.log(data);
};
check();
