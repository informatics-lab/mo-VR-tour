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
import MenuButton from './elements/MenuButton.js';
import MenuItemTitle from './elements/MenuItemTitle.js';
import MenuLeftNavButton from './elements/MenuLeftNavButton.js';
import MenuRightNavButton from './elements/MenuRightNavButton.js';

const MAX_TEXTURE_WIDTH = 4096;
const MAX_TEXTURE_HEIGHT = 720;
const degreesToPixels = degrees => -(degrees / 360) * MAX_TEXTURE_WIDTH;
const PPM = 1 / (2 * Math.PI * 3) * MAX_TEXTURE_WIDTH;

class MenuPanelOne extends React.Component {
  render() {
    return (
      <View style={this.props.styles.menuPanel}>
        <View style={{width: 0.3 * PPM}}/>
        <View style={this.props.styles.menuItem}>
          <MenuButton
            handleMenuSelect={() => this.props.handleMenuSelect(1)}
            source={'CrayMenuScreenshot.png'}/>
          <MenuItemTitle text={'Cray Supercomputers'}/>
        </View>
        <View style={this.props.styles.menuItem}>
          <MenuButton
            handleMenuSelect={() => this.props.handleMenuSelect(2)}
            source={'DataStoreMenuScreenshot.png'}/>
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
