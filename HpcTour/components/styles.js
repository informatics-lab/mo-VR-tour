import React from 'react';
import {
  StyleSheet
} from 'react-vr';

const MAX_TEXTURE_WIDTH = 4096;
const MAX_TEXTURE_HEIGHT = 720;
const degreesToPixels = degrees => -(degrees / 360) * MAX_TEXTURE_WIDTH;
const PPM = 1 / (2 * Math.PI * 3) * MAX_TEXTURE_WIDTH;

styles = StyleSheet.create({
  menuItem: {
    height: 1 * PPM,
    width: 1.2 * PPM,
    margin: 0.1 * PPM,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 1 * PPM,
  },
  menuContainer: {
    height: 1.2 * PPM,
    width: 3.6 * PPM,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'black'
  },
  backToMenuButton: {
    transform: [{translate: [0, 2, -3]}],
    backgroundColor: 'black',
    width: 0.75,
    height: 0.3
  },
  moIcon: {
    transform: [{translate: [2048, 0, 0]}],
    layoutOrigin: [0.5, 0.5],
    width: 2 * PPM,
    height: 0.5 * PPM,
    position: 'absolute'
  }
});

module.exports = styles;
