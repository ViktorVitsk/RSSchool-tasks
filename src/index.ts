import './global.css';
import { AppView } from './components/view/AppView';

const appView = new AppView();
// отображаем список всех товаров в html
appView.renderProducts();
