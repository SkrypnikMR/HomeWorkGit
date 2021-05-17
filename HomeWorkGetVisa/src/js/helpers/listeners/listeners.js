export function generateAll(helpers, generateButtons) {
  let candidatesArray = JSON.parse(sessionStorage.getItem("candidates"));
  if (candidatesArray && candidatesArray.length === 5)
    return helpers.createNotif("No vacancy");
  helpers.click(generateButtons);
}

export function addCandidate(helpers, inputs) {
  let candidatesArray = JSON.parse(sessionStorage.getItem("candidates"));
  const candidate = {
    name: inputs.nameInput.value,
    balance: inputs.cardBalanceInput.value,
    age: inputs.ageInput.value,
    passport: inputs.passportCheckBox.checked,
    insurance: inputs.insuranceCheckBox.checked,
    photo: inputs.photoCheckBox.checked,
    english: inputs.englishInput.value,
  };
  if (candidatesArray && candidatesArray.length === 5) {
    helpers.cleaner(inputs);
    return helpers.createNotif("No vacancy");
  }
  const validatorAnswer = helpers.validator(candidate);
  if (validatorAnswer) {
    if (!candidatesArray) {
      sessionStorage.setItem("candidates", JSON.stringify([]));
      candidatesArray = JSON.parse(sessionStorage.getItem("candidates"));
    }
    candidatesArray.push(candidate);
    sessionStorage.setItem("candidates", JSON.stringify(candidatesArray));
    helpers.cleaner(inputs);
    helpers.createNotif("Candidate is added!");
  }
}

export function initRace(helpers, canvas) {
  const candidatesArray = JSON.parse(sessionStorage.getItem("candidates"));
  const ctx = canvas.getContext("2d");
  if (!candidatesArray)
    return helpers.createNotif("oops, no one to race with :(");
  if (candidatesArray.length === 1)
    return helpers.createNotif("One person is not interested in competing:)");
  helpers.createNotif("Race initialized!");
  canvas.parentElement.classList.remove("hide");
  canvas.parentElement.scrollIntoView({ behavior: "smooth" });
  candidatesArray.map((el) => helpers.mutateObject(el));
  helpers.drowInit(candidatesArray, canvas, ctx, 105);
  sessionStorage.setItem("candidates", JSON.stringify(candidatesArray));
}
export function notifKill(notif) {
  notif.classList.add("deleted");
  notif.style.zIndex = 0;
  const killNotification = setInterval(() => {
    notif.remove();
    clearInterval(killNotification);
  }, 2000);
}

export function startRace(callbacks, promises, draw, showNotification) {
  const candidates = JSON.parse(sessionStorage.getItem("candidates"));
  showNotification("Start race!");
  Promise.any([
    promises.promiseStart(candidates[0], callbacks, promises.promiseAllFunc, 0),
    promises.promiseStart(candidates[1], callbacks, promises.promiseAllFunc, 1),
    promises.promiseStart(candidates[2], callbacks, promises.promiseAllFunc, 2),
    promises.promiseStart(candidates[3], callbacks, promises.promiseAllFunc, 3),
    promises.promiseStart(candidates[4], callbacks, promises.promiseAllFunc, 4),
  ])
    .then((data) => {
      draw.drowFillCircle(canvas.getContext("2d"), 1300, 300, "yellow");
      draw.drowText(
        canvas.getContext("2d"),
        `${data.name}`,
        300,
        1250,
        "blue",
        30
      );
      draw.drowText(
        canvas.getContext("2d"),
        `get Visa!`,
        330,
        1250,
        "blue",
        30
      );
    })
    .catch((e) => {
      draw.drowFillCircle(canvas.getContext("2d"), 1300, 300, "red");
      draw.drowText(
        canvas.getContext("2d"),
        `Nobody got through.`,
        300,
        1220,
        "black",
        30
      );
      draw.drowText(
        canvas.getContext("2d"),
        `Come back tomorrow`,
        330,
        1200,
        "black",
        30
      );
    });
}
export const clearRace = (draw, canvas, helpers) => {
  draw.drowBackground(canvas, canvas.getContext("2d"));
  canvas.parentElement.classList.add("hide");
  helpers.createNotif("You clear racing board!");
  helpers.sessionStorageSet('candidates', JSON.stringify([]));
};
