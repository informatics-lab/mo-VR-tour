import React from 'react';
import {
  View,
  Video,
  VideoControl,
  MediaPlayerState,
  asset
} from 'react-vr';

class VideoPlayer extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    playerState: new MediaPlayerState({autPlay: true, muted: false})
  }
}
  render() {
    return (
      <View
        style={{margin: 0.1, height: 5}}>
        <Video
          style={{height: 5, width: 8}}
          source={asset('test.mp4')}
          playerState={this.state.playerState}/>
        <VideoControl
          style={{height: 0.2, width: 8}}
          playerState={this.state.playerState}/>
        </View>

    )
  }
}

module.exports = VideoPlayer
