import React from 'react';
import {
  View
} from 'react-vr';
import MenuButton from './elements/MenuButton.js';
import MenuItemTitle from './elements/MenuItemTitle.js';
import MenuLeftNavButton from './elements/MenuLeftNavButton.js';
import MenuRightNavButton from './elements/MenuRightNavButton.js';
import styles from '../../styles.js';

class MenuPanelOne extends React.Component {
  render() {
    return (
      <View style={styles.menuPanel}>
        <View>
          <MenuLeftNavButton handleClick={this.props.handleClick}/>
        </View>
        <View style={styles.menuItem}>
          <MenuButton
            handleMenuSelect={() => this.props.handleMenuSelect(1)}
            source={'CrayMenuScreenshot.png'}/>
          <MenuItemTitle text={'Cray Supercomputers'}/>
        </View>
        <View style={styles.menuItem}>
          <MenuButton
            handleMenuSelect={() => this.props.handleMenuSelect(2)}
            source={'DataStoreMenuScreenshot.png'}/>
          <MenuItemTitle text={'Data Storage'}/>
        </View>
        <View>
          <MenuRightNavButton handleClick={this.props.handleClick}/>
        </View>
      </View>
    )
  }
}

module.exports = MenuPanelOne;
