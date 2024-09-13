import Api from '../api/Api';
import render from '../view/RenderHTML';

export default (api: Api): void => {
  const pagination = document.querySelector('.paginator');
  pagination?.addEventListener('click', async (event) => {
    const target = event.target as EventTarget;
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const garage = document.querySelector('.garage__wrapper');
    if (!garage?.classList.contains('none')) {
      if (target === next && api.data.carsPage < api.data.totalCars / 7) {
        await api.updateData(api.data.carsPage + 1, api.data.winnersPage);
        render.rerender(api.data);
      } else if (target === prev && api.data.carsPage > 1) {
        await api.updateData(api.data.carsPage - 1, api.data.winnersPage);
        render.rerender(api.data);
      }
    } else if (garage?.classList.contains('none')) {
      if (target === next && api.data.winnersPage < api.data.totalWinners / 10) {
        await api.updateData(api.data.carsPage, api.data.winnersPage + 1);
        render.rerender(api.data);
      } else if (target === prev && api.data.winnersPage > 1) {
        await api.updateData(api.data.carsPage, api.data.winnersPage - 1);
        render.rerender(api.data);
      }
    }
  });
};
