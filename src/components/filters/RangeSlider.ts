import { Filters } from './Filters';
import * as noUiSlider from 'nouislider';
import wNumb from 'wnumb';

// Создает два слайдера и слушает изменение значений years и amounts
export function rangeSlider(filters: Filters): {
  sliderYear: noUiSlider.target;
  sliderAmount: noUiSlider.target;
} {
  const getSliderConfig = (type: string, range: number[]): noUiSlider.target => {
    const slider: noUiSlider.target = document.getElementById(type) as noUiSlider.target;

    if (slider) {
      noUiSlider.create(slider, {
        start: range,
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
      slider.noUiSlider?.on('update', (val) => {
        type === 'year' ? filters.setYears(val) : filters.setAmounts(val);
      });
    }
    return slider;
  };

  const sliderYear: noUiSlider.target = getSliderConfig('year', [2017, 2022]);

  const sliderAmount: noUiSlider.target = getSliderConfig('amount', [1, 12]);

  return { sliderYear, sliderAmount };
}
