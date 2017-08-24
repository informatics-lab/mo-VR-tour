import React from 'react';
import {
  asset,
  Pano,
  View,
} from 'react-vr';

class HallEntrancePano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('HallEntrance.jpg')}/>
      </View>
    )
  }
}

module.exports = HallEntrancePano;
