import React from 'react';
import {
  asset,
  MediaPlayerState,
  Video,
  VideoControl,
  View,
} from 'react-vr';
import styles from '../../../styles.js';

class VideoPlayer extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    playerState: new MediaPlayerState({autoPlay: true, muted: false, loop: true})
  }
}
  render() {
    return (
      <View style={styles.videoContainer}>
        <Video
          style={styles.videoPlayer}
          source={asset('test.mp4')}
          playerState={this.state.playerState}/>
        <VideoControl
          style={[styles.videoPlayer, {height: 0.2}]}
          playerState={this.state.playerState}/>
      </View>
    )
  }
}

module.exports = VideoPlayer;
