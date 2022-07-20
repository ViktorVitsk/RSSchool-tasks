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

  amounts: (string | number)[] = ['2017', '2022'];

  years: (string | number)[] = ['1', '12'];

  search = '';

  sort = 'false';

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
    console.log(this.amounts);
  }
  setYears(target: Range) {
    this.years = target;
    console.log(this.years);
  }
  setSearch(value: string) {
    this.search = value;
    console.log(this.search);
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
}
