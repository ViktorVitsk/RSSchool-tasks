import { AllProducts } from './components/products/AllProducts';
import data from '../src/components/products/data';
import './global.css';
import { AppView } from './components/view/AppView';
import brandsDraw from './components/view/brands';
import { Filters } from './components/filters/Filters';
import { Brands, Sizes, Colors, Electrics } from './components/interfaces/IFilters';
import * as noUiSlider from 'nouislider';
import Item from './components/products/Item';
import wNumb from 'wnumb';
brandsDraw();
// определяем фильтры (потом добавить localStorage)
const temp = localStorage.getItem('filtersVitsk');
const inst = JSON.parse(temp as string);
const filters = new Filters();
const PRODUCTS = new AllProducts(data);

const sliderYear: noUiSlider.target = document.getElementById('year') as noUiSlider.target;

if (sliderYear) {
  noUiSlider.create(sliderYear, {
    start: [2017, 2022],
    connect: true,
    range: {
      min: 2017,
      max: 2022,
    },
    step: 1,
    behaviour: 'tap-drag',
    tooltips: true,
    format: wNumb({
      decimals: 0,
    }),
  });
  sliderYear.noUiSlider?.on('update', (val) => {
    filters.setYears(val);
  });
}

const sliderAmount: noUiSlider.target = document.getElementById('amount') as noUiSlider.target;

if (sliderAmount) {
  noUiSlider.create(sliderAmount, {
    start: [1, 12],
    connect: true,
    range: {
      min: 1,
      max: 12,
    },
    step: 1,
    behaviour: 'tap-drag',
    tooltips: true,
    format: wNumb({
      decimals: 0,
    }),
  });

  sliderAmount.noUiSlider?.on('update', (val) => {
    filters.setAmounts(val);
  });
}

const temp2 = localStorage.getItem('cartVitsk') as string;
const cartArr = JSON.parse(temp2);

const CART_AMOUNT = document.querySelector('.header__cart-amount') as HTMLElement;
const CART: string[] = cartArr ? cartArr : [];
// renderCART();
// подготавливаем массив товаров для рендеринга
const arrProducts = PRODUCTS.products.map((prod) => prod.render());
if (inst) {
  filters.setAllField(inst);
} else {
  AppView.renderProducts(arrProducts);
}
renderThroughFiltersValue();
sliderYear.noUiSlider?.set(filters.getYears());
sliderAmount.noUiSlider?.set(filters.getAmounts());
const filtersHTML = document.querySelector('.filters');
const search = document.getElementById('search');

if (search instanceof HTMLInputElement) {
  search.focus();
  search.value = filters.search;
  search.oninput = function () {
    filters.setSearch(search.value);
    renderThroughFiltersValue();
  };
}

filtersHTML?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement) {
    const target = event.target;
    // target.classList.toggle('btn_active');
    if (target.hasAttribute('data-brand')) {
      const currentBrand: Brands = target.getAttribute('data-brand') as Brands;
      filters.setBrands(currentBrand, target);
    }
    if (target.hasAttribute('data-size')) {
      const currentSize: Sizes = target.getAttribute('data-size') as Sizes;
      filters.setSizes(currentSize, target);
    }
    if (target.hasAttribute('data-color')) {
      const currentColors: Colors = target.getAttribute('data-color') as Colors;
      filters.setColors(currentColors, target);
    }
    if (target.hasAttribute('data-electric')) {
      const currentElectrics: Electrics = target.getAttribute('data-electric') as Electrics;
      filters.setElectrics(currentElectrics, target);
    }
    if (target.hasAttribute('data-sort')) {
      const currentSort: string = target.getAttribute('data-sort') as string;
      filters.setSort(currentSort);
    }
    if (target.hasAttribute('reset-filters')) {
      filters.reset();
      sliderYear.noUiSlider?.reset();
      sliderAmount.noUiSlider?.reset();
    }
    if (target.hasAttribute('reset-settings')) {
      localStorage.removeItem('filtersVitsk');
      localStorage.removeItem('cartVitsk');
      // CART.length = 0;
    } else {
      renderThroughFiltersValue();
    }
  }
});

const itemsHTML = document.querySelector('.items-list');
itemsHTML?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement) {
    const target = event.target;
    const bike = target.closest('.item');
    if (bike) {
      const bikeId: string | null = bike.getAttribute('data-id');
      if (bikeId) {
        const index = CART.indexOf(bikeId);
        if (index > -1) {
          CART.splice(index, 1);
          bike.classList.remove('in-cart');
          CART_AMOUNT.innerText = CART.length + '';
        } else {
          if (CART.length >= 20) {
            alert('Извините, все слоты заполнены');
          } else {
            CART.push(bikeId);
            bike.classList.add('in-cart');
            CART_AMOUNT.innerText = CART.length + '';
          }
        }
        localStorage.setItem('cartVitsk', JSON.stringify(CART));
      }
    }
  }
});

function noElementAlert() {
  const itemsList = document.querySelector('.items-list') as HTMLElement;
  if (!itemsList.hasChildNodes()) {
    console.log('nema');

    const element = document.createElement('div');
    element.classList.add('no-element');
    element.innerText = 'Извините, совпадений не обнаружено';
    itemsList.appendChild(element);
  }
}

function renderThroughFiltersValue() {
  const arrFiltersBrands = filters.getAllBrands();
  const arrFiltersSizes = filters.getAllSizes();
  const arrFiltersColors = filters.getAllColors();
  const arrFiltersElectrics = filters.getAllElectrics();
  const year = filters.getYears();
  const amount = filters.getAmounts();
  const search = filters.getSearch();
  let currentProducts = PRODUCTS.products;

  // фильтры по значениям
  if (arrFiltersBrands.length > 0) {
    currentProducts = currentProducts.filter((prod) => {
      let check = false;
      arrFiltersBrands.forEach((val) => {
        if (prod.getValues().includes(val)) {
          check = true;
        }
      });
      return check;
    });
  }
  if (arrFiltersSizes.length > 0) {
    currentProducts = currentProducts.filter((prod) => {
      let check = false;
      arrFiltersSizes.forEach((val) => {
        if (prod.getValues().includes(val)) {
          check = true;
        }
      });
      return check;
    });
  }
  if (arrFiltersColors.length > 0) {
    currentProducts = currentProducts.filter((prod) => {
      let check = false;
      arrFiltersColors.forEach((val) => {
        if (prod.getValues().includes(val)) {
          check = true;
        }
      });
      return check;
    });
  }
  if (arrFiltersElectrics.length > 0) {
    currentProducts = currentProducts.filter((prod) => {
      let check = false;
      arrFiltersElectrics.forEach((val) => {
        if (prod.getValues().includes(val)) {
          check = true;
        }
      });
      return check;
    });
  }
  // фильтры по диапазону
  // ...
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
  // фильтры по поиску
  if (search) {
    currentProducts = currentProducts.filter((prod) => {
      const prodName = prod.name.toLowerCase();
      const searchStr = search.toLowerCase();
      let check = true;
      if (!prodName.includes(searchStr)) {
        check = false;
      }
      return check;
    });
  }
  // Порядок
  currentProducts = sort(currentProducts, filters.getSort());
  itemsClear();
  const arrProducts = currentProducts.map((prod) => prod.render());
  AppView.renderProducts(arrProducts);
  renderCART();
  localStorage.setItem('filtersVitsk', JSON.stringify(filters));
  localStorage.setItem('cartVitsk', JSON.stringify(CART));
  noElementAlert();
}
function itemsClear() {
  const itemContainer = document.querySelector('.items-list');
  while (itemContainer?.firstChild) {
    itemContainer.removeChild(itemContainer.firstChild);
  }
}
function sort(arr: Item[], by: string) {
  switch (by) {
    case 'nameUp':
      return arr.sort((a, b) => (a.name > b.name ? 1 : -1));
    case 'nameDown':
      return arr.sort((a, b) => (a.name < b.name ? 1 : -1));
    case 'yearUp':
      return arr.sort((a, b) => (a.year > b.year ? 1 : -1));
    case 'yearDown':
      return arr.sort((a, b) => (a.year < b.year ? 1 : -1));
    default:
      return arr;
  }
}
function renderCART() {
  const bikes = document.querySelectorAll('.item');
  if (CART.length > 0 && CART.length < 21) {
    bikes.forEach((item) => {
      const bikeId = item.getAttribute('data-id');
      if (bikeId) {
        if (CART.includes(bikeId)) {
          item.classList.add('in-cart');
        } else {
          item.classList.remove('in-cart');
        }
      }
    });
  } else if (CART.length > 20) {
    alert('Извините, все слоты заполнены');
  }

  CART_AMOUNT.innerText = CART.length + '';
}
