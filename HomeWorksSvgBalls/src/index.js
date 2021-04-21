import { Controller } from './controller'
import { Circle } from './model'
import { View } from './view'

window.addEventListener('DOMContentLoaded', () => {

  const view = new View()
  const circle = new Circle()
  view.drawOnClick(circle.svg, view.drawCircle)

  const controller = new Controller(view)
  controller.move()

})