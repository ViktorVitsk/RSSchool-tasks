export default (off: boolean) => {
  const select = document.querySelectorAll('.road__select-car');
  const remove = document.querySelectorAll('.road__remove-car');
  const generate = document.querySelector('.set-car__generate') as HTMLButtonElement;
  const pagination = document.querySelectorAll('.paginator__button');
  const create = document.querySelector('.create-btn') as HTMLButtonElement;
  const update = document.querySelector('.update-btn') as HTMLButtonElement;
  const startBtn = document.querySelector('.race-btn__start') as HTMLButtonElement;
  const resetBtn = document.querySelector('.race-btn__reset') as HTMLButtonElement;

  select.forEach((el) => {
    const btn = el as HTMLButtonElement;
    btn.disabled = off;
  });
  remove.forEach((el) => {
    const btn = el as HTMLButtonElement;
    btn.disabled = off;
  });
  pagination.forEach((el) => {
    const btn = el as HTMLButtonElement;
    btn.disabled = off;
  });
  generate.disabled = off;
  create.disabled = off;
  update.disabled = off;
  startBtn.disabled = off;
  resetBtn.disabled = off;
};
