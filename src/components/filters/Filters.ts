import { Brands, Sizes, Colors, Electrics, Range } from '../interfaces/IFilters';

export class Filters {
  brands = {
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

  sizes = {
    27: false,
    28: false,
    29: false,
  };

  colors = {
    зеленый: false,
    белый: false,
    серый: false,
    синий: false,
    красный: false,
    черный: false,
    золотистый: false,
  };

  electrics = {
    да: false,
    нет: false,
  };

  amounts: (string | number)[] = ['2017', '2022'];

  years: (string | number)[] = ['1', '12'];

  search = '';

  sort = 'false';

  setBrands(target: Brands) {
    this.brands[target] = this.brands[target] ? false : true;
    console.log(this.brands);
  }
  setSizes(target: Sizes) {
    this.sizes[target] = this.sizes[target] ? false : true;
    console.log(this.sizes);
  }
  setColors(target: Colors) {
    this.colors[target] = this.colors[target] ? false : true;
    console.log(this.colors);
  }
  setElectrics(target: Electrics) {
    this.electrics[target] = this.electrics[target] ? false : true;
    console.log(this.electrics);
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
}
