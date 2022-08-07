import start from '../animation/race';
import Api from '../api/Api';

export default (api: Api) => {
  document.body.addEventListener('click', async (event) => {
    const target = event.target as EventTarget;
    if (target instanceof HTMLElement) {
      console.log('da');

      if (target.classList.contains('engine__start')) {
        const id = Number(target.getAttribute('start-engine'));
        await start(id, api);
      }
    }
  });
};
