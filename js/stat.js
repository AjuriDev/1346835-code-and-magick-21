'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 10;
const FONT_GAP = 10;
const BAR_WIDTH = 40;
const GIST_GAP = 50;
const GIST_HEIGHT = 150;
const BAR_Y = CLOUD_Y + (GAP + FONT_GAP) * 3;

const renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

const getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(
      ctx,
      CLOUD_X + GAP,
      CLOUD_Y + GAP,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );

  ctx.fillStyle = `#000`;

  ctx.font = `16px PT Mono`;
  ctx.textAlign = `center`;

  ctx.fillText(
      `Ура вы победили!`,
      (CLOUD_WIDTH / 2) + CLOUD_X,
      CLOUD_Y + GAP + FONT_GAP
  );

  ctx.fillText(
      `Список результатов: `,
      (CLOUD_WIDTH / 2) + CLOUD_X,
      CLOUD_Y + (GAP + FONT_GAP) * 2
  );

  const maxTime = getMaxElement(times);
  let barSaturation = 20;

  ctx.textAlign = `left`;

  for (let i = 0; i < names.length; i++) {
    barSaturation += 25;
    ctx.fillStyle = `hsl(210, ` + barSaturation + `%, 50%)`;
    if (names[i] === `Вы`) {
      ctx.fillStyle = `rgba(255, 0, 0, 1)`;
    }
    ctx.fillRect(
        CLOUD_X + GIST_GAP + (GIST_GAP + BAR_WIDTH) * i,
        BAR_Y + GIST_HEIGHT + FONT_GAP + GAP,
        BAR_WIDTH,
        -(GIST_HEIGHT * times[i]) / maxTime
    );
    ctx.fillStyle = `#000`;
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + GIST_GAP + (GIST_GAP + BAR_WIDTH) * i,
        BAR_Y + (GIST_HEIGHT - (GIST_HEIGHT * times[i]) / maxTime) + FONT_GAP
    );
    ctx.fillText(
        names[i],
        CLOUD_X + GIST_GAP + (GIST_GAP + BAR_WIDTH) * i,
        BAR_Y + GIST_HEIGHT + (FONT_GAP + GAP) * 2
    );
  }

};
