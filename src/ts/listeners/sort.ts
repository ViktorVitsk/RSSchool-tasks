import Api from '../api/Api';
import render from '../view/RenderHTML';

export default async (api: Api) => {
  // const table = document.querySelector('.winners__table');
  document.querySelector('.winners__table')?.addEventListener('click', async (event) => {
    const target = event.target as EventTarget;

    if (target === document.querySelector('.table__wins')) {
      await api.setSortOrder('wins');
    }
    if (target === document.querySelector('.table__time')) {
      await api.setSortOrder('time');
    }
    const table = document.querySelector('.table__body') as HTMLElement;
    const rendWins = render.renderWinnersCars(api.data.winners, api.data.winnersPage);
    table.innerHTML = rendWins;
  });
};
