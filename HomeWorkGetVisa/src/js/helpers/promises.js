import { getRndNumber } from "./random";
import { drowCircle, drowText } from "./drowers/drowers";

export const promiseStart = (candidate, callbacks, promiseAllFunc) => {
  return new Promise((resolve, reject) => {
    const canvas = document.querySelector("#mainCanvas");
    const context = canvas.getContext("2d");
    const x = 0;
    const k = (2 * Math.PI) / 100;
    const distance = candidate.distance;
    const startPoint = candidate.balancePoint + 5;  
    drowCircle(context, canvas, x, k, startPoint, distance, 100, 47, "green");
    setTimeout(() => {
      const answer = callbacks[0](candidate.balance);
      if (answer) {
        drowCircle(context, canvas, x, k, startPoint, distance, 100, 0, "green")
        drowText(context, '☑', distance, startPoint+100, 'green', 20);
        resolve(candidate);
      } else {
        drowText(context, 'false', distance, startPoint+100, 'red',12)
        drowCircle(context, canvas, x, k, startPoint, distance, 100, 0,"green");
        reject();
      }
    }, 5000);
  }).then((data) => {
    return Promise.all([
      promiseAllFunc(data, data.age, callbacks[1]),
      promiseAllFunc(data, data, callbacks[2]),
      promiseAllFunc(data, data.english, callbacks[3]),
    ]).then((data) => {
      return data[0];
    });
  });
};

export const promiseAllFunc = (candidate, item, callback) => {
  return new Promise((resolve, reject) => {
    const timer = getRndNumber(1000, 20 * 1000);
    const canvas = document.querySelector("#mainCanvas");
    const context = canvas.getContext("2d");
    const x = 0;
    const k = (2 * Math.PI) / 100;
    const distance = candidate.distance;
    let startPoint;
    if(item === candidate.age)startPoint = candidate.agePoint;
    if(item === candidate.english)startPoint = candidate.englishPoint;
    if(typeof item === 'object') startPoint = candidate.documentsPoint + 12;
    drowCircle(context, canvas, x, k, startPoint, distance, 100, timer/100, "green");
    setTimeout(() => {
        const answer = callback(item);
        if (answer) {
              drowCircle(context, canvas, x, k, startPoint, distance, 100, 0,"green");
          drowText(context, '☑', distance, startPoint+100, 'green', 20);
          resolve(candidate);
        } else {
          drowText(context, 'false', distance, startPoint+100, 'green', 12);
          drowCircle(context, canvas, x, k, startPoint, distance, 100, 0,"green");
          reject();
        }
    }, timer);
  });
};
