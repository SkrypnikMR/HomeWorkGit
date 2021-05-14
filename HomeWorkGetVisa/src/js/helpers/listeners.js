export function notifKill(notif) {
  notif.classList.add("deleted");
  notif.style.zIndex = 0;
  const killNotification = setInterval(() => {
    notif.remove();
    clearInterval(killNotification);
  }, 2000);
}

export function generateAll(candidatesArray, helpers, generateButtons) {
  if (candidatesArray && candidatesArray.length === 5)
    return helpers.createNotif("No vacancy");
  helpers.click(generateButtons);
}

export function addCandidate(candidatesArray, helpers, inputs) {
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
  candidatesArray.map((el=> helpers.mutateObject(el)));
    helpers.drow(candidatesArray, canvas, ctx);
}
