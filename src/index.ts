import App from './components/app/app';
import './global.css';

const app = new App();
app.start();

const menuBtn = document.querySelector('.menu-btn') as HTMLElement;
const menu = document.querySelector('.burger-menu') as HTMLElement;

window.addEventListener('click', (e: Event) => {
    if (
        (e.target as HTMLElement).hasAttribute('data-source-id') ||
        (e.target as HTMLElement).parentElement?.hasAttribute('data-source-id') ||
        (e.target as HTMLElement) === menuBtn
    ) {
        menuBtn.classList.toggle('inactive');
        menu.classList.toggle('inactive');
        document.querySelector('.news')?.classList.toggle('.hide');
    }
});
