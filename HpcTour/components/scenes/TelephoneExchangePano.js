import React from 'react';
import {
  asset,
  Pano,
  View
} from 'react-vr';
import VoiceoverButton from './layouts/elements/VoiceoverButton.js';

const telephone_exchange_voiceover = asset('telephone_exchange.wav');

class TelephoneExchangePano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('TelephoneExchange_nadir.jpg')}
          style={{
            transform: [{rotateY: 180}]
          }}/>
        <VoiceoverButton
          voiceover={telephone_exchange_voiceover}
          position={[0, 1.5, -3]}/>
      </View>
    )
  }
}

module.exports = TelephoneExchangePano;
