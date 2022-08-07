export default class Animation {
  private static getPosition(el: Element) {
    const {
      top, left, width, height,
    } = el.getBoundingClientRect();
    return {
      x: left + width / 2,
      y: top + height / 2,
    };
  }

  static getDistance(car: HTMLElement, flag: HTMLElement) {
    const carPos = Animation.getPosition(car);
    const flagPos = Animation.getPosition(flag);
    const distance = Math.hypot(carPos.x - flagPos.x, carPos.y - flagPos.y);
    return distance;
  }

  static animation(carElement: HTMLElement, distance: number, speed: number) {
    let start: number | null = null;
    const state = {
      id: NaN,
    };
    function step(timestamp: number | null) {
      if (!start) start = timestamp;
      const progress = Number(timestamp) - Number(start);
      const passed = Math.round(progress * (distance / speed));
      // eslint-disable-next-line no-param-reassign
      carElement.style.transform = `translateX(${Math.min(passed, distance)}px)`;
      if (passed < distance) {
        state.id = window.requestAnimationFrame(step);
      }
    }
    state.id = window.requestAnimationFrame(step);

    return state;
  }
}
