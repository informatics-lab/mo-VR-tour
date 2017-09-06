import React from 'react';
import {
  asset,
  Pano,
  View
} from 'react-vr';
import VideoPanel from './layouts/VideoPanel.js'

class DataStorePano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('DataStore_small.jpg')}/>
      </View>
    )
  }
}

module.exports = DataStorePano;
