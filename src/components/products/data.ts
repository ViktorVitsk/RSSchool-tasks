const data = [
  {
    id: '01',
    brand: 'Scott',
    name: 'Scott Genius 940',
    amount: '2',
    year: '2021',
    color: 'зеленый',
    size: '29',
    electric: 'нет',
  },
  {
    id: '02',
    brand: 'Giant',
    name: 'Giant Trinity Advanced Pro 2',
    amount: '5',
    year: '2020',
    color: 'белый',
    size: '28',
    electric: 'нет',
  },
  {
    id: '03',
    brand: 'Giant',
    name: 'Giant Glory 1',
    amount: '3',
    year: '2019',
    color: 'зеленый',
    size: '27',
    electric: 'нет',
  },
  {
    id: '04',
    brand: 'Giant',
    name: 'Giant Trinity Advanced Pro 1',
    amount: '2',
    year: '2021',
    color: 'серый',
    size: '28',
    electric: 'нет',
  },
  {
    id: '05',
    brand: 'Giant',
    name: 'Giant Propel Advanced Pro 1',
    amount: '4',
    year: '2020',
    color: 'серый',
    size: '28',
    electric: 'нет',
  },
  {
    id: '06',
    brand: 'Giant',
    name: 'Giant TCR Advanced Pro 0 KOM',
    amount: '6',
    year: '2021',
    color: 'синий',
    size: '28',
    electric: 'нет',
  },
  {
    id: '07',
    brand: 'Giant',
    name: 'Giant Road E+ 2 Pro',
    amount: '12',
    year: '2021',
    color: 'синий',
    size: '28',
    electric: 'да',
  },
  {
    id: '08',
    brand: 'Giant',
    name: 'Giant Propel Advanced Pro 1',
    amount: '10',
    year: '2021',
    color: 'серый',
    size: '28',
    electric: 'нет',
  },
  {
    id: '09',
    brand: 'Kona',
    name: 'Kona Operator',
    amount: '2',
    year: '2021',
    color: 'серый',
    size: '27',
    electric: 'нет',
  },
  {
    id: '10',
    brand: 'Orbea',
    name: 'Orbea Oiz M10',
    amount: '7',
    year: '2021',
    color: 'красный',
    size: '29',
    electric: 'нет',
  },
  {
    id: '11',
    brand: 'Kona',
    name: 'Kona Process 153 CR',
    amount: '11',
    year: '2020',
    color: 'серый',
    size: '29',
    electric: 'нет',
  },
  {
    id: '12',
    brand: 'Santa-Cruz',
    name: 'Santa Cruz Tallboy 4 C S-Kit',
    amount: '5',
    year: '2021',
    color: 'черный',
    size: '29',
    electric: 'нет',
  },
  {
    id: '13',
    brand: 'Kona',
    name: 'Kona Operator CR',
    amount: '3',
    year: '2021',
    color: 'зеленый',
    size: '29',
    electric: 'нет',
  },
  {
    id: '14',
    brand: 'Kona',
    name: 'Kona Process 134 AL/DL',
    amount: '4',
    year: '2021',
    color: 'синий',
    size: '29',
    electric: 'нет',
  },
  {
    id: '15',
    brand: 'Kona',
    name: 'Kona Hei Hei CR/DL',
    amount: '3',
    year: '2021',
    color: 'синий',
    size: '29',
    electric: 'нет',
  },
  {
    id: '16',
    brand: 'Bottecchia',
    name: 'Bottecchia BE 50 E-BIKE',
    amount: '3',
    year: '2017',
    color: 'черный',
    size: '27',
    electric: 'да',
  },
  {
    id: '17',
    brand: 'Giant',
    name: 'Giant Defy Advanced Pro 0',
    amount: '7',
    year: '2021',
    color: 'синий',
    size: '28',
    electric: 'нет',
  },
  {
    id: '18',
    brand: 'Bianchi',
    name: 'Bianchi Oltre XR.3 CV Ultegra',
    amount: '2',
    year: '2021',
    color: 'синий',
    size: '28',
    electric: 'нет',
  },
  {
    id: '19',
    brand: 'Bergamont',
    name: 'Bergamont E-Contrail Pro',
    amount: '12',
    year: '2021',
    color: 'золотистый',
    size: '29',
    electric: 'да',
  },
  {
    id: '20',
    brand: 'Giant',
    name: 'Giant Revolt Advanced Pro 0',
    amount: '8',
    year: '2021',
    color: 'черный',
    size: '28',
    electric: 'нет',
  },
  {
    id: '21',
    brand: 'Giant',
    name: 'Giant TCR Advanced SL 1',
    amount: '4',
    year: '2021',
    color: 'красный',
    size: '28',
    electric: 'нет',
  },
  {
    id: '22',
    brand: 'Bianchi',
    name: 'Bianchi Oltre Ultegra Di2',
    amount: '11',
    year: '2021',
    color: 'черный',
    size: '28',
    electric: 'нет',
  },
  {
    id: '23',
    brand: 'Bianchi',
    name: 'Bianchi Specialissima CV Ultegra',
    amount: '9',
    year: '2019',
    color: 'синий',
    size: '28',
    electric: 'нет',
  },
  {
    id: '24',
    brand: 'Bianchi',
    name: 'Bianchi Arcadex GRX815',
    amount: '1',
    year: '2021',
    color: 'золотистый',
    size: '28',
    electric: 'нет',
  },
  {
    id: '25',
    brand: 'Eleek',
    name: 'Haibike SDURO FullSeven',
    amount: '12',
    year: '2020',
    color: 'черный',
    size: '27',
    electric: 'да',
  },
  {
    id: '26',
    brand: 'Haibike',
    name: 'Haibike XDURO AllTrail Flyon',
    amount: '8',
    year: '2020',
    color: 'белый',
    size: '27',
    electric: 'да',
  },
  {
    id: '27',
    brand: 'Scott',
    name: 'Scott Spark 940',
    amount: '4',
    year: '2021',
    color: 'черный',
    size: '29',
    electric: 'нет',
  },
  {
    id: '28',
    brand: 'Orbea',
    name: 'Orbea Oiz M30',
    amount: '10',
    year: '2021',
    color: 'красный',
    size: '29',
    electric: 'нет',
  },
  {
    id: '29',
    brand: 'Giant',
    name: 'Giant Revolt Advanced 1',
    amount: '5',
    year: '2019',
    color: 'серый',
    size: '28',
    electric: 'нет',
  },
  {
    id: '30',
    brand: 'Kreidler',
    name: 'Kreidler Vitality',
    amount: '8',
    year: '2018',
    color: 'серый',
    size: '29',
    electric: 'да',
  },
];

export default data;
