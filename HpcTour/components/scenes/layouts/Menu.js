import React from 'react';
import {
  Animated,
  asset,
  Pano,
  Text,
  View
} from 'react-vr';
import CrayMenuButton from './elements/CrayMenuButton.js';
import DataStoreMenuButton from './elements/DataStoreMenuButton.js';
import TelephoneExchangeMenuButton from './elements/TelephoneExchangeMenuButton.js';
import MenuItemTitle from './elements/MenuItemTitle.js';

class Menu extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('metoffice-building.jpg')}/>
        <View
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -3]}],
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'space-around',
            width: 5,
            height: 1.1,
            backgroundColor: 'black'
          }}>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <CrayMenuButton
                handleMenuSelect={this.props.handleMenuSelect}/>
              <MenuItemTitle text={'Cray Supercomputers'}/>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <DataStoreMenuButton
              handleMenuSelect={this.props.handleMenuSelect}/>
            <MenuItemTitle text={'Data Storage'}/>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
            }}>
            <TelephoneExchangeMenuButton
              handleMenuSelect={this.props.handleMenuSelect}/>
            <MenuItemTitle text={'Telephone Exchange'}/>
          </View>
        </View>
      </View>
    )
  }
}

module.exports = Menu;
