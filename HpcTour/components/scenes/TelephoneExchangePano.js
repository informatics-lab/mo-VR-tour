import React from 'react';
import {
  asset,
  Pano,
  View
} from 'react-vr';

class TelephoneExchangePano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('TelephoneExchange_nadir.jpg')}
          style={{
            transform: [{rotateY: 180}]
          }}/>
      </View>
    )
  }
}

module.exports = TelephoneExchangePano;
