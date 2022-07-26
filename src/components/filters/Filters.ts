import { Brands, Sizes, Colors, Electrics, Range, IValues } from '../interfaces/IFilters';

export class Filters {
  brands: IValues = {
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

  sizes: IValues = {
    27: false,
    28: false,
    29: false,
  };

  colors: IValues = {
    зеленый: false,
    белый: false,
    серый: false,
    синий: false,
    красный: false,
    черный: false,
    золотистый: false,
  };

  electrics: IValues = {
    да: false,
    нет: false,
  };

  years: (string | number)[] = ['2017', '2022'];

  amounts: (string | number)[] = ['1', '12'];

  search = '';

  sort = '';

  setBrands(value: Brands, target: HTMLElement): void {
    this.brands[value] = this.brands[value] ? false : true;
    this.brands[value] ? target.classList.add('btn_active') : target.classList.remove('btn_active');
  }
  setSizes(value: Sizes, target: HTMLElement): void {
    this.sizes[value] = this.sizes[value] ? false : true;
    this.sizes[value] ? target.classList.add('btn_active') : target.classList.remove('btn_active');
  }
  setColors(value: Colors, target: HTMLElement): void {
    this.colors[value] = this.colors[value] ? false : true;
    this.colors[value] ? target.classList.add('btn_active') : target.classList.remove('btn_active');
  }
  setElectrics(value: Electrics, target: HTMLElement): void {
    this.electrics[value] = this.electrics[value] ? false : true;
    this.electrics[value] ? target.classList.add('btn_active') : target.classList.remove('btn_active');
  }
  setAmounts(value: Range): void {
    this.amounts = value;
  }
  setYears(value: Range): void {
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
  private getOnFiltersValue(filtersObj: IValues): string[] {
    const brandsKeys: string[] = Object.keys(filtersObj);
    return brandsKeys.filter((key) => filtersObj[key]);
  }
  getAmounts(): Range {
    return this.amounts;
  }
  getYears(): Range {
    return this.years;
  }
  getSearch(): string {
    return this.search;
  }
  getSort(): string {
    return this.sort;
  }
  setAllFieldFromStorage(storage: Filters): void {
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
}
