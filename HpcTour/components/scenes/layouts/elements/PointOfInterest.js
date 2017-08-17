import React from 'react';
import {
  Animated,
  asset,
  Image,
  VrButton
} from 'react-vr'

class PointOfInterest extends React.Component {
constructor(props) {
  super();
  this.state = {
    hasFocus: false,
    opacityAnim: new Animated.Value(0)
  };
}

fadeIn() {
  Animated.timing(this.state.opacityAnim, {
    toValue: 1,
    duration: 500,
  }).start();
}

fadeOut() {
  Animated.timing(this.state.opacityAnim, {
    toValue: 1,
    duration: 500,
  }).start();
}
  render() {
    return (
        <VrButton
          style={{
            layoutOrigin: [0.5, 0.5],
            transform: [{
            translate: this.props.position}]
            }}>
          <Image
            source={asset('point.png')}
            style={{
              width: 1,
              height: 1
            }}
            >
            <Animated.View
             style={{
               flexDirection: 'row',
               alignItems: 'center',
               opacity: this.state.opacityAnim
             }}>
             </Animated.View>
          </Image>
        </VrButton>
    )
  }
}

module.exports = PointOfInterest;
