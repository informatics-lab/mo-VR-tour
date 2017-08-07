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
      <View style={this.props.styles.menuPanel}>
        <View style={{width: 0.3}}/>
        <View style={this.props.styles.menuItem}>
          <CrayMenuButton
            handleMenuSelect={this.props.handleMenuSelect}/>
          <MenuItemTitle text={'Cray Supercomputers'}/>
        </View>
        <View style={this.props.styles.menuItem}>
          <DataStoreMenuButton
            handleMenuSelect={this.props.handleMenuSelect}/>
          <MenuItemTitle text={'Data Storage'}/>
        </View>
        <View>
          <MenuRightNavButton
            handleClick={this.props.handleClick}/>
        </View>
      </View>
    )
  }
}

module.exports = MenuPanelOne;
