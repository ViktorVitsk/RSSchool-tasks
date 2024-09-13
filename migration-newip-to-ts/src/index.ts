import App from './components/app/app';
import './global.css';

const app = new App();
app.start();

const menuBtn: HTMLElement = <HTMLElement>document.querySelector('.menu-btn');
const menu: HTMLElement = <HTMLElement>document.querySelector('.burger-menu');

window.addEventListener('click', (e: Event) => {
    if (e.target instanceof HTMLElement) {
        if (
            e.target.hasAttribute('data-source-id') ||
            e.target.parentElement?.hasAttribute('data-source-id') ||
            e.target === menuBtn
        ) {
            menuBtn.classList.toggle('inactive');
            menu.classList.toggle('inactive');
            document.querySelector('.news')?.classList.toggle('.hide');
        }
    }
});
