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
import MenuLeftNavButton from './layouts/elements/MenuLeftNavButton.js';
import MenuRightNavButton from './layouts/elements/MenuRightNavButton.js';
import MenuPanelOne from './layouts/MenuPanelOne.js';
import MenuPanelTwo from './layouts/MenuPanelTwo.js';

class Menu extends React.Component {
  constructor() {
    super();
    this.state={
      activePanel: true,
    }
  }

  handleClick() {
    this.setState({
      activePanel: !this.state.activePanel
    })
  }

  render() {
    return (
      <View>
        <Pano source={asset('metoffice-building.jpg')}/>
        {this.state.activePanel ? (
          <View
            style={{
              height: 1.2,
              width: 3.6,
              layoutOrigin: [0.5, 0.5],
              transform: [{translate: [0, 0, -3]}],
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: 'black'
            }}>
            <View>
              <MenuLeftNavButton
                handleClick={this.handleClick.bind(this)}/>
            </View>
            <View>
                <MenuPanelOne
                  handleMenuSelect={this.props.handleMenuSelect}/>
            </View>
            <View>
              <MenuRightNavButton
                handleClick={this.handleClick.bind(this)}/>
            </View>
          </View>
        ) : (
          <View
            style={{
              height: 1.2,
              width: 3.6,
              layoutOrigin: [0.5, 0.5],
              transform: [{translate: [0, 0, -3]}],
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: 'black'
            }}>
            <View
              style={{
              }}>
              <MenuLeftNavButton
                handleClick={this.handleClick.bind(this)}/>
            </View>
            <View
              style={{
                marginBottom: 0.1,
                marginTop: 0.1
              }}>
                <MenuPanelTwo
                  handleMenuSelect={this.props.handleMenuSelect}/>
            </View>
            <View>
              <MenuRightNavButton
                handleClick={this.handleClick.bind(this)}/>
            </View>
          </View>
        )}
      </View>
    )
  }
}

module.exports = Menu;
