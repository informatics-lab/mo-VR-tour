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
  backToMenuButton: {
    transform: [{translate: [0, 1, -3]}],
    layoutOrigin: [0.5, 0.,5],
    backgroundColor: 'black',
    width: 0.75,
    height: 0.3
  },
  infoButton: {
    layoutOrigin: [0.5, 0.5],
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5/PPM,
    borderWidth: 2/PPM,
    borderColor: 'white',
    width: 0.5,
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  infoButtonImage: {
    width: 0.3,
    height: 0.4
  },
  menuContainer: {
    height: 1.2 * PPM,
    width: 3.6 * PPM,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
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
  menuText: {
    fontSize: 0.15 * PPM,
    fontWeight: "500",
    textAlign: 'center'
  },
  menuPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 1 * PPM,
  },
  moIcon: {
    transform: [{translate: [2048, 0, 0]}],
    layoutOrigin: [0.5, 0.5],
    width: 2 * PPM,
    height: 0.5 * PPM,
    position: 'absolute'
  },
  navButton: {
    width: 0.3 * PPM,
    height: 0.3 * PPM
  },
  videoPlayer: {
    height: 5,
    width: 8,
    alignItems:'center'
  },
  welcomeText: {
    fontSize: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '400'
  },
  welcomeTextContainer: {
    width: 3 * PPM,
    margin: 0.1 * PPM,
    flexDirection: 'column',
    alignItems: 'stretch',
    position: 'absolute',
    backgroundColor: 'transparent',
  }
});

module.exports = styles;
