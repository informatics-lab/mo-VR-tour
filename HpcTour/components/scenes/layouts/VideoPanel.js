import React from 'react'
import {
  View,
  Text,
  Video
} from 'react-vr'
// import VideoPlayer from '.elements/VideoPlayer.js'

class VideoPanel extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          width: 9,
          height: 5,
          alignItems: 'stretch',
          backgroundColor: 'black',
          layoutOrigin: [0.5, 0.5]
        }}>
        </View>
    )
  }
}

module.exports = VideoPanel;
