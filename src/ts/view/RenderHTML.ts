import image from '../data/svg';
import { ICar } from '../interfaces/ICar';
import { IData } from '../interfaces/IData';
import { IWinner } from '../interfaces/IWinner';

class RenderHTML {
  static topMenu = `    <div class="menu">
  <button class="menu__button btn" id="garage-button">To garage</button>
  <button class="menu__button btn" id="winners-button">To winners</button>
</div>
<div class="garage__wrapper">
  <div class="garage__generate-cars">
    <form class="garage__set-car" id="create">
      <input class="set-car__name" type="text" name="name" />
      <input class="set-car__color" type="color" name="color" value="#ffffff" />
      <button class="btn" type="submit">Create</button>
    </form>
    <form class="garage__set-car" id="update" >
      <input class="set-car__name" type="text" name="name" disabled/>
      <input class="set-car__color" type="color" name="name" disabled />
      <button class="btn" type="submit" disabled>Update</button>
    </form>
    <div class="garage__set-car">
      <button class="set-car__generate btn">Generate cars</button>
    </div>
  </div>
  <div class="garage__race-btn">
    <button class="race-btn__start btn">Race</button>
    <button class="race-btn__reset btn">Reset</button>
    <span class='garage__display-winner'></span>
  </div>`;

  static render(data: IData) {
    const {
      cars,
      totalCars, carsPage, winners, totalWinners, winnersPage,
    } = data;
    const html = `
      ${RenderHTML.topMenu}
      <div class="garage__race-track">
        ${RenderHTML.renderRaceTrack(cars, totalCars, carsPage)}
      </div>
    </div>
    <div class="winners__wrapper none">
        ${RenderHTML.renderWinners(winners, totalWinners, winnersPage)}
    </div>
    <div class="paginator">
        <button class="paginator__button btn" id="prev">Prev</button>
        <button class="paginator__button btn" id="next">Next</button>
    </div>
  </div>
    `;
    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = html;
    document.body.appendChild(container);
  }

  static rerender(data: IData) {
    const {
      cars,
      totalCars,
      carsPage,
      winners,
      totalWinners,
      winnersPage,
    } = data;
    const garage = document.querySelector('.garage__race-track') as HTMLDivElement;
    const winner = document.querySelector('.winners__wrapper') as HTMLDivElement;
    const garageUpdate = RenderHTML.renderRaceTrack(cars, totalCars, carsPage);
    const winnersUpdate = RenderHTML.renderWinners(winners, totalWinners, winnersPage);
    garage.innerHTML = garageUpdate;
    winner.innerHTML = winnersUpdate;
  }

  static renderRaceTrack(cars: ICar[], totalCars: number, carsPage: number) {
    return `
    <h1 class="garage__title">Garage (${totalCars})</h1>
    <h2 class="garage__page-num">Page #${carsPage}</h2>
    <ul class="race-track__road">
      ${cars.map((car) => RenderHTML.renderRoadList(car.id, car.name, car.color)).join('\n')}
    </ul>
    `;
  }

  static renderRoadList(id: number, name: string, color: string) {
    return `<li class="road__list">
    <div class="road__head">
      <button class="road__select-car btn" car-select=${id}>Select</button>
      <button class="road__remove-car btn" car-remove=${id}>Remove</button>
      <h3 class="road__car-name">${name}</h3>
    </div>
    <div class="road__main">
      <div class="road__start">
        <div class="road__engine">
          <button class="engine__start engine__btn" start-engine=${id} >A</button>
          <button class="engine__stop engine__btn" stop-engine=${id} disabled>B</button>
        </div>
        <div class="road__car" id=car-${id}>
          ${RenderHTML.getCarImg(color)}
        </div>
      </div>
      <div class="road__finish" id=flag-${id}></div>
    </div>
    <div class="road__foot"></div>
  </li>`;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static renderWinners(winners: any, totalWinners: number, winnersPage: number) {
    return `
    <h1 class="winners__title">Winners (${totalWinners})</h1>
    <h2 class="winners__page">Page #${winnersPage}</h2>
    <table class="winners__table">
    <thead>
    <th>Number</th>
    <th>Car</th>
    <th>Name</th>
    <th class="table__wins">Wins</th>
    <th class="table__time">Best time (seconds)</th>
    </thead>
    <tbody class="table__body">
      ${RenderHTML.renderWinnersCars(winners, winnersPage)}
      </tbody>
    </table>
    `;
  }

  static renderWinnersCars(winners: IWinner[], winnersPage: number) {
    return `${winners
      .map(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (winner: any, i: number) => `
        <tr>
        <td>${i + winnersPage * 10 - 9}</td>
        <td class="table__car-img">${this.getCarImg(winner.car.color)}</td>
        <td>${winner.car.name}</td>
        <td>${winner.wins}</td>
        <td>${winner.time}</td>
        </tr>
        `,
      )
      .join('')}`;
  }

  static getCarImg(color: string) {
    return image.replace('#ffffff', color);
  }
}
export default RenderHTML;
