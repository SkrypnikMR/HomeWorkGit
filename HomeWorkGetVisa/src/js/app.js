import * as constants from "./helpers/constants.js";
import * as random from "./helpers/random.js";
import * as helpers from "./helpers/helpers.js";
import * as listeners from "./helpers/listeners.js";

export const init = () => {
  // canvas node
  const canvas = document.querySelector('#mainCanvas');

  // inputs and checkbox nodes
  const nameInput = document.querySelector("#nameInpt");
  const cardBalanceInput = document.querySelector("#cardBalanceInpt");
  const ageInput = document.querySelector("#ageInpt");
  const passportCheckBox = document.querySelector("#passportCheck");
  const insuranceCheckBox = document.querySelector("#insuranceCheck");
  const photoCheckBox = document.querySelector("#photoCheck");
  const englishInput = document.querySelector("#englishLVLInpt");

  // generate buttons nodes
  const genNameBtn = document.querySelector("#genName");
  const genBalanceBtn = document.querySelector("#genBalance");
  const genAgeBtn = document.querySelector("#genAge");
  const genDocsBtn = document.querySelector("#genDocs");
  const genEngLVLBtn = document.querySelector("#genEngLVL");

  // controll buttons nodes
  const genAllBtn = document.querySelector("#genAll");
  const addCandidateBtn = document.querySelector("#addCandidate");
  const initRaceBtn = document.querySelector("#initRace");
  const startRaceBtn = document.querySelector("#startRace");
  const clearRaceBtn = document.querySelector("ClearRace");

  // condidatesArray
  let candidatesArray = JSON.parse(sessionStorage.getItem("candidates"));

  // groups of inputs nodes and generate buttons nodes
  const inputs = {nameInput, cardBalanceInput, ageInput, passportCheckBox, insuranceCheckBox, photoCheckBox,englishInput};
  const generateButtons = {genNameBtn, genBalanceBtn,genAgeBtn, genDocsBtn,genEngLVLBtn};

  // event listeners of generate buttons

  genNameBtn.addEventListener("click",(e) => (nameInput.value = random.getRndElement(constants.namesArray)));
  genBalanceBtn.addEventListener("click",(e) => (cardBalanceInput.value = random.getRndBalance()));
  genAgeBtn.addEventListener("click",(e) => (ageInput.value = random.getRndAge()));
  genEngLVLBtn.addEventListener("click",(e) => (englishInput.value = random.getRndElement(constants.engLVLArray)));
  genDocsBtn.addEventListener("click", (e) => {const documents = random.getRndDocuments();passportCheckBox.checked = documents[0];insuranceCheckBox.checked = documents[1];photoCheckBox.checked = documents[2];});

  // event listeners of controll buttons

  genAllBtn.addEventListener("click", listeners.generateAll.bind(null, candidatesArray, helpers, generateButtons));
  addCandidateBtn.addEventListener("click", listeners.addCandidate.bind(null, candidatesArray, helpers, inputs));
  initRaceBtn.addEventListener("click", listeners.initRace.bind(null, helpers, canvas));
};


