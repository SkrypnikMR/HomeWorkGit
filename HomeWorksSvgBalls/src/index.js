import { Model } from "./Model/Model";
import { View } from "./View";
import { Controller } from "./Controller";

const init = () => {
  const model = new Model();
  const view = new View();
  const controller = new Controller(model, view);
};

init();

