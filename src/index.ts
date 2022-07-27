import './global.css';
import { AllProducts } from './components/products/AllProducts';
import data from '../src/components/products/data';
import { AppView } from './components/view/AppView';
import brandsDraw from './components/view/brands';
import { Filters } from './components/filters/Filters';
import * as noUiSlider from 'nouislider';
import { rangeSlider } from './components/filters/RangeSlider';
import { Cart } from './components/cart/Cart';

// Добавление картинок кнопкам с брендами
brandsDraw();

// достает значения фильтров с localStorage
const tempFilters: string | null = localStorage.getItem('filtersVitsk');
const filtersFromLocaleStorage: Filters = JSON.parse(tempFilters as string);

export const filters: Filters = new Filters();
export const PRODUCTS: AllProducts = new AllProducts(data);

// создает range slider и достает значения years и mounts
const { sliderYear, sliderAmount }: { sliderYear: noUiSlider.target; sliderAmount: noUiSlider.target } =
  rangeSlider(filters);

// достает товары добавленные в корзину с localStorage
const tempCarts: string = localStorage.getItem('cartVitsk') as string;
const cartArr: string[] = JSON.parse(tempCarts);

// счетчик добавленных в корзину товаров и создание класса Cart
const cartCounter: HTMLElement = document.querySelector('.header__cart-amount') as HTMLElement;
const cartProducts: string[] = cartArr ? cartArr : [];
export const cart = new Cart(cartProducts, cartCounter);

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
// Слушатель фильтров
filters.startFiltersItemsListener(PRODUCTS, cart, sliderYear, sliderAmount);
// Слушатель для добавления товаров в корзину
cart.startCartItemsListener();
