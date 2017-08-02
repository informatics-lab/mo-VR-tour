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
      menuFaderOne: new Animated.Value(1),
      menuFaderTwo: new Animated.Value(0)
    }
  }

  handleClick() {
    {(this.state.activePanel) ? (
      this.panelOneToTwo()
    ) : (
      this.panelTwoToOne()
    )};
  }

  render() {
    return (
      <View>
        <Pano source={asset('metoffice-building.jpg')}/>
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
          <Animated.View
            style={{
              opacity: this.state.menuFaderTwo
            }}>
            <MenuLeftNavButton
              handleClick={this.handleClick.bind(this)}/>
          </Animated.View>
          <View>
            {this.state.activePanel ? (
              <Animated.View
                style={{
                  opacity: this.state.menuFaderOne
                }}>
                  <MenuPanelOne
                    handleMenuSelect={this.props.handleMenuSelect}/>
              </Animated.View>
            ) : (
              <Animated.View
                style={{
                  opacity: this.state.menuFaderTwo
                }}>
                  <MenuPanelTwo
                    handleMenuSelect={this.props.handleMenuSelect}/>
              </Animated.View>
            )}
          </View>
          <Animated.View
            style={{
              opacity: this.state.menuFaderOne
            }}>
            <MenuRightNavButton
              handleClick={this.handleClick.bind(this)}/>
          </Animated.View>
        </View>
      </View>
    )
  }

  panelOneToTwo() {
    Animated.timing(
      this.state.menuFaderOne, {
        toValue: 0,
      }
    ).start(() => {
      this.setState({
        activePanel: !this.state.activePanel
      }, () => {
        Animated.timing(
          this.state.menuFaderTwo, {
            toValue: 1,
          }
        ).start()
      })
    })
  }

  panelTwoToOne() {
    Animated.timing(
      this.state.menuFaderTwo, {
        toValue: 0,
      }
    ).start(() => {
      this.setState({
        activePanel: !this.state.activePanel
      }, () => {
        Animated.timing(
          this.state.menuFaderOne, {
            toValue: 1,
          }
        ).start()
      })
    })
  }
}

module.exports = Menu;
