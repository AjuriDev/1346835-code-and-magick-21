'use strict';

const WIZARDS_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARDS_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARDS_COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARDS_EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARDS_NUMBER = 4;
const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

const setupSimilarList = userDialog.querySelector(`.setup-similar-list`);

const wizardSet = function (arr) {
  let rand = Math.random() * (arr.length - 1);
  return Math.floor(rand);
};

function Wizard() {
  this.name = WIZARDS_NAMES[wizardSet(WIZARDS_NAMES)] + ` ` + WIZARDS_SURNAMES[wizardSet(WIZARDS_SURNAMES)];
  this.coatColor = WIZARDS_COAT_COLORS[wizardSet(WIZARDS_COAT_COLORS)];
  this.eyesColor = WIZARDS_EYES_COLORS[wizardSet(WIZARDS_EYES_COLORS)];
}

const wizards = [];
for (let i = 0; i < WIZARDS_NUMBER; i++) {
  wizards[i] = new Wizard();
}

const template = document.querySelector(`#similar-wizard-template`).content;
const wizardCard = template.querySelector(`.setup-similar-item`);

const renderWizard = function (wizard) {
  const newWizard = wizardCard.cloneNode(true);
  newWizard.querySelector(`.setup-similar-label`).textContent = wizard.name;
  newWizard.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  newWizard.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return newWizard;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

setupSimilarList.appendChild(fragment);
userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
