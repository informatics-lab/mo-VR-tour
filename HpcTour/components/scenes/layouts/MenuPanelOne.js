import React from 'react';
import {
  View
} from 'react-vr';
import MenuButton from './elements/MenuButton.js';
import MenuItemTitle from './elements/MenuItemTitle.js';
import styles from '../../styles.js';

class MenuPanelOne extends React.Component {
  render() {
    return (
      <View style={styles.menuPanel}>
        <View style={styles.menuItem}>
          <MenuButton
            handleMenuSelect={() => this.props.handleMenuSelect(1)}
            source={'CrayMenuScreenshot.png'}/>
          <MenuItemTitle text={'Cray'}/>
        </View>
        <View style={styles.menuItem}>
          <MenuButton
            handleMenuSelect={() => this.props.handleMenuSelect(2)}
            source={'DataStoreMenuScreenshot.png'}/>
          <MenuItemTitle text={'Data Storage'}/>
        </View>
      </View>
    )
  }
}

module.exports = MenuPanelOne;
