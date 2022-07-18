import './global.css';
import { AppView } from './components/view/AppView';
// import { Filters } from './components/filters/filters';

const appView = new AppView();
// отображаем список всех товаров в html
appView.renderProducts();

// const filters = new Filters();
