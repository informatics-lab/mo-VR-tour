import React from 'react';
import {
  Animated,
  asset,
  Image,
  Pano,
  View,
} from 'react-vr';
import MenuPanelOne from './layouts/MenuPanelOne.js';
import MenuPanelTwo from './layouts/MenuPanelTwo.js';
import CylindricalPanel from 'CylindricalPanel';

const MAX_TEXTURE_WIDTH = 4096;
const MAX_TEXTURE_HEIGHT = 720;
const degreesToPixels = degrees => -(degrees / 360) * MAX_TEXTURE_WIDTH;
const PPM = 1 / (2 * Math.PI * 3) * MAX_TEXTURE_WIDTH;

class Menu extends React.Component {
  constructor() {
    super();
    this.state={
      panelArray: [0, 1],
      activePanel: 0,
      menuFader: new Animated.Value(1),
    }
  }

  render() {
    return (
      <View>
        <Pano source={asset('metoffice-building.jpg')}/>
        <CylindricalPanel
          layer={{
            height: MAX_TEXTURE_HEIGHT,
            width: MAX_TEXTURE_WIDTH,
            density: MAX_TEXTURE_WIDTH
          }}
          style={{
            position: 'absolute'
          }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: MAX_TEXTURE_HEIGHT,
            width: MAX_TEXTURE_WIDTH
          }}>
        <Image source={asset('mo-logo-solid.png')}
          style={this.props.styles.moIcon}
        />
        <View style={this.props.styles.menuContainer}>
          <View>
            {(this.state.activePanel === 0) ? (
              <Animated.View
                style={{opacity: this.state.menuFader}}>
                  <MenuPanelOne
                    handleMenuSelect={this.props.handleMenuSelect}
                    handleClick={this.goToNextPanel.bind(this)}
                    styles={this.props.styles}/>
              </Animated.View>
            ) : (
              <Animated.View
                style={{opacity: this.state.menuFader}}>
                  <MenuPanelTwo
                    handleMenuSelect={this.props.handleMenuSelect}
                    handleClick={this.goToPrevPanel.bind(this)}
                    styles={this.props.styles}/>
              </Animated.View>
            )}
          </View>
        </View>
        </View>
        </CylindricalPanel>
      </View>
    )
  }

  isFirstPanel() {
    return(this.state.activePanel === this.state.panelArray[0]);
  }

  isLastPanel() {
    i = this.state.panelArray.length - 1;
    return(this.state.activePanel === this.state.panelArray[i]);
  }

  goToNextPanel() {
    Animated.timing(
      this.state.menuFader, {
        toValue: 0
      }
    ).start(() => {
      (this.isLastPanel()) ? (
        this.setState({
          activePanel: this.state.panelArray[0]
        })
      ) : (
        this.setState({
          activePanel: this.state.panelArray[this.state.activePanel + 1]
        })
      )
      Animated.timing(
        this.state.menuFader, {
          toValue: 1
        }
      ).start()
    });
  }

  goToPrevPanel() {
    Animated.timing(
      this.state.menuFader, {
        toValue: 0
      }
    ).start(() => {
      (this.isFirstPanel()) ? (
        this.setState({
          activePanel: this.state.panelArray[this.state.panelArray.length - 1]
        })
      ) : (
        this.setState({
          activePanel: this.state.panelArray[this.state.activePanel - 1]
        })
      )
      Animated.timing(
        this.state.menuFader, {
          toValue: 1
        }
      ).start()
    });
  }

}

module.exports = Menu;
