import { MAX_HEIGHT, MAX_WIDTH } from '../constants/constants';

export const bumpHorizontally = (el) => {
    const { x, dx, radius } = el
    if (x - radius <= 0 || x + radius >= MAX_WIDTH) {
        el.setDx(dx * -1)
    }
}
export const bumpVertically = (el) => {
    const { y, dy, radius } = el
    if (y - radius <= 0 || y + radius >= MAX_HEIGHT) {
        el.setDy(dy * -1)
    }
}