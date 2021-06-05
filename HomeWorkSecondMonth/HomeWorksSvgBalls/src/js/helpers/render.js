import { allCircles } from '../constants/constants';
import { bumpHorizontally, bumpVertically } from './bumps';
import Circle from '../Classes/Circle';

export const drawCircle = (e) => {
    const circle = new Circle(e.offsetX, e.offsetY)
    circle.init()
    allCircles.push(circle);
}

export const smashWatch = () => {
    allCircles.forEach((el, i, arr) => {    
        const newX = el.x + (el.speed / 16) * el.dx;
        const newY = el.y + (el.speed / 16) * el.dy;
        arr.forEach(next => {
            if (el !== next) {
                const nextX = next.x + (next.speed / 16) * next.dx;
                const nextY = next.y + (next.speed / 16) * next.dy;
                const touchpoint = Math.ceil(Math.sqrt(Math.pow((newX - nextX), 2) + Math.pow((newY - nextY), 2)));
                if (Math.floor(touchpoint <= el.radius + next.radius)) {
                    const elRadDx = Math.cos(Math.acos(el.dx) * 1.57);
                    const elRadDy = Math.sin(Math.asin(el.dy) * 1.57);
                    const nextRadDx = Math.cos(Math.acos(next.dx) * 1.57);
                    const nextRadDy = Math.sin(Math.asin(next.dy) * 1.57);

                    el.setDx(-elRadDx)
                    el.setDy(-elRadDy)
                    next.setDx(-nextRadDx)
                    next.setDy(-nextRadDy)
                }
            }
        })
        el.setX(newX)
        el.setY(newY)
        bumpHorizontally(el)
        bumpVertically(el)
    })
    requestAnimationFrame(smashWatch)
}
