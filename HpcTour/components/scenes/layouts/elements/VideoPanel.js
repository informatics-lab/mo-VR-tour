import React from 'react'
import {
  View,
  Text,
  Video,
  Animated
} from 'react-vr'
import VideoPlayer from './VideoPlayer.js'

class VideoPanel extends React.Component {
constructor() {
  super();
  this.state = {fade: new Animated.Value(0)};
}
componentDidMount() {
  Animated.timing(
    this.state.fade,
    {toValue: 1}
  ).start();
}

  render() {
    return (
      <Animated.View
        style={{
          opacity: this.state.fade,
          flex: 1,
          flexDirection: 'column',
          width: 9,
          height: 5,
          alignItems: 'stretch',
          backgroundColor: 'black',
          layoutOrigin: [0.5, 0.5]
        }}>
        <VideoPlayer/>
      </Animated.View>
    )
  }
}

module.exports = VideoPanel;
