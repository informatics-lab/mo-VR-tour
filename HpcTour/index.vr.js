import React from 'react';
import {
  AppRegistry,
  asset,
  Image,
  Pano,
  View,
} from 'react-vr';
import Menu from './components/scenes/Menu.js';
import CrayPano from './components/scenes/CrayPano.js';
import DataStorePano from './components/scenes/DataStorePano.js';
import TelephoneExchangePano from './components/scenes/TelephoneExchangePano.js';
import HpcVideoPano from './components/scenes/HpcVideoPano.js';

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
            handleMenuSelect={this.handleMenuSelect.bind(this)}/>
        ) : (
          (background === 2) ? (
            <DataStorePano
              handleMenuSelect={this.handleMenuSelect.bind(this)}/>
          ) : (
            (background === 3) ? (
              <TelephoneExchangePano
                handleMenuSelect={this.handleMenuSelect.bind(this)}/>
            ) : (
              (background == 4) ? (
                <HpcVideoPano
                  handleMenuSelect={this.handleMenuSelect.bind(this)}/>
              ) : (
                <Menu
                  handleMenuSelect={this.handleMenuSelect.bind(this)}/>
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
