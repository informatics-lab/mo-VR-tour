import React from 'react';
import {
  View,
  Text,
  Video,
  Animated
} from 'react-vr';
import VideoPlayer from './elements/VideoPlayer.js';
import { Easing } from 'react-native';
import CylindricalPanel from 'CylindricalPanel';

const MAX_TEXTURE_WIDTH = 4096;
const MAX_TEXTURE_HEIGHT = 720;
const degreesToPixels = degrees => -(degrees / 360) * MAX_TEXTURE_WIDTH;
const PPM = 1 / (2 * Math.PI * 3) * MAX_TEXTURE_WIDTH;

class VideoPanel extends React.Component {
  constructor() {
    super();
    this.state = {fadeIn: new Animated.Value(0)};
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeIn,
      {
        toValue: 1,
        duration: 5000,
        easing: Easing.ease
      }
    ).start();
  }
  render() {
    return (
      <View>
              <Animated.View
                style={{
                  flex: 1,
                  flexDirection: 'column',
                  width: 9 * PPM,
                  height: 5 * PPM,
                  alignItems: 'stretch',
                  backgroundColor: 'black',
                  opacity: this.state.fadeIn,
                  layoutOrigin: [0.5, 0.5],
                  transform: [{translate: [0, 0, -7]}]
                }}>
                <VideoPlayer/>
              </Animated.View>
      </View>

    )
  }
}

module.exports = VideoPanel;
