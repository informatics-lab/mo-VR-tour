import React from 'react';
import {
  Animated,
  asset,
  Image,
  View,
  VrButton
} from 'react-vr';
import { Easing } from 'react-native';

const MAX_TEXTURE_WIDTH = 4096;
const MAX_TEXTURE_HEIGHT = 720;
const degreesToPixels = degrees => -(degrees / 360) * MAX_TEXTURE_WIDTH;
const PPM = 1 / (2 * Math.PI * 3) * MAX_TEXTURE_WIDTH;

class HpcVideoMenuButton extends React.Component {
  constructor() {
    super();
    this.state={
      borderColorAnim: new Animated.Value(0),
      borderWidthAnim: new Animated.Value(0.025 * PPM),
    }
  }

  handleEnterBorderAnim() {
    Animated.parallel([
      Animated.timing(
        this.state.borderColorAnim, {
          toValue: 1,
          easing: Easing.out(Easing.exp)
        }
      ),
      Animated.timing(
        this.state.borderWidthAnim, {
          toValue: 0.03 * PPM,
          easing: Easing.out(Easing.exp)
        }
      )]
    ).start();
  }

  handleExitBorderAnim() {
    Animated.parallel([
      Animated.timing(
        this.state.borderColorAnim, {
          toValue: 2,
          easing: Easing.out(Easing.exp)
        }
      ),
      Animated.timing(
        this.state.borderWidthAnim, {
          toValue: 0.025,
          easing: Easing.out(Easing.exp)
        }
      )]
    ).start();
  }

  render() {
    return (
      <VrButton
        onClick={() => this.props.handleMenuSelect(4)}
        onEnter={() => this.handleEnterBorderAnim()}
        onExit={() => this.handleExitBorderAnim()}>
        <Animated.View
          style={{
            width: 0.914 * PPM,
            height: 0.608 * PPM,
            borderColor: this.state.borderColorAnim.interpolate({
              inputRange: [0, 1, 2],
              outputRange: ['greenyellow', 'white', 'greenyellow']
            }),
            borderWidth: this.state.borderWidthAnim,
            backgroundColor: 'black'
          }}
        />
      </VrButton>
    )
  }
}

module.exports = HpcVideoMenuButton;
