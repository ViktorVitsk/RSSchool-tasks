import './global.css';
import render from './ts/view/RenderHTML';
import Api from './ts/api/Api';
import menuListener from './ts/listeners/menuListener';
import createNewCar from './ts/listeners/createNewCarListener';
import addRandomCars from './ts/listeners/generateCarsListener';
import pagination from './ts/listeners/paginationListener';
import sort from './ts/listeners/sortListener';
import startEngine from './ts/listeners/raceListener';
import updateCarListener from './ts/listeners/updateCarListener';
import deleteCarListener from './ts/listeners/deleteCarListener';

const URL = 'http://127.0.0.1:3000';
const start = async () => {
  const api: Api = new Api(URL);
  await api.initData();
  render.render(api.data);
  menuListener();
  createNewCar(api);
  updateCarListener(api);
  deleteCarListener(api);
  addRandomCars(api);
  pagination(api);
  startEngine(api);
  sort(api);
};
start();
