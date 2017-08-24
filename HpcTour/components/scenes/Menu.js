import React from 'react';
import {
  Animated,
  asset,
  Image,
  Pano,
  View,
  Text
} from 'react-vr';
import Easing from 'react-native';
import {
  MAX_TEXTURE_HEIGHT,
  MAX_TEXTURE_WIDTH,
  PPM
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
      showWelcome: new Animated.Value(1),
      showMenu: new Animated.Value(0),
      menuFader: new Animated.Value(1)
    }
  }

  componentDidMount() {
    Animated.sequence([
      Animated.timing(
        this.state.showWelcome,
        {
          toValue: 0,
          duration: 1000,
          easing: Easing.ease,
          delay: 3000
        }
      ),
      Animated.timing(
        this.state.showMenu,
        {
          toValue: 1,
          duration: 1000,
          easing: Easing.ease
        }
      )
    ]).start();
  }

  render() {
    return (
      <View>
        <Pano source={asset('metoffice_building_nadir.jpg')}/>
        <CylindricalPanel
          layer={{
            height: MAX_TEXTURE_HEIGHT,
            width: MAX_TEXTURE_WIDTH,
            density: MAX_TEXTURE_WIDTH
          }}
          style={{position: 'absolute'}}>
          <View style={styles.menuCylinder}>
            <Animated.View style={[
              styles.welcomeTextContainer,
              {opacity: this.state.showWelcome}
            ]}>
              <Text
                style={styles.welcomeText}>
                  Welcome to Met Office VR Tour
              </Text>
            </Animated.View>
            <Animated.View style={[
              styles.menuContainer,
              {opacity: this.state.showMenu}
            ]}>
            <View>
              <MenuLeftNavButton handleClick={this.goToPrevPanel.bind(this)}/>
            </View>
            <View>
              {(this.state.activePanel === 0) ? (
              <Animated.View
                style={{opacity: this.state.menuFader}}>
                  <MenuPanelOne handleMenuSelect={this.props.handleMenuSelect}/>
              </Animated.View>
              ) : (
              <Animated.View
                style={{opacity: this.state.menuFader}}>
                  <MenuPanelTwo handleMenuSelect={this.props.handleMenuSelect}/>
              </Animated.View>
              )}
            </View>
            <View>
              <MenuRightNavButton handleClick={this.goToNextPanel.bind(this)}/>
            </View>
          </Animated.View>
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
