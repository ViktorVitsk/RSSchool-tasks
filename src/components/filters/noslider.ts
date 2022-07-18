import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
const wNumb = require('wnumb');

export function noslider(id: string, range: [number, number]) {
  const slider = document.getElementById(id);

  if (slider instanceof HTMLElement) {
    noUiSlider.create(slider, {
      start: [range[0], range[1]],
      connect: true,
      range: {
        min: range[0],
        max: range[1],
      },
      behaviour: 'tap-drag',
      tooltips: true,
      format: wNumb({
        decimals: 0,
      }),
    });
  }
}
