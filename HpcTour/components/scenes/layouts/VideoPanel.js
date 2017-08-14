import React from 'react';
import {
  View,
  Text,
  Video,
  Animated
} from 'react-vr';
import VideoPlayer from './elements/VideoPlayer.js';
import { Easing } from 'react-native';


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
      <Animated.View
        style={{
          flex: 1,
          flexDirection: 'column',
          width: 9,
          height: 5,
          alignItems: 'stretch',
          backgroundColor: 'black',
          opacity: this.state.fadeIn,
          layoutOrigin: [0.5, 0.5],
          transform: [{translate: [0, 0, -7]}]
        }}>
        <VideoPlayer/>
      </Animated.View>
    )
  }
}

module.exports = VideoPanel;
