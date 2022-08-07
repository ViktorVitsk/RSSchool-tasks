import Api from '../api/Api';
import render from '../view/RenderHTML';

export default (api: Api) => {
  document.body.addEventListener('click', async (event) => {
    const target = event.target as EventTarget;
    if (target instanceof HTMLElement) {
      if (target.classList.contains('table__wins')) {
        await api.setSortOrder('wins');
      }
      if (target.classList.contains('table__time')) {
        await api.setSortOrder('time');
      }
      const table = document.querySelector('.table__body') as HTMLElement;
      const rendWins = render.renderWinnersCars(api.data.winners, api.data.winnersPage);
      table.innerHTML = rendWins;
    }
  });
};
