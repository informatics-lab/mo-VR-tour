"use strict";

// Constants for the Cylindrical Panel.
// Items placed on the panel use pixels as units.
const MAX_TEXTURE_WIDTH = 4096;
const MAX_TEXTURE_HEIGHT = 720;
const degreesToPixels = degrees => -(degrees / 360) * MAX_TEXTURE_WIDTH;
const PPM = 1 / (2 * Math.PI * 3) * MAX_TEXTURE_WIDTH;

module.exports = {
  MAX_TEXTURE_WIDTH: MAX_TEXTURE_WIDTH,
  MAX_TEXTURE_HEIGHT: MAX_TEXTURE_HEIGHT,
  degreesToPixels: degreesToPixels,
  PPM: PPM
};
