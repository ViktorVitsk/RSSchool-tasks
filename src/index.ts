import './global.css';
import { AllProducts } from './components/products/AllProducts';
import data from '../src/components/products/data';
import { AppView } from './components/view/AppView';
import brandsDraw from './components/view/brands';
import { Filters } from './components/filters/Filters';
import * as IFilters from './components/interfaces/IFilters';
import * as noUiSlider from 'nouislider';
import { rangeSlider } from './components/filters/RangeSlider';
import { Cart } from './components/cart/Cart';

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
const cartCounter: HTMLElement = document.querySelector('.header__cart-amount') as HTMLElement;
const cartProducts: string[] = cartArr ? cartArr : [];
const cart = new Cart(cartProducts, cartCounter);

// подготавливает массив товаров для рендеринга
const arrProducts: string[] = PRODUCTS.products.map((prod) => prod.render());
if (filtersFromLocaleStorage) {
  filters.setAllFieldFromLocalStorage(filtersFromLocaleStorage);
} else {
  AppView.renderProducts(arrProducts);
}

// считывает и применяет текущие фильтры, если в localStorage были данные
if (tempFilters || tempCarts) {
  filters.renderThroughFiltersValue(cart.products, cart.counter, PRODUCTS);
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
    filters.renderThroughFiltersValue(cart.products, cart.counter, PRODUCTS);
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
      filters.renderThroughFiltersValue(cart.products, cart.counter, PRODUCTS);
    }
  }
});

// Слушатель для добавления товаров в корзину
cart.startCartItemsListener();
