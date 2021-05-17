import * as validate from "../validators/validators.js";
import { notifKill } from "../listeners/listeners.js";
import * as drowers from "../drowers/drowers.js";

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

  // autoDeath after 3s
  setTimeout(notifKill.bind(null, notif), 2000);
};

export const mutateObject = (obj) => {
  obj.balance = Number(obj.balance);
  obj.age = Number(obj.age);
  return obj;
};

export const drowInit = (candidates, canvas, context, distance_Between) => {
  drowers.drowBackground(canvas, context);
  for (let i = 0; i < candidates.length; i++) {
    const distance = distance_Between * (i + 1) + 2;
    const x = 0;
    const k = (2 * Math.PI) / 100;
    drowers.drowText(context, candidates[i].name, distance, 92, "white", 12);
    drowers.drowText(context, "balance", distance, 292, "white", 12);
    drowers.drowText(context, "documents", distance, 492, "white", 12);
    drowers.drowText(context, "age", distance, 692, "white", 12);
    drowers.drowText(context, "english", distance, 892, "white", 12);
    drowers.drowCircle(context, canvas, x, k, 100, distance, 100, 0, "green");
    candidates[i].distance = distance;
    candidates[i].balancePoint = 292;
    candidates[i].documentsPoint = 492;
    candidates[i].agePoint = 692;
    candidates[i].englishPoint = 892;
  }
};

export const sessionStorageSet = (key, value) =>
  sessionStorage.setItem(key, value);
