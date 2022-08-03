import image from '../data/svg';

class RenderHTML {
  static render() {
    const html = `
    <div class="menu">
      <button class="menu__button btn" id="garage-button">To garage</button>
      <button class="menu__button btn" id="winners-button">To winners</button>
    </div>
    <div class="garage__wrapper">
      <div class="garage__generate-cars">
        <div class="garage__set-car" id="create">
          <input class="set-car__name" type="text" name="name" />
          <input class="set-car__color" type="color" name="name" />
          <button class="btn" type="submit">Create</button>
        </div>
        <div class="garage__set-car" id="update">
          <input class="set-car__name" type="text" name="name" disabled />
          <input class="set-car__color" type="color" name="name" disabled />
          <button class="btn" type="submit">Update</button>
        </div>
        <div class="garage__set-car">
          <button class="set-car__generate btn">Generate cars</button>
        </div>
      </div>
      <div class="garage__race-btn">
        <button class="race-btn__start btn">Race</button>
        <button class="race-btn__reset btn">Reset</button>
      </div>
      <div class="garage__race-track">
        ${RenderHTML.renderRaceTrack()}
        </div>
        </div>
        ${RenderHTML.renderWinners()}
        <div class="paginator">
        <button class="paginator__button btn" id="prev" disabled>Prev</button>
        <button class="paginator__button btn" id="next" disabled>Next</button>
      </div>
    `;
    const container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = html;
    document.body.appendChild(container);
  }

  static renderRaceTrack() {
    return `
    <h1 class="garage__title">Garage (100)</h1>
    <h2 class="garage__page-num">Page #1</h2>
    <ul class="race-track__road">
      ${RenderHTML.renderRoadList()}
      ${RenderHTML.renderRoadList()}
      ${RenderHTML.renderRoadList()}
      ${RenderHTML.renderRoadList()}
    </ul>
    `;
  }

  static renderRoadList() {
    return `<li class="road__list">
    <div class="road__head">
      <button class="road__select btn" car-select="1">Select</button>
      <button class="road__remove btn" car-remove="1">Remove</button>
      <h3 class="road__car-name">Toyota</h3>
    </div>
    <div class="road__main">
      <div class="road__start">
        <div class="road__engine">
          <button class="engine__start engine__btn" start-engine="1">A</button>
          <button class="engine__stop engine__btn" stop-engine="1">B</button>
        </div>
        <div class="road__car" car="1">
          ${RenderHTML.renderCarImg('#000')}
        </div>
      </div>
      <div class="road__finish"></div>
    </div>
    <div class="road__foot"></div>
  </li>`;
  }

  static renderWinners() {
    return `
    <div class="winners__wrapper none">
    <h1 class="winners__title">Winners (1)</h1>
    <h2 class="winners__page">Page #1</h2>
    <table class="winners__table">
      <thead>
        <th>Number</th>
        <th>Car</th>
        <th>Name</th>
        <th class="table__wins">Wins</th>
        <th class="table__time">Best time (seconds)</th>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td class="table__car-img">машина</td>
          <td>Tesla</td>
          <td>1</td>
          <td>2.87</td>
        </tr>
      </tbody>
    </table>
  </div>
    `;
  }

  static renderCarImg(color: string) {
    return image.replace('#ffffff', color);
  }
}
export default RenderHTML;
