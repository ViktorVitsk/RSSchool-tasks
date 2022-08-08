import Api from '../api/Api';
import render from '../view/RenderHTML';
import { models, names } from '../data/carsNames';
import { ICar } from '../interfaces/ICar';

export default (api: Api): void => {
  const generate = document.querySelector('.set-car__generate');
  generate?.addEventListener('click', async () => {
    const getRandomName = (): string => {
      const model = models[Math.floor(Math.random() * models.length - 1)];
      const name = names[Math.floor(Math.random() * names.length - 1)];
      return `${model} ${name}`;
    };

    const getRandomColor = (): string => {
      const letters = '0123456789ABCDEF';
      const colorLength = 6;
      let color = '#';
      for (let i = 0; i < colorLength; i += 1) {
        color += letters[Math.floor(Math.random() * letters.length)];
      }
      return color;
    };

    const generateRandomCars = (): Partial<ICar>[] => {
      const totalRandomCars = 100;
      const arrRandomCars = new Array(totalRandomCars);
      return arrRandomCars.fill({}).map(() => ({ name: getRandomName(), color: getRandomColor() }));
    };
    await Promise.all(generateRandomCars().map(async (car) => api.createCar(car)));
    await api.updateData(api.data.carsPage, api.data.winnersPage);
    render.rerender(api.data);
  });
};
