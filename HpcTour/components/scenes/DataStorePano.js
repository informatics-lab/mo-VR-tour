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
        <Pano source={asset('DataStore.jpg')}/>
        <VideoPanel/>
      </View>
    )
  }
}

module.exports = DataStorePano;
