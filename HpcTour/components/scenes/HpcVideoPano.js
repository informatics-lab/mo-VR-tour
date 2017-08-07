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
          handleMenuSelect={this.props.handleMenuSelect}
          styles={this.props.styles}/>
      </View>
    )
  }
}

module.exports = HpcVideoPano;
