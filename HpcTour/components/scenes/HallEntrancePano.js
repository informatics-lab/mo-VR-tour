import React from 'react';
import {
  asset,
  Pano,
  View,
} from 'react-vr';
import VoiceoverButton from './layouts/elements/VoiceoverButton.js';

const mainframe_voiceover = asset('mainframe_full.wav');

class HallEntrancePano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('HallEntrance_nadir.jpg')}
          style={{
            transform: [{rotateY: -90}]
          }}/>
        <VoiceoverButton
          voiceover={mainframe_voiceover}
          position={[-1, 0, -3]}/>
      </View>
    )
  }
}

module.exports = HallEntrancePano;
