import React from 'react';
import {
  AppRegistry,
  asset,
  Image,
  Pano,
  View,
} from 'react-vr';
import Menu from './components/scenes/layouts/Menu.js';
import CrayPano from './components/scenes/CrayPano.js';
import DataStorePano from './components/scenes/DataStorePano.js';
import TelephoneExchangePano from './components/scenes/TelephoneExchangePano.js';

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
              <Menu
                handleMenuSelect={this.handleMenuSelect.bind(this)}/>
            )
          )
        )
      }
      </View>
    )
  }
};

AppRegistry.registerComponent('HpcTour', () => HpcTour);
