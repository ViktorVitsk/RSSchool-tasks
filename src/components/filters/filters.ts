export class Filters {
  private items;
  private filters;

  constructor() {
    this.items = document.querySelectorAll('.item');
    this.filters = document.querySelector('.filters');
  }

  private getCurrentItems() {
    const container = document.querySelector('.items');
    return container?.childNodes;
  }

  value() {
    this.filters?.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement) {
        const target: HTMLElement = event.target;
        // фильтр по бренду
        this.changeNone(target, 'data-brand');
        // фильтр по размеру
        this.changeNone(target, 'data-size');
        // color
        this.changeNone(target, 'data-color');
      }
    });
  }

  private changeNone(target: HTMLElement, filterBy: string) {
    // кнопка соответствует текущему фильтру
    if (target?.hasAttribute(filterBy)) {
      // активировать/деактивировать
      target.classList.toggle('btn_active');
      // коллекция активных кнопок
      const btnActiveList = document.querySelectorAll('.btn_active');
      // состояние текущей кнопки
      const btnOn = target.classList.contains('btn_active');
      // итерация по всем товарам
      this.items.forEach((item) => {
        // если кнопка активирована и товар не соответствует ее фильтру
        if (btnOn && item.getAttribute(filterBy) !== target?.getAttribute(filterBy)) {
          // убрать товар
          item.classList.add('none');
          // если отжали кнопку и текущий товар был скрыт
        } else if (!btnOn && item.classList.contains('none')) {
          // если остались зажаты фильтры
          if (btnActiveList.length > 0) {
            // если этот товар попадал под этот фильтр
            if (item.getAttribute(filterBy) === target?.getAttribute(filterBy)) {
              // перебираем остальные фильтры
              if (this.checkOtherFilters(btnActiveList, item)) {
                item.classList.remove('none');
              }
            }
            // все фильтры сброшены
          } else {
            item.classList.remove('none');
          }
        }
      });
    }
  }

  private checkOtherFilters(btnActiveList: NodeListOf<Element>, item: Element) {
    let result = true;
    btnActiveList.forEach((el) => {
      if (el.getAttribute('data-brand') && el.getAttribute('data-brand') !== item.getAttribute('data-brand')) {
        result = false;
      } else if (el.getAttribute('data-size') && el.getAttribute('data-size') !== item.getAttribute('data-size')) {
        result = false;
      } else if (el.getAttribute('data-color') && el.getAttribute('data-color') !== item.getAttribute('data-color')) {
        console.log(el.getAttribute('data-color'));
        result = false;
      }
    });
    return result;
  }
}
