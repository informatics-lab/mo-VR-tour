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
      <View style={this.props.styles.menuPanel}>
        <View>
          <MenuLeftNavButton
            handleClick={this.props.handleClick}/>
        </View>
        <View style={this.props.styles.menuItem}>
          <TelephoneExchangeMenuButton
            handleMenuSelect={this.props.handleMenuSelect}/>
          <MenuItemTitle text={'Telephone Exchange'}/>
        </View>
        <View style={this.props.styles.menuItem}>
          <HpcVideoMenuButton
            handleMenuSelect={this.props.handleMenuSelect}/>
          <MenuItemTitle text={'HPC Video'}/>
        </View>
        <View style={{width: 0.3}}/>
      </View>
    )
  }
}

module.exports = MenuPanelTwo;
