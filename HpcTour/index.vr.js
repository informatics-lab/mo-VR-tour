import React from 'react';
import {
  AppRegistry,
  asset,
  Image,
  Pano,
  StyleSheet,
  View,
} from 'react-vr';
import Menu from './components/scenes/Menu.js';
import CrayPano from './components/scenes/CrayPano.js';
import DataStorePano from './components/scenes/DataStorePano.js';
import TelephoneExchangePano from './components/scenes/TelephoneExchangePano.js';
import HpcVideoPano from './components/scenes/HpcVideoPano.js';
import styles from './components/styles.js';
import CylindricalPanel from 'CylindricalPanel';


// Constants for the Cylindrical Panel.
// Items placed on the panel use pixels as units.
// To convert metric to pixels, multiply by PPM.
const MAX_TEXTURE_WIDTH = 4096;
const MAX_TEXTURE_HEIGHT = 720;
const degreesToPixels = degrees => -(degrees / 360) * MAX_TEXTURE_WIDTH;
const PPM = 1 / (2 * Math.PI * 3) * MAX_TEXTURE_WIDTH;

// TO TURN ON GAZE CONTROLS:
// go to ./vr/client.js and uncomment block in VRInstance.
// This will introduce a cursor that is controlled by orientation of camera
// (ie by looking around)
// rather than by the mouse.


export default class HpcTour extends React.Component {
  constructor() {
    super();
    this.state={
      background: 0,
    }
  }

  handleMenuSelect(option) {
    this.setState({
      background: option
    })
  }

  render() {
    background = this.state.background;
    return (
      <View>
      {
        (background === 1) ? (
          <CrayPano
            handleMenuSelect={this.handleMenuSelect.bind(this)}
            styles={styles}/>
        ) : (
          (background === 2) ? (
            <DataStorePano
              handleMenuSelect={this.handleMenuSelect.bind(this)}
              styles={styles}/>
          ) : (
            (background === 3) ? (
              <TelephoneExchangePano
                handleMenuSelect={this.handleMenuSelect.bind(this)}
                styles={styles}/>
            ) : (
              (background == 4) ? (
                <HpcVideoPano
                  handleMenuSelect={this.handleMenuSelect.bind(this)}
                  styles={styles}/>
              ) : (
                <Menu
                  handleMenuSelect={this.handleMenuSelect.bind(this)}
                  styles={styles}/>
              )
            )
          )
        )
      }
      </View>
    )
  }
};

AppRegistry.registerComponent('HpcTour', () => HpcTour);
