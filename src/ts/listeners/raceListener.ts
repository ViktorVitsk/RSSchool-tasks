import { start, stop, race } from '../race-animation/race';
import Api from '../api/Api';
import render from '../view/RenderHTML';
import btnOff from '../race-animation/buttonsActivity';

export default (api: Api) => {
  document.body.addEventListener('click', async (event) => {
    const target = event.target as EventTarget;
    const displayWinners = document.querySelector('.garage__display-winner') as HTMLElement;
    if (target instanceof HTMLElement) {
      if (target.classList.contains('engine__start')) {
        const id = Number(target.getAttribute('start-engine'));
        await start(id, api);
      }
      if (target.classList.contains('engine__stop')) {
        const id = Number(target.getAttribute('stop-engine'));
        await stop(id, api);
      }
      if (target.classList.contains('race-btn__start')) {
        btnOff(true);
        const winner = await race(api);
        displayWinners.innerHTML = `Congratulations ${winner.name} win!!! (time ${winner.time}s)`;
        await api.saveWinner(Number(winner.id), Number(winner.time));
        await api.updateData(api.data.carsPage, api.data.winnersPage);
        const table = document.querySelector('.table__body') as HTMLElement;
        const rendWins = render.renderWinnersCars(api.data.winners, api.data.winnersPage);
        table.innerHTML = rendWins;
        btnOff(false);
      }
      if (target.classList.contains('race-btn__reset')) {
        displayWinners.innerHTML = '';
        api.data.cars.map(({ id }) => stop(id, api));
      }
    }
  });
};
