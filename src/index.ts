// /* eslint-disable @typescript-eslint/no-unused-vars */
import './global.css';
import render from './ts/view/RenderHTML';
import Api from './ts/api/Api';
import menuListener from './ts/listeners/menu';
import createNewCar from './ts/listeners/createNewCar';
import updateCurrCar from './ts/listeners/updateCurrCar';
import addRandomCars from './ts/listeners/generateCars';
import pagination from './ts/listeners/pagination';

const URL = 'http://127.0.0.1:3000';
const start = async () => {
  const api: Api = new Api(URL);
  await api.initData();
  render.render(api.data);
  menuListener();
  createNewCar(api);
  updateCurrCar(api);
  addRandomCars(api);
  pagination(api);
  // const car = await api.getCar('4');
  // await api.createCar({ name: 'Lambo', color: 'red' });
  // await api.deleteCar('5');
  // await api.updateCar('5', { name: 'XyLambo', color: 'green' });
  // const startEngine = await api.startEngine('1');
  // const status = await api.driveStatus('1');
  // console.log(status);
  // const cars = await api.getCars(2);
  // console.log(cars);
  // console.log(api.data);
  // await api.updateData(2, 1);
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
  // console.log(api.data);
  // console.log(data);
};
start();
