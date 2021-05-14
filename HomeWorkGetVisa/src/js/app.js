import * as constants from "./helpers/constants.js";
import * as random from "./helpers/random.js";
import * as helpers from "./helpers/helpers.js";
import * as listeners from "./helpers/listeners.js";
import * as promises from './helpers/promises.js';
import * as checks from './helpers/checks/checks.js'
import * as draw from "./helpers/drowers/drowers.js"

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

  genAllBtn.addEventListener("click", listeners.generateAll.bind(null,  helpers, generateButtons));
  addCandidateBtn.addEventListener("click", listeners.addCandidate.bind(null,  helpers, inputs));
  initRaceBtn.addEventListener("click", listeners.initRace.bind(null, helpers, canvas));
  startRaceBtn.addEventListener('click', (e)=>{
    const candidates = JSON.parse(sessionStorage.getItem('candidates'));
    const callbacks = [checks.checkBalance, checks.checkAge, checks.checkDocuments, checks.checkEnglish];
   Promise.any([promises.promiseStart(candidates[0],callbacks, promises.promiseAllFunc, 0),
    promises.promiseStart(candidates[1],callbacks, promises.promiseAllFunc, 1),
    promises.promiseStart(candidates[2],callbacks, promises.promiseAllFunc, 2),
    promises.promiseStart(candidates[3],callbacks, promises.promiseAllFunc, 3),
    promises.promiseStart(candidates[4],callbacks, promises.promiseAllFunc, 4)
  ]).then((data)=>{

     draw.drowFillCircle(canvas.getContext('2d'), 1300, 300, 'yellow')
     draw.drowText(canvas.getContext('2d'), `${data.name}`, 300, 1250, 'blue',30)
     draw.drowText(canvas.getContext('2d'), `get Visa!`, 330, 1250, 'blue',30)
 
   }).catch((e)=>{
    draw.drowFillCircle(canvas.getContext('2d'), 1300, 300, 'red')
    draw.drowText(canvas.getContext('2d'), `Nobody got through.`, 300, 1220, 'black',30)
    draw.drowText(canvas.getContext('2d'), `Come back tomorrow`, 330, 1200, 'black',30)

   });
  });
};


