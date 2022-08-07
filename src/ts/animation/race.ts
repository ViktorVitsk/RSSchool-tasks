import Api from '../api/Api';
import Animation from './animation';

export default async (id: number, api: Api) => {
  const btnStart = document.querySelector(`.engine__start[start-engine="${id}"]`) as HTMLButtonElement;
  console.log(btnStart);

  btnStart.disabled = true;
  btnStart.classList.toggle('enabling', true);

  const { velocity, distance } = await api.startEngine(id);
  const speed = Math.round(distance / velocity);

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
  api.data.animation[id] = Animation.animation(car, distanceCarToFlag, speed);
  const { success } = await api.driveStatus(id);
  if (!success) window.cancelAnimationFrame(api.data.animation[id].id);

  return { success, id, speed };
};
