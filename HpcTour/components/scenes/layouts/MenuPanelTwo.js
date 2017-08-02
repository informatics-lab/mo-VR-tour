import React from 'react';
import {
  Animated,
  asset,
  Image,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';
import TelephoneExchangeMenuButton from './elements/TelephoneExchangeMenuButton.js';
import HpcVideoMenuButton from './elements/HpcVideoMenuButton.js';
import MenuItemTitle from './elements/MenuItemTitle.js';
import MenuLeftNavButton from './elements/MenuLeftNavButton.js';
import MenuRightNavButton from './elements/MenuRightNavButton.js';

class MenuPanelTwo extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: 1,
          width: 2.6,
        }}>
        <View
          style={{
            height: 1,
            width: 1.2,
            margin: 0.1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TelephoneExchangeMenuButton
            handleMenuSelect={this.props.handleMenuSelect}/>
          <MenuItemTitle text={'Telephone Exchange'}/>
        </View>
        <View
          style={{
            height: 1,
            width: 1.2,
            margin: 0.1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <HpcVideoMenuButton
            handleMenuSelect={this.props.handleMenuSelect}/>
          <MenuItemTitle text={'HPC Video'}/>
        </View>
      </View>
    )
  }
}

module.exports = MenuPanelTwo;
