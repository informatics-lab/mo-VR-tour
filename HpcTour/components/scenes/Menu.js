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
        <View style={this.props.styles.menuContainer}>
          <View>
            {this.state.activePanel ? (
              <Animated.View
                style={{opacity: this.state.menuFaderOne}}>
                  <MenuPanelOne
                    handleMenuSelect={this.props.handleMenuSelect}
                    handleClick={this.handleClick.bind(this)}
                    styles={this.props.styles}/>
              </Animated.View>
            ) : (
              <Animated.View
                style={{opacity: this.state.menuFaderTwo}}>
                  <MenuPanelTwo
                    handleMenuSelect={this.props.handleMenuSelect}
                    handleClick={this.handleClick.bind(this)}
                    styles={this.props.styles}/>
              </Animated.View>
            )}
          </View>
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
