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
import {
  MAX_TEXTURE_HEIGHT,
  MAX_TEXTURE_WIDTH,
  degreesToPixels,
  PPM
} from '../../constants.js';
import MenuButton from './elements/MenuButton.js';
import MenuItemTitle from './elements/MenuItemTitle.js';
import MenuLeftNavButton from './elements/MenuLeftNavButton.js';
import MenuRightNavButton from './elements/MenuRightNavButton.js';
import styles from '../../styles.js';

class MenuPanelTwo extends React.Component {
  render() {
    return (
      <View style={styles.menuPanel}>
        <View>
          <MenuLeftNavButton
            handleClick={this.props.handleClick}/>
        </View>
        <View style={styles.menuItem}>
          <MenuButton
            handleMenuSelect={() => this.props.handleMenuSelect(3)}
            source={'TelephoneExchangeMenuScreenshot.png'}/>
          <MenuItemTitle text={'Telephone Exchange'}/>
        </View>
        <View style={styles.menuItem}>
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
