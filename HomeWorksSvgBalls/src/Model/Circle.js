import { MAX_RADIUS, MIN_RADIUS, MAX_SPEED, MIN_SPEED } from '../constants'

export default class Circle {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.dx = null
    this.dy = null
    this.radius = null
    this.color = null
    this.speed = null

    this.svg = document.querySelector('svg')
    const svgNS = this.svg.namespaceURI;
    this.circle = document.createElementNS(svgNS, 'circle')
    this.setParams()
  }

  setParams = () => {
    this.radius = Math.ceil(Math.random() * MAX_RADIUS + MIN_RADIUS)
    this.speed = Math.ceil(Math.random() * MAX_SPEED + MIN_SPEED)
    const rand = () => Math.random() * 255
    this.color = `rgb(${Math.ceil(rand())}, ${Math.floor(rand())}, ${Math.floor(rand())})`
    const angle = Math.random() * 2 * Math.PI
    this.dx = Math.cos(angle)
    this.dy = Math.sin(angle)
  }

  init = () => {
    this.circle.setAttribute('cx', this.x)
    this.circle.setAttribute('cy', this.y)
    this.circle.setAttribute('r', this.radius)
    this.circle.setAttribute('fill', this.color)
    this.svg.appendChild(this.circle)
  }

  setX = (x) => {
    this.x = x
    this.circle.setAttribute('cx', this.x)
  }

  setY = (y) => {
    this.y = y
    this.circle.setAttribute('cy', this.y)
  }

  setDx = dx => {
    this.dx = dx;
  }

  setDy = dy => {
    this.dy = dy;
  }
}