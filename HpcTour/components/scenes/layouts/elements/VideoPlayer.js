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
    playerState: new MediaPlayerState({autoPlay: true, muted: false, loop: true})
  }
}
  render() {
    return (
      <View
        style={{margin: 0.1, height: 5, alignItems: 'center'}}>
        <Video
          style={{height: 5, width: 8, alignItems:'center'}}
          source={asset('test.mp4')}
          playerState={this.state.playerState}/>
        <VideoControl
          style={{height: 0.2, width: 8, alignItems: 'center' }}
          playerState={this.state.playerState}/>
      </View>
    )
  }
}

module.exports = VideoPlayer;
