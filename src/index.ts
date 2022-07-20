import { AllProducts } from './components/products/AllProducts';
import data from '../src/components/products/data';
import './global.css';
import { AppView } from './components/view/AppView';
import brandsDraw from './components/view/brands';
import { Filters } from './components/filters/Filters';
import { Brands, Sizes, Colors, Electrics, Range } from './components/interfaces/IFilters';
import * as noUiSlider from 'nouislider';
const wNumb = require('wnumb');

brandsDraw();
// определяем фильтры (потом добавить localStorage)
const filters = new Filters();
// получаем все товары
const PRODUCTS = new AllProducts(data);
noslider('year', [2017, 2022]);
noslider('amount', [1, 12]);

// подготавливаем массив товаров для рендеринга
const arrProducts = PRODUCTS.products.map((prod) => prod.render());

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
  renderThroughFiltersValue(filters.getAllOnFiltersValue(), filters.getYears(), filters.getAmounts());
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
        if (id === 'year') {
          filters.setYears(val);
        }
        if (id === 'amount') {
          filters.setAmounts(val);
        }
      });
    }
  }
}

function renderThroughFiltersValue(arrFiltersValue: string[], year: Range, amount: Range) {
  let currentProducts = PRODUCTS.products;

  // фильтры по значениям
  if (arrFiltersValue.length > 0) {
    currentProducts = currentProducts.filter((prod) => {
      let check = true;
      arrFiltersValue.forEach((val) => {
        if (!prod.getValues().includes(val)) {
          console.log(prod.amount);
          check = false;
        }
      });
      return check;
    });
  }
  currentProducts = currentProducts.filter((prod) => {
    let check = true;

    if (+prod.year < +year[0] || +prod.year > +year[1]) {
      check = false;
    }
    if (+prod.amount < +amount[0] || +prod.amount > +amount[1]) {
      check = false;
    }
    return check;
  });
  // фильтры по диапазону
  // ...
  itemsClear();
  const arrProducts = currentProducts.map((prod) => prod.render());
  AppView.renderProducts(arrProducts);
}
function itemsClear() {
  const itemContainer = document.querySelector('.items-list');
  while (itemContainer?.firstChild) {
    itemContainer.removeChild(itemContainer.firstChild);
  }
}
