import * as noUiSlider from 'nouislider';
const wNumb = require('wnumb');

export function noslider(id: string, range: [number, number]) {
  const slider: noUiSlider.target = document.getElementById(id) as noUiSlider.target;

  if (slider) {
    noUiSlider.create(slider, {
      start: [range[0], range[1]],
      connect: true,
      range: {
        min: range[0],
        max: range[1],
      },
      step: 1,
      behaviour: 'tap-drag',
      tooltips: true,
      format: wNumb({
        decimals: 0,
      }),
    });
    if (slider.noUiSlider) {
      slider.noUiSlider.on('update', (val) => {
        console.log(val);
      });
    }
  }
}
