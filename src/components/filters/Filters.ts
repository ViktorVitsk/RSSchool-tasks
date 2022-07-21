import { Brands, Sizes, Colors, Electrics, Range } from '../interfaces/IFilters';

interface IValues {
  [index: string]: boolean;
}
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

  setBrands(target: Brands) {
    this.brands[target] = this.brands[target] ? false : true;
    this.getAllOnFiltersValue();
  }
  setSizes(target: Sizes) {
    this.sizes[target] = this.sizes[target] ? false : true;
    this.getAllOnFiltersValue();
  }
  setColors(target: Colors) {
    this.colors[target] = this.colors[target] ? false : true;
    this.getAllOnFiltersValue();
  }
  setElectrics(target: Electrics) {
    this.electrics[target] = this.electrics[target] ? false : true;

    this.getAllOnFiltersValue();
  }
  setAmounts(target: Range) {
    this.amounts = target;
  }
  setYears(target: Range) {
    this.years = target;
  }
  setSearch(value: string) {
    this.search = value;
  }
  setSort(value: string) {
    this.sort = value;
    console.log(this.sort);
  }
  getAllOnFiltersValue(): string[] {
    const result: string[] = [];
    const brands = this.getOnFiltersValue(this.brands);
    const sizes = this.getOnFiltersValue(this.sizes);
    const colors = this.getOnFiltersValue(this.colors);
    const electrics = this.getOnFiltersValue(this.electrics);
    result.push(...brands, ...sizes, ...colors, ...electrics);
    return result;
  }
  private getOnFiltersValue(filtersObj: IValues) {
    const brandsKeys: string[] = Object.keys(filtersObj);
    return brandsKeys.filter((key) => filtersObj[key]);
  }
  getAmounts() {
    return this.amounts;
  }
  getYears() {
    return this.years;
  }
  getSearch() {
    return this.search;
  }
  getSort() {
    return this.sort;
  }
  setAllField(storage: any) {
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
    console.log(this.years, storage.years);
  }
  reset() {
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
  }
}
