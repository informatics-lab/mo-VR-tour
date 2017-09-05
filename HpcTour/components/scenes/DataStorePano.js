import React from 'react';
import {
  asset,
  Pano,
  View
} from 'react-vr';
import VoiceoverButton from './layouts/elements/VoiceoverButton.js';

const data_store_voiceover = asset('data_store.wav');

class DataStorePano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('DataStore_nadir.jpg')}
          style={{
            transform: [{rotateY: 180}]
          }}/>
        <VoiceoverButton
          voiceover={data_store_voiceover}
          position={[0, 1, -3]}/>
      </View>
    )
  }
}

module.exports = DataStorePano;
