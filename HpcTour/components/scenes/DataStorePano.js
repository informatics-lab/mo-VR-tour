import React from 'react';
import {
  asset,
  Pano,
  View
} from 'react-vr';
import BackToMenuButton from './layouts/elements/BackToMenuButton.js'
import PointOfInterest from './layouts/elements/PointOfInterest.js'
import VideoPlayer from './layouts/elements/VideoPlayer.js'
import VideoPanel from './layouts/VideoPanel.js'

class DataStorePano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('DataStore.jpg')}/>
        <BackToMenuButton handleMenuSelect={this.props.handleMenuSelect}/>
        <PointOfInterest
          position={[0, 0, 6]}/>
        <VideoPanel/>
      </View>
    )
  }
}

module.exports = DataStorePano;
