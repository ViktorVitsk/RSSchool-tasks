/* eslint-disable @typescript-eslint/no-unused-vars */
import './global.css';
import render from './ts/view/RenderHTML';
import Api from './ts/api/Api';

const URL = 'http://127.0.0.1:3000';

render.render();
const check = async () => {
  const api = new Api(URL);
  const car = await api.getCar('4');
  // await api.createCar({ name: 'Lambo', color: 'red' });
  // await api.deleteCar('5');
  // await api.updateCar('5', { name: 'XyLambo', color: 'green' });
  const startEngine = await api.startEngine('1');
  const status = await api.driveStatus('1');
  console.log(status);
  const cars = await api.getCars('1');
  console.log(cars);
  console.log(startEngine);
  const stopEngine = await api.stopEngine('1');
  const winners = await api.getWinners();
  console.log('winners===', winners);
  // console.log(stopEngine);
};
check();
