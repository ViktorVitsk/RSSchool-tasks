import Api from '../api/Api';
import render from '../view/RenderHTML';

export default (api: Api) => {
  const track = document.querySelector('.garage__race-track');
  let selectId: number | null = null;
  const create = document.getElementById('update') as HTMLElement;
  const inputName = create.querySelector('.set-car__name') as HTMLInputElement;
  const inputColor = create.querySelector('.set-car__color') as HTMLInputElement;
  const btn = create.querySelector('.btn') as HTMLButtonElement;
  function setDisabled(bool: boolean) {
    btn.disabled = bool;
    inputName.disabled = bool;
    inputColor.disabled = bool;
  }
  track?.addEventListener('click', async (event) => {
    const target = event.target as EventTarget;
    if (target instanceof HTMLElement) {
      if (target.classList.contains('road__select-car')) {
        selectId = Number(target.getAttribute('car-select'));
        const { name } = await api.getCar(selectId);
        inputName.value = name;
        setDisabled(false);
      }
    }
  });
  create?.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (selectId) {
      const name = inputName.value;
      const color = inputColor.value;
      await api.updateCar(selectId, { name, color });
      await api.updateData(api.data.carsPage, api.data.winnersPage);
      inputName.value = '';
      render.rerender(api.data);
      selectId = null;
      setDisabled(true);
    }
  });
};
