import React from 'react';
import {
  asset,
  Pano,
  View,
} from 'react-vr';

class CrayPano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('Cray.jpg')}/>
      </View>
    )
  }
}

module.exports = CrayPano;
