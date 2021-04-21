import Circle from './Circle';
import { FULL_WIDTH, FULL_HEIGHT, MAX_RADIUS, MIN_SPEED, MAX_SPEED, MIN_RADIUS } from '../constants';

export class Model {
    constructor() {
        const circle = this.createCircle();
        this.circle = new Circle(circle);
    }

    createCircle = () => {
        const radius = Math.floor(Math.random() * MAX_RADIUS + MIN_RADIUS);
        const x = Math.floor(Math.random() * (FULL_WIDTH - 2 * radius) + radius);
        const y = Math.floor(Math.random() * (FULL_HEIGHT - 2 * radius) + radius);
        const angle = Math.random() * 2 * Math.PI;
        const dx = Math.cos(angle);
        const dy = Math.sin(angle);
        const speed = Math.floor(Math.random() * MAX_SPEED + MIN_SPEED);
        const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        const circle = { x, y, dx, dy, radius, color, speed };
    
        return circle;
    }
}