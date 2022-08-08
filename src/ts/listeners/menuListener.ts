export default (): void => {
  const menu = document.querySelector('.menu');
  menu?.addEventListener('click', (event) => {
    const clickOn = event.target;
    const garageBtn = document.getElementById('garage-button');
    const winnersBtn = document.getElementById('winners-button');
    const garage = document.querySelector('.garage__wrapper');
    const winners = document.querySelector('.winners__wrapper');
    if (clickOn === garageBtn) {
      winners?.classList.add('none');
      garage?.classList.remove('none');
    }
    if (clickOn === winnersBtn) {
      garage?.classList.add('none');
      winners?.classList.remove('none');
    }
  });
};
