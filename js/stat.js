'use strict';

var Cloud = {
  WIDTH: 420,
  HEIGHT: 270,
  X: 100,
  Y: 10
};

var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 35;
var barHeight = 150;

var drawRect = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color || '#000000';
  ctx.fillRect(x, y, width, height);
};

var drawText = function (ctx, text, x, y, font, color) {
  font = font || '16px PT Mono';
  ctx.fillStyle = color || '#000000';
  ctx.fillText(text, x, y);
};


var getMaxTime = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getRandomBlue = function () {
  return 'hsl(240,' + Math.random().toFixed(2) * 100 + '%,50%)';
};

window.renderStatistics = function (ctx, players, times) {
  drawRect(ctx, Cloud.X + GAP, Cloud.Y + GAP, Cloud.WIDTH, Cloud.HEIGHT, 'rgba(0, 0, 0, 0.7)');
  drawRect(ctx, Cloud.X, Cloud.Y, Cloud.WIDTH, Cloud.HEIGHT, '#ffffff');
  drawText(ctx, 'Ура вы победили!', Cloud.X + GAP * 5, Cloud.Y + GAP * 2);
  drawText(ctx, 'Список результатов:', Cloud.X + GAP * 5, Cloud.Y + FONT_GAP + GAP * 3);

  ctx.fillStyle = '#000';

  var maxTime = getMaxTime(times);

  for (var i = 0; i < players.length; i++) {
    drawText(ctx, Math.trunc(times[i]), Cloud.X + GAP + FONT_GAP + (BAR_WIDTH + TEXT_WIDTH) * i, Cloud.HEIGHT - (3 * GAP) - (barHeight * times[i]) / maxTime);
    drawText(ctx, players[i], Cloud.X + GAP + FONT_GAP + (BAR_WIDTH + TEXT_WIDTH) * i, Cloud.HEIGHT);
    drawRect(ctx, Cloud.X + GAP + FONT_GAP + (BAR_WIDTH + TEXT_WIDTH) * i, Cloud.HEIGHT - 20, BAR_WIDTH, -(barHeight * times[i]) / maxTime, players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomBlue());
  }
};
