import Api from '../api/Api';
// import { ICarsRaceState } from '../interfaces/ICarsRaceState';
import Animation from './animation';

const start = async (id: number, api: Api) => {
  const btnStart = document.querySelector(`.engine__start[start-engine="${id}"]`) as HTMLButtonElement;

  btnStart.disabled = true;
  btnStart.classList.toggle('enabling', true);

  const { velocity, distance } = await api.startEngine(id);
  const time = Math.round(distance / velocity);

  btnStart.classList.toggle('enabling', false);
  const btnStop = document.querySelector(`.engine__stop[stop-engine="${id}"]`) as HTMLButtonElement;
  btnStop.disabled = false;
  const widthCar = Number(document.querySelector('.road__car')?.getBoundingClientRect().width);
  const widthFlag = 25;
  const afterFinishDistance = widthCar / 2 + widthFlag / 2;
  const car = document.getElementById(`car-${id}`) as HTMLElement;
  const flag = document.getElementById(`flag-${id}`) as HTMLElement;
  const distanceCarToFlag = Math.floor(Animation.getDistance(car, flag)) + afterFinishDistance;

  // eslint-disable-next-line no-param-reassign
  api.data.animation[id] = Animation.animation(car, distanceCarToFlag, time);
  const { success } = await api.driveStatus(id);
  if (!success) window.cancelAnimationFrame(api.data.animation[id].id);

  return { success, id, time };
};

const stop = async (id: number, api: Api) => {
  const btnStop = document.querySelector(`.engine__stop[stop-engine="${id}"]`) as HTMLButtonElement;

  btnStop.disabled = true;
  btnStop.classList.toggle('enabling', true);

  await api.stopEngine(id);
  btnStop.classList.toggle('enabling', false);
  const btnStart = document.querySelector(`.engine__start[start-engine="${id}"]`) as HTMLButtonElement;
  btnStart.disabled = false;
  const car = document.getElementById(`car-${id}`) as HTMLElement;
  car.style.transform = 'translateX(0)';
  if (api.data.animation[id]) window.cancelAnimationFrame(api.data.animation[id].id);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getWinnersResults = async (winnersParams: string | any[], idArr: number[], api: Api) => {
  const { success, id, time } = await Promise.race(winnersParams);

  if (!success) {
    const falseIndex = idArr.findIndex((i) => i === id);
    const restWinnersParams = [
      ...winnersParams.slice(0, falseIndex),
      ...winnersParams.slice(falseIndex + 1, winnersParams.length),
    ];
    const restIdArr = [...idArr.slice(0, falseIndex), ...idArr.slice(falseIndex + 1, idArr.length)];
    return getWinnersResults(restWinnersParams, restIdArr, api);
  }
  return { ...api.data.cars.find((car) => car.id === id), time: (time / 1000).toFixed(2) };
};

const race = async (api: Api) => {
  const startAll = api.data.cars.map(({ id }) => start(id, api));

  const win = await getWinnersResults(
    startAll,
    api.data.cars.map((car) => car.id),
    api,
  );
  return win;
};
export { stop, start, race };
