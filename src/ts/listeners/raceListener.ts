import { start, stop, race } from '../race-animation/race';
import Api from '../api/Api';
import render from '../view/RenderHTML';

export default (api: Api) => {
  document.body.addEventListener('click', async (event) => {
    const target = event.target as EventTarget;
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
        if (target instanceof HTMLButtonElement) {
          target.disabled = true;
          const winner = await race(api);
          await api.saveWinner(winner.id, winner.time);
          await api.updateData(api.data.carsPage, api.data.winnersPage);
          const table = document.querySelector('.table__body') as HTMLElement;
          const rendWins = render.renderWinnersCars(api.data.winners, api.data.winnersPage);
          table.innerHTML = rendWins;
          target.disabled = false;
        }
      }
    }
  });
};
