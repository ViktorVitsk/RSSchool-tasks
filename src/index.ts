import './global.css';
import { AllProducts } from './components/products/AllProducts';
import data from '../src/components/products/data';
import { AppView } from './components/view/AppView';
import brandsDraw from './components/view/brands';
import { Filters } from './components/filters/Filters';
import * as IFilters from './components/interfaces/IFilters';
import * as noUiSlider from 'nouislider';
import { rangeSlider } from './components/filters/RangeSlider';

// Добавление картинок кнопкам с брендами
brandsDraw();

// достает значения фильтров с localStorage
const tempFilters: string | null = localStorage.getItem('filtersVitsk');
const filtersFromLocaleStorage: Filters = JSON.parse(tempFilters as string);

const filters: Filters = new Filters();
const PRODUCTS: AllProducts = new AllProducts(data);

// создает range slider и достает значения years и mounts
const { sliderYear, sliderAmount }: { sliderYear: noUiSlider.target; sliderAmount: noUiSlider.target } =
  rangeSlider(filters);

// достает товары добавленные в корзину с localStorage
const tempCarts: string = localStorage.getItem('cartVitsk') as string;
const cartArr: string[] = JSON.parse(tempCarts);

// счетчик добавленных в корзину товаров
const CART_AMOUNT: HTMLElement = document.querySelector('.header__cart-amount') as HTMLElement;
const CART: string[] = cartArr ? cartArr : [];

// подготавливает массив товаров для рендеринга
const arrProducts: string[] = PRODUCTS.products.map((prod) => prod.render());
if (filtersFromLocaleStorage) {
  filters.setAllFieldFromLocalStorage(filtersFromLocaleStorage);
} else {
  AppView.renderProducts(arrProducts);
}

// считывает и применяет текущие фильтры, если в localStorage были данные
if (tempFilters || tempCarts) {
  filters.renderThroughFiltersValue(CART, CART_AMOUNT, PRODUCTS);
  sliderYear.noUiSlider?.set(filters.getYears());
  sliderAmount.noUiSlider?.set(filters.getAmounts());
}

// слушает input поиска и пропускает через фильтры
const search: Element | null = document.getElementById('search');
if (search instanceof HTMLInputElement) {
  search.focus();
  search.value = filters.search;
  search.oninput = function () {
    filters.setSearch(search.value);
    filters.renderThroughFiltersValue(CART, CART_AMOUNT, PRODUCTS);
  };
}

// слушатель для фильтров
const filtersHTML: Element | null = document.querySelector('.filters');
filtersHTML?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement) {
    const target = event.target;
    if (target.hasAttribute('data-brand')) {
      const currentBrand: IFilters.Brands = target.getAttribute('data-brand') as IFilters.Brands;
      filters.setBrands(currentBrand, target);
    }
    if (target.hasAttribute('data-size')) {
      const currentSize: IFilters.Sizes = target.getAttribute('data-size') as IFilters.Sizes;
      filters.setSizes(currentSize, target);
    }
    if (target.hasAttribute('data-color')) {
      const currentColors: IFilters.Colors = target.getAttribute('data-color') as IFilters.Colors;
      filters.setColors(currentColors, target);
    }
    if (target.hasAttribute('data-electric')) {
      const currentElectrics: IFilters.Electrics = target.getAttribute('data-electric') as IFilters.Electrics;
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
    } else {
      filters.renderThroughFiltersValue(CART, CART_AMOUNT, PRODUCTS);
    }
  }
});

// Слушатель для добавления товаров в корзину
const itemsHTML: Element | null = document.querySelector('.items-list');
itemsHTML?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLElement) {
    const target: HTMLElement = event.target;
    const bike: Element | null = target.closest('.item');
    if (bike) {
      const bikeId: string | null = bike.getAttribute('data-id');
      if (bikeId) {
        const index: number = CART.indexOf(bikeId);
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
