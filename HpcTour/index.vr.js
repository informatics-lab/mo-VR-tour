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

// TO TURN ON GAZE CONTROLS:
// go to ./vr/client.js and uncomment block in VRInstance.
// This will introduce a cursor that is controlled by orientation of camera
// (ie by looking around)
// rather than by the mouse.

export default class HpcTour extends React.Component {
  styles = StyleSheet.create({
    menuItem: {
      height: 1,
      width: 1.2,
      margin: 0.1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    menuPanel: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: 1,
    },
    menuContainer: {
      height: 1.2,
      width: 3.6,
      layoutOrigin: [0.5, 0.5],
      transform: [{translate: [0, 0, -3]}],
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      backgroundColor: 'black'
    },
    backToMenuButton: {
      layoutOrigin: [0.5, 0.5],
      transform: [{translate: [0, 1, -3]}],
      backgroundColor: 'black',
      width: 0.75,
      height: 0.3
    }
  })

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
            styles={this.styles}/>
        ) : (
          (background === 2) ? (
            <DataStorePano
              handleMenuSelect={this.handleMenuSelect.bind(this)}
              styles={this.styles}/>
          ) : (
            (background === 3) ? (
              <TelephoneExchangePano
                handleMenuSelect={this.handleMenuSelect.bind(this)}
                styles={this.styles}/>
            ) : (
              (background == 4) ? (
                <HpcVideoPano
                  handleMenuSelect={this.handleMenuSelect.bind(this)}
                  styles={this.styles}/>
              ) : (
                <Menu
                  handleMenuSelect={this.handleMenuSelect.bind(this)}
                  styles={this.styles}/>
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
