import React from 'react';
import {
  VrButton,
  asset,
  Image,
  Animated
} from 'react-vr'
import VideoPanel from './VideoPanel.js'

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
            onEnter={() => this.props.fadeIn()}>
            <Animated.View
             style={{
               flexDirection: 'row',
               alignItems: 'center',
               opacity: this.state.opacityAnim
             }}>
              <VideoPanel/>
             </Animated.View>
          </Image>
        </VrButton>
    )
  }
}

module.exports = PointOfInterest;
