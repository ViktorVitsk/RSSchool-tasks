import { AllProducts } from './components/products/AllProducts';
import data from '../src/components/products/data';
import './global.css';
import { AppView } from './components/view/AppView';
import brandsDraw from './components/view/brands';
import { Filters } from './components/filters/Filters';
import { Brands, Sizes, Colors, Electrics } from './components/interfaces/IFilters';
import * as noUiSlider from 'nouislider';
const wNumb = require('wnumb');

brandsDraw();
// определяем фильтры (потом добавить localStorage)
const filters = new Filters();
noslider('slider1', [2017, 2022]);
noslider('slider2', [1, 12]);

// получаем все товары
const products = new AllProducts(data);
// подготавливаем массив товаров для рендеринга
const arrProducts = products.products.map((prod) => prod.render());

AppView.renderProducts(arrProducts);
const filtersHTML = document.querySelector('.filters');

const search = document.getElementById('search');

if (search instanceof HTMLInputElement) {
  search.oninput = function () {
    filters.setSearch(search.value);
  };
}

filtersHTML?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement) {
    const target = event.target;
    if (target.hasAttribute('data-brand')) {
      const currentBrand: Brands = target.getAttribute('data-brand') as Brands;
      filters.setBrands(currentBrand);
    }
    if (target.hasAttribute('data-size')) {
      const currentSize: Sizes = target.getAttribute('data-size') as Sizes;
      filters.setSizes(currentSize);
    }
    if (target.hasAttribute('data-color')) {
      const currentColors: Colors = target.getAttribute('data-color') as Colors;
      filters.setColors(currentColors);
    }
    if (target.hasAttribute('data-electric')) {
      const currentElectrics: Electrics = target.getAttribute('data-electric') as Electrics;
      filters.setElectrics(currentElectrics);
    }
  }
});

function noslider(id: string, range: [number, number]) {
  const slider: noUiSlider.target = document.getElementById(id) as noUiSlider.target;

  if (slider) {
    noUiSlider.create(slider, {
      start: [range[0], range[1]],
      connect: true,
      range: {
        min: range[0],
        max: range[1],
      },
      step: 1,
      behaviour: 'tap-drag',
      tooltips: true,
      format: wNumb({
        decimals: 0,
      }),
    });
    if (slider.noUiSlider) {
      slider.noUiSlider.on('update', (val) => {
        filters.setAmounts(val);
      });
    }
  }
}
