import Api from '../api/Api';
import render from '../view/RenderHTML';
import { models, names } from '../data/carsNames';

export default (api: Api) => {
  const generate = document.querySelector('.set-car__generate');
  generate?.addEventListener('click', async () => {
    const getRandomName = () => {
      const model = models[Math.floor(Math.random() * models.length)];
      const name = names[Math.floor(Math.random() * models.length)];
      return `${model} ${name}`;
    };

    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i += 1) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const generateRandomCars = () => {
      const arrRandomCars = new Array(100);
      return arrRandomCars.fill({}).map(() => ({ name: getRandomName(), color: getRandomColor() }));
    };
    await Promise.all(generateRandomCars().map(async (car) => api.createCar(car)));
    await api.updateData(api.data.carsPage, api.data.winnersPage);
    render.rerender(api.data);
  });
};
