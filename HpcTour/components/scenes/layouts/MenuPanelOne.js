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
import CrayMenuButton from './elements/CrayMenuButton.js';
import DataStoreMenuButton from './elements/DataStoreMenuButton.js';
import MenuItemTitle from './elements/MenuItemTitle.js';
import MenuLeftNavButton from './elements/MenuLeftNavButton.js';
import MenuRightNavButton from './elements/MenuRightNavButton.js';

class MenuPanelOne extends React.Component {
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
          <CrayMenuButton
            handleMenuSelect={this.props.handleMenuSelect}/>
          <MenuItemTitle text={'Cray Supercomputers'}/>
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
          <DataStoreMenuButton
            handleMenuSelect={this.props.handleMenuSelect}/>
          <MenuItemTitle text={'Data Storage'}/>
        </View>
      </View>
    )
  }
}

module.exports = MenuPanelOne;
