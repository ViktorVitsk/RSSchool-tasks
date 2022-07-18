import './global.css';
import { AppView } from './components/view/AppView';
import { Filters } from './components/filters/filters';
import { noslider } from './components/filters/noslider';
import 'nouislider/dist/nouislider.css';

const appView = new AppView();
// отображаем список всех товаров в html
appView.renderProducts();

noslider('slider1', [2017, 2022]);
noslider('slider2', [1, 12]);

const brands = document.querySelectorAll('.brand');

brands.forEach((i) => {
  if (i instanceof HTMLElement) {
    i.style.background = `url(../../assets/images/brands/${i.getAttribute('data-brand')}.png) 0 0 / contain no-repeat`;
  }
});

const filters = new Filters();

filters.value();
