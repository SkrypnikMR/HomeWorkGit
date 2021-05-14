import * as validate from "./validators/validators.js";
import { notifKill } from "./listeners.js";

export const click = (buttons) => {
  for (let key in buttons) {
    buttons[key].click();
  }
};

export const validator = (candidate) => {
  const vName = validate.validateName(candidate.name);
  const vBalance = validate.validateNumber(candidate.balance);
  const vAgelikeNumber = validate.validateNumber(candidate.age);
  const VAgeLength = validate.validateLength(candidate.age, 3);
  const vEnglish = validate.validateEnglish(candidate.english);
  if (vName || !vBalance || !vAgelikeNumber || VAgeLength || !vEnglish) {
    return false;
  }
  return true;
};

export const cleaner = (nodes) => {
  for (let key in nodes) {
    if (nodes[key].checked === true) {
      nodes[key].checked = false;
      continue;
    }
    nodes[key].value = "";
  }
};

export const createNotif = (str) => {
  // create notif Div
  const notif = document.createElement("div");
  const notifTextDiv = document.createElement("div");
  const notifButtonDiv = document.createElement("div");
  const notifDeleteBtn = document.createElement("button");
  const notifMessage = document.createElement("p");

  // add classes
  notif.classList.add("notification");
  notifButtonDiv.classList.add("notification__button");
  notifTextDiv.classList.add("notification__message");
  notifDeleteBtn.classList.add("button__item");
  notifDeleteBtn.classList.add("button");
  notifMessage.classList.add("message__item");

  //add textContent
  notifDeleteBtn.textContent = "X";
  notifMessage.textContent = str;

  //append chields
  notifTextDiv.appendChild(notifMessage);
  notifButtonDiv.appendChild(notifDeleteBtn);
  notif.appendChild(notifButtonDiv);
  notif.appendChild(notifTextDiv);
  document.body.appendChild(notif);

  // add event Listener
  notifDeleteBtn.addEventListener("click", notifKill.bind(null, notif));
};

export const mutateObject = (obj) => {
  obj.balance = Number(obj.balance);
  obj.age = Number(obj.age);
  return obj;
};

export const drow = (candidates, canvas, context) => {
  var box_Height = canvas.height;
  context.fillStyle = "rgba(94, 144, 252, 1)";
  context.fillRect(1, 1, canvas.width - 1, box_Height - 1);
  context.strokeRect(0.5, 0.5, canvas.width - 1, box_Height);
  const centerX = 100;
  const radius = 40;
  const distance_Between = 105;
  for (let i = 0; i < candidates.length; i++) {
    context.beginPath();
    context.font = " 12px Arial";
    context.fillStyle = "white";
    context.fillText(
      candidates[i].name,
      92 - candidates[i].name.length * 2,
      distance_Between * (i + 1) + 2
    );
    context.closePath();
    context.beginPath();
    context.font = " 12px Arial";
    context.fillStyle = "white";
    context.fillText(
      `check balance`,
      300 * 1.5,
      distance_Between * (i + 1) + 2
    );
    context.closePath();
    context.beginPath();
    context.font = " 12px Arial";
    context.fillStyle = "white";
    context.fillText(`check age`, 500 * 1.5, distance_Between * (i + 1) + 2);
    context.closePath();
    context.beginPath();
    context.font = " 12px Arial";
    context.fillStyle = "white";
    context.fillText(
      `check documents`,
      700 * 1.5,
      distance_Between * (i + 1) + 2
    );
    context.closePath();
    context.beginPath();
    context.font = " 12px Arial";
    context.fillStyle = "white";
    context.fillText(
      `check english`,
      900 * 1.5,
      distance_Between * (i + 1) + 2
    );
    context.closePath();
    let x = 0;
    let k = (2 * Math.PI) / 100;
    const kek = distance_Between * (i + 1) + 2;
    console.log(kek);
    drowCircle(context, canvas, x, k, kek);
  }
};

export function drowCircle(context, canvas, x, k, kek) {
  context.beginPath();
  context.arc(100, kek, 50, 0, x * k, false);
  context.lineWidth = 3;
  context.lineCap = "butt";
  context.strokeStyle = "green";
  context.stroke();
  context.closePath();
  let timeout;
  if (x <= 100) {
    timeout = setTimeout(() => {
      drowCircle(context, canvas, x + 1, k, kek);
    }, 50);
  } else clearTimeout(timeout);
}
