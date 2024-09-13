import { Cart } from '../cart/Cart';
import * as IFilters from '../interfaces/IFilters';
import { AllProducts } from '../products/AllProducts';
import Item from '../products/Item';
import { AppView } from '../view/AppView';
import * as noUiSlider from 'nouislider';

export class Filters {
  brands: IFilters.IValues = {
    Bergamont: false,
    Bianchi: false,
    Bottecchia: false,
    Giant: false,
    Haibike: false,
    Kona: false,
    Kreidler: false,
    Orbea: false,
    'Santa-Cruz': false,
    Scott: false,
  };

  sizes: IFilters.IValues = {
    27: false,
    28: false,
    29: false,
  };

  colors: IFilters.IValues = {
    зеленый: false,
    белый: false,
    серый: false,
    синий: false,
    красный: false,
    черный: false,
    золотистый: false,
  };

  electrics: IFilters.IValues = {
    да: false,
    нет: false,
  };

  years: (string | number)[] = ['2017', '2022'];

  amounts: (string | number)[] = ['1', '12'];

  search = '';

  sort = '';

  setBrands(value: IFilters.Brands, target: HTMLElement): void {
    this.brands[value] = this.brands[value] ? false : true;
    this.brands[value] ? target.classList.add('btn_active') : target.classList.remove('btn_active');
  }
  setSizes(value: IFilters.Sizes, target: HTMLElement): void {
    this.sizes[value] = this.sizes[value] ? false : true;
    this.sizes[value] ? target.classList.add('btn_active') : target.classList.remove('btn_active');
  }
  setColors(value: IFilters.Colors, target: HTMLElement): void {
    this.colors[value] = this.colors[value] ? false : true;
    this.colors[value] ? target.classList.add('btn_active') : target.classList.remove('btn_active');
  }
  setElectrics(value: IFilters.Electrics, target: HTMLElement): void {
    this.electrics[value] = this.electrics[value] ? false : true;
    this.electrics[value] ? target.classList.add('btn_active') : target.classList.remove('btn_active');
  }
  setAmounts(value: IFilters.Range): void {
    this.amounts = value;
  }
  setYears(value: IFilters.Range): void {
    this.years = value;
  }
  setSearch(value: string): void {
    this.search = value;
  }
  setSort(value: string): void {
    this.sort = value;
  }
  getAllBrands(): string[] {
    return this.getOnFiltersValue(this.brands);
  }
  getAllSizes(): string[] {
    return this.getOnFiltersValue(this.sizes);
  }
  getAllColors(): string[] {
    return this.getOnFiltersValue(this.colors);
  }
  getAllElectrics(): string[] {
    return this.getOnFiltersValue(this.electrics);
  }
  private getOnFiltersValue(filtersObj: IFilters.IValues): string[] {
    const brandsKeys: string[] = Object.keys(filtersObj);
    return brandsKeys.filter((key) => filtersObj[key]);
  }
  getAmounts(): IFilters.Range {
    return this.amounts;
  }
  getYears(): IFilters.Range {
    return this.years;
  }
  getSearch(): string {
    return this.search;
  }
  getSort(): string {
    return this.sort;
  }

  setAllFieldFromLocalStorage(storage: Filters): void {
    this.brands['Bergamont'] = storage.brands['Bergamont'];
    this.brands['Bianchi'] = storage.brands['Bianchi'];
    this.brands['Bottecchia'] = storage.brands['Bottecchia'];
    this.brands['Giant'] = storage.brands['Giant'];
    this.brands['Haibike'] = storage.brands['Haibike'];
    this.brands['Kona'] = storage.brands['Kona'];
    this.brands['Kreidler'] = storage.brands['Kreidler'];
    this.brands['Orbea'] = storage.brands['Orbea'];
    this.brands['Santa-Cruz'] = storage.brands['Santa-Cruz'];
    this.brands['Scott'] = storage.brands['Scott'];
    this.sizes['27'] = storage.sizes['27'];
    this.sizes['28'] = storage.sizes['28'];
    this.sizes['29'] = storage.sizes['29'];
    this.colors['зеленый'] = storage.colors['зеленый'];
    this.colors['белый'] = storage.colors['белый'];
    this.colors['серый'] = storage.colors['серый'];
    this.colors['синий'] = storage.colors['синий'];
    this.colors['красный'] = storage.colors['красный'];
    this.colors['черный'] = storage.colors['черный'];
    this.colors['золотистый'] = storage.colors['золотистый'];
    this.electrics['да'] = storage.electrics['да'];
    this.electrics['нет'] = storage.electrics['нет'];
    this.amounts = storage.amounts;
    this.years = storage.years;
    this.search = storage.search;
    this.sort = storage.sort;
  }
  // для кнопки сброс фильтров
  reset(): void {
    this.brands['Bergamont'] = false;
    this.brands['Bianchi'] = false;
    this.brands['Bottecchia'] = false;
    this.brands['Giant'] = false;
    this.brands['Haibike'] = false;
    this.brands['Kona'] = false;
    this.brands['Kreidler'] = false;
    this.brands['Orbea'] = false;
    this.brands['Santa-Cruz'] = false;
    this.brands['Scott'] = false;
    this.sizes['27'] = false;
    this.sizes['28'] = false;
    this.sizes['29'] = false;
    this.colors['зеленый'] = false;
    this.colors['белый'] = false;
    this.colors['серый'] = false;
    this.colors['синий'] = false;
    this.colors['красный'] = false;
    this.colors['черный'] = false;
    this.colors['золотистый'] = false;
    this.electrics['да'] = false;
    this.electrics['нет'] = false;
    this.amounts = ['1', '12'];
    this.years = ['2017', '2022'];
    const activeBtn: NodeListOf<Element> = document.querySelectorAll('.btn_active');
    activeBtn.forEach((el) => el.classList.remove('btn_active'));
  }

  renderThroughFiltersValue(cart: string[], cartAmount: HTMLElement, allProducts: AllProducts): void {
    const arrFiltersBrands: string[] = this.getAllBrands();
    const arrFiltersSizes: string[] = this.getAllSizes();
    const arrFiltersColors: string[] = this.getAllColors();
    const arrFiltersElectrics: string[] = this.getAllElectrics();
    const year: IFilters.Range = this.getYears();
    const amount: IFilters.Range = this.getAmounts();
    const search: string = this.getSearch();
    let currentProducts: Item[] = allProducts.products;

    // фильтры по значениям
    if (arrFiltersBrands.length > 0) {
      currentProducts = currentProducts.filter((prod: Item) => {
        let check = false;
        arrFiltersBrands.forEach((val: string) => {
          if (prod.getValues().includes(val)) {
            check = true;
          }
        });
        return check;
      });
    }
    if (arrFiltersSizes.length > 0) {
      currentProducts = currentProducts.filter((prod: Item) => {
        let check = false;
        arrFiltersSizes.forEach((val: string) => {
          if (prod.getValues().includes(val)) {
            check = true;
          }
        });
        return check;
      });
    }
    if (arrFiltersColors.length > 0) {
      currentProducts = currentProducts.filter((prod: Item) => {
        let check = false;
        arrFiltersColors.forEach((val: string) => {
          if (prod.getValues().includes(val)) {
            check = true;
          }
        });
        return check;
      });
    }
    if (arrFiltersElectrics.length > 0) {
      currentProducts = currentProducts.filter((prod: Item) => {
        let check = false;
        arrFiltersElectrics.forEach((val: string) => {
          if (prod.getValues().includes(val)) {
            check = true;
          }
        });
        return check;
      });
    }
    // фильтры по диапазону
    currentProducts = currentProducts.filter((prod: Item) => {
      let check = true;

      if (+prod.year < +year[0] || +prod.year > +year[1]) {
        check = false;
      }
      if (+prod.amount < +amount[0] || +prod.amount > +amount[1]) {
        check = false;
      }
      return check;
    });
    // фильтры по поиску
    if (search) {
      currentProducts = currentProducts.filter((prod: Item) => {
        const prodName: string = prod.name.toLowerCase();
        const searchStr: string = search.toLowerCase();
        let check = true;
        if (!prodName.includes(searchStr)) {
          check = false;
        }
        return check;
      });
    }
    // Фильтры по порядку
    currentProducts = this.sorting(currentProducts, this.getSort());
    this.itemsClear();
    const arrProducts: string[] = currentProducts.map((prod) => prod.render());
    AppView.renderProducts(arrProducts);
    AppView.renderCart(cart, cartAmount);
    localStorage.setItem('filtersVitsk', JSON.stringify(this));
    localStorage.setItem('cartVitsk', JSON.stringify(cart));
    this.noElementAlert();
  }
  // удаляет все товары
  private itemsClear(): void {
    const itemContainer: Element | null = document.querySelector('.items-list');
    while (itemContainer?.firstChild) {
      itemContainer.removeChild(itemContainer.firstChild);
    }
  }

  private sorting(arr: Item[], by: string): Item[] {
    switch (by) {
      case 'nameUp':
        return arr.sort((a, b) => (a.name > b.name ? 1 : -1));
      case 'nameDown':
        return arr.sort((a, b) => (a.name < b.name ? 1 : -1));
      case 'yearUp':
        return arr.sort((a, b) => (a.year > b.year ? 1 : -1));
      case 'yearDown':
        return arr.sort((a, b) => (a.year < b.year ? 1 : -1));
      default:
        return arr;
    }
  }
  // выводит сообщение, если нет совпадений по фильтрам
  private noElementAlert(): void {
    const itemsList: HTMLElement = document.querySelector('.items-list') as HTMLElement;
    if (!itemsList.hasChildNodes()) {
      const element: HTMLDivElement = document.createElement('div');
      element.classList.add('no-element');
      element.innerText = 'Извините, совпадений не обнаружено';
      itemsList.appendChild(element);
    }
  }

  startFiltersItemsListener(
    allProducts: AllProducts,
    cart: Cart,
    sliderYear: noUiSlider.target,
    sliderAmount: noUiSlider.target
  ) {
    const filtersHTML: Element | null = document.querySelector('.filters');
    filtersHTML?.addEventListener('click', (event) => {
      if (event.target instanceof HTMLElement) {
        const target = event.target;
        if (target.hasAttribute('data-brand')) {
          const currentBrand: IFilters.Brands = target.getAttribute('data-brand') as IFilters.Brands;
          this.setBrands(currentBrand, target);
        }
        if (target.hasAttribute('data-size')) {
          const currentSize: IFilters.Sizes = target.getAttribute('data-size') as IFilters.Sizes;
          this.setSizes(currentSize, target);
        }
        if (target.hasAttribute('data-color')) {
          const currentColors: IFilters.Colors = target.getAttribute('data-color') as IFilters.Colors;
          this.setColors(currentColors, target);
        }
        if (target.hasAttribute('data-electric')) {
          const currentElectrics: IFilters.Electrics = target.getAttribute('data-electric') as IFilters.Electrics;
          this.setElectrics(currentElectrics, target);
        }
        if (target.hasAttribute('data-sort')) {
          const currentSort: string = target.getAttribute('data-sort') as string;
          this.setSort(currentSort);
        }
        if (target.hasAttribute('reset-filters')) {
          this.reset();
          sliderYear.noUiSlider?.reset();
          sliderAmount.noUiSlider?.reset();
        }
        if (target.hasAttribute('reset-settings')) {
          localStorage.removeItem('filtersVitsk');
          localStorage.removeItem('cartVitsk');
        } else {
          this.renderThroughFiltersValue(cart.products, cart.counter, allProducts);
        }
      }
    });
  }

  startFiltersListenerOfSearch(allProducts: AllProducts, cart: Cart, filters: this) {
    const search: Element | null = document.getElementById('search');
    if (search instanceof HTMLInputElement) {
      search.focus();
      search.value = this.search;
      search.oninput = function () {
        filters.setSearch(search.value);
        filters.renderThroughFiltersValue(cart.products, cart.counter, allProducts);
      };
    }
  }
}
