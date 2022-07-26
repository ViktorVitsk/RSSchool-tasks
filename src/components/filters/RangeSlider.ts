import { Filters } from './Filters';
import * as noUiSlider from 'nouislider';
import wNumb from 'wnumb';

// Создает два слайдера и слушает изменение значений years и amounts
export function rangeSlider(filters: Filters): {
  sliderYear: noUiSlider.target;
  sliderAmount: noUiSlider.target;
} {
  const sliderYear: noUiSlider.target = document.getElementById('year') as noUiSlider.target;

  if (sliderYear) {
    noUiSlider.create(sliderYear, {
      start: [2017, 2022],
      connect: true,
      range: {
        min: 2017,
        max: 2022,
      },
      step: 1,
      behaviour: 'tap-drag',
      tooltips: true,
      format: wNumb({
        decimals: 0,
      }),
    });
    sliderYear.noUiSlider?.on('update', (val) => {
      filters.setYears(val);
    });
  }

  const sliderAmount: noUiSlider.target = document.getElementById('amount') as noUiSlider.target;

  if (sliderAmount) {
    noUiSlider.create(sliderAmount, {
      start: [1, 12],
      connect: true,
      range: {
        min: 1,
        max: 12,
      },
      step: 1,
      behaviour: 'tap-drag',
      tooltips: true,
      format: wNumb({
        decimals: 0,
      }),
    });

    sliderAmount.noUiSlider?.on('update', (val) => {
      filters.setAmounts(val);
    });
  }
  return { sliderYear, sliderAmount };
}
