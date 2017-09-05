import React from 'react';
import {
  asset,
  Pano,
  View,
} from 'react-vr';
import VoiceoverButton from './layouts/elements/VoiceoverButton.js';

const cray_voiceover = asset('cray_supercomputer.wav');

class CrayPano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('Cray_nadir.jpg')}/>
        <VoiceoverButton
          voiceover={cray_voiceover}
          position={[-1, 0.5, -3]}/>
      </View>
    )
  }
}

module.exports = CrayPano;
