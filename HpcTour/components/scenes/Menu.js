import React from 'react';
import {
  Animated,
  asset,
  Image,
  Pano,
  View,
} from 'react-vr';
import {
  MAX_TEXTURE_HEIGHT,
  MAX_TEXTURE_WIDTH
} from '../constants.js';
import MenuPanelOne from './layouts/MenuPanelOne.js';
import MenuPanelTwo from './layouts/MenuPanelTwo.js';
import MenuLeftNavButton from './layouts/elements/MenuLeftNavButton.js';
import MenuRightNavButton from './layouts/elements/MenuRightNavButton.js';
import CylindricalPanel from 'CylindricalPanel';
import styles from '../styles.js';

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
          <View style={styles.menuCylinder}>
            <View style={styles.menuContainer}>
            <View>
              <MenuLeftNavButton handleClick={this.goToPrevPanel.bind(this)}/>
            </View>
            <View>
              {(this.state.activePanel === 0) ? (
              <Animated.View
                style={{opacity: this.state.menuFader}}>
                  <MenuPanelOne
                    handleMenuSelect={this.props.handleMenuSelect}/>
              </Animated.View>
              ) : (
              <Animated.View
                style={{opacity: this.state.menuFader}}>
                  <MenuPanelTwo
                    handleMenuSelect={this.props.handleMenuSelect}/>
              </Animated.View>
              )}
            </View>
            <View>
              <MenuRightNavButton handleClick={this.goToNextPanel.bind(this)}/>
            </View>
          </View>
          <Image source={asset('mo-logo-solid.png')}
            style={styles.moIcon}
            billboarding={'on'}/>
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
