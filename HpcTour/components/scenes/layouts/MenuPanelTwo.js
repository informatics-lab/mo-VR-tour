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

class MenuPanelTwo extends React.Component {
  render() {
    return (
      <View style={this.props.styles.menuPanel}>
        <View>
          <MenuLeftNavButton
            handleClick={this.props.handleClick}/>
        </View>
        <View style={this.props.styles.menuItem}>
          <MenuButton
            handleMenuSelect={() => this.props.handleMenuSelect(3)}
            source={'TelephoneExchangeMenuScreenshot.png'}/>
          <MenuItemTitle text={'Telephone Exchange'}/>
        </View>
        <View style={this.props.styles.menuItem}>
          <MenuButton
            handleMenuSelect={() => this.props.handleMenuSelect(4)}
            source={'HpcMenuScreenshot.png'}/>
          <MenuItemTitle text={'HPC Video'}/>
        </View>
        <View style={{width: 0.3 * PPM}}/>
      </View>
    )
  }
}

module.exports = MenuPanelTwo;
