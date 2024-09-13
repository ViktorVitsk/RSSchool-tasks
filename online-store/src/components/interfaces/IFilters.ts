export type Brands =
  | 'Bergamont'
  | 'Bianchi'
  | 'Bottecchia'
  | 'Giant'
  | 'Haibike'
  | 'Kona'
  | 'Kreidler'
  | 'Orbea'
  | 'Santa-Cruz'
  | 'Scott';

export type Sizes = '27' | '28' | '29';

export type Colors = 'зеленый' | 'белый' | 'серый' | 'синий' | 'красный' | 'черный' | 'золотистый';

export type Electrics = 'да' | 'нет';

export type Range = (string | number)[];

export interface IValues {
  [index: string]: boolean;
}
