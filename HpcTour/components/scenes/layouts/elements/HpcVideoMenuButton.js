import React from 'react';
import {
  Animated,
  asset,
  Image,
  View,
  VrButton
} from 'react-vr';
import { Easing } from 'react-native';

class HpcVideoMenuButton extends React.Component {
  constructor() {
    super();
    this.state={
      borderColorAnim: new Animated.Value(0),
      borderWidthAnim: new Animated.Value(0.025),
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
          toValue: 0.03,
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
            width: 0.914,
            height: 0.608,
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
