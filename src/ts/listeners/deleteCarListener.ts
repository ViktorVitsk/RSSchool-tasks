import Api from '../api/Api';
import render from '../view/RenderHTML';

export default (api: Api) => {
  const track = document.querySelector('.garage__race-track');
  track?.addEventListener('click', async (event) => {
    const target = event.target as EventTarget;
    if (target instanceof HTMLElement) {
      if (target.classList.contains('road__remove-car')) {
        const create = document.getElementById('update') as HTMLElement;

        const removeId = Number(target.getAttribute('car-remove'));
        await api.deleteCar(removeId);
        const inputName = create.querySelector('.set-car__name') as HTMLInputElement;
        const inputColor = create.querySelector('.set-car__color') as HTMLInputElement;
        const btn = create.querySelector('.btn') as HTMLButtonElement;
        btn.disabled = true;
        inputName.disabled = true;
        inputColor.disabled = true;
        await api.deleteWinner(removeId);
        await api.updateData(api.data.carsPage, api.data.winnersPage);
        render.rerender(api.data);
      }
    }
  });
};
