import Api from '../api/Api';
import render from '../view/RenderHTML';

export default async (api: Api) => {
  // const table = document.querySelector('.winners__table');
  document.querySelector('.winners__table')?.addEventListener('click', async (event) => {
    const target = event.target as EventTarget;
    console.log(target);

    if (target === document.querySelector('.table__wins')) {
      await api.setSortOrder('wins');
      // render.rerender(api.data);
      console.log('ddd');
    }
    if (target === document.querySelector('.table__time')) {
      await api.setSortOrder('time');
    }
    const w = document.getElementById('table-wins') as HTMLTableElement;
    w?.innerHTML = render.renderWinnersCars(api.data.winners, api.data.totalWinners);
  });
};
