import React from 'react';
import {
  StyleSheet
} from 'react-vr';
import {
  MAX_TEXTURE_HEIGHT,
  MAX_TEXTURE_WIDTH,
  PPM
} from './constants.js';

styles = StyleSheet.create({
  menuCylinder: {
    alignItems: 'center',
    justifyContent: 'center',
    height: MAX_TEXTURE_HEIGHT,
    width: MAX_TEXTURE_WIDTH
  },
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
    transform: [{translate: [0, 1, -3]}],
    layoutOrigin: [0.5, 0.,5],
    backgroundColor: 'black',
    width: 0.75,
    height: 0.3
  },
  navButton: {
    width: 0.3 * PPM,
    height: 0.3 * PPM
  },
  menuText: {
    fontSize: 0.15 * PPM,
    fontWeight: "500",
    textAlign: 'center'
  },
  moIcon: {
    transform: [{translate: [2048, 0, 0]}],
    layoutOrigin: [0.5, 0.5],
    width: 2 * PPM,
    height: 0.5 * PPM,
    position: 'absolute'
  },
  videoContainer: {
    margin: 0.1,
    height: 5,
    alignItems: 'center'
  },
  videoPlayer: {
    height: 5,
    width: 8,
    alignItems:'center'
  }
});

module.exports = styles;
