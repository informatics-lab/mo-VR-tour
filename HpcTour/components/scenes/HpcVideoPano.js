import React from 'react';
import {
  asset,
  VideoPano,
  View,
} from 'react-vr';
import BackToMenuButton from './layouts/elements/BackToMenuButton.js'

class HpcVideoPano extends React.Component {
  render() {
    return (
      <View>
        <VideoPano source={asset('LightsUp_er.MP4')}/>
        <BackToMenuButton
          position={[0, 1, -3]}
          handleMenuSelect={this.props.handleMenuSelect}/>
      </View>
    )
  }
}

module.exports = HpcVideoPano;
