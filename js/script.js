'use strict';

var fireballSize = 22;

function getFireballSpeed(isHeadWind) {
  return isHeadWind ? 5 : 2;
}

var wizardWidth = 70;

function getWizardHeight() {
  return 1.337 * wizardWidth;
}

var wizardSpeed = 3;

function getWizardX(gameFieldWidth) {
  return (gameFieldWidth - wizardWidth) / 2;
}

function getWizardY(gameFieldHeight) {
  return gameFieldHeight / 3;
}
