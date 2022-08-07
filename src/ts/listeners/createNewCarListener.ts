import Api from '../api/Api';
import render from '../view/RenderHTML';

export default (api: Api) => {
  const create = document.getElementById('create');
  create?.addEventListener('submit', async (event) => {
    event.preventDefault();
    const inputName = create.querySelector('.set-car__name');
    const inputColor = create.querySelector('.set-car__color');

    if (inputName instanceof HTMLInputElement && inputColor instanceof HTMLInputElement) {
      const name = inputName.value;
      const color = inputColor.value;
      await api.createCar({ name, color });
      await api.updateData(api.data.carsPage, api.data.winnersPage);
      inputName.value = '';
      render.rerender(api.data);
    }
  });
};
