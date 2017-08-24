import React from 'react';
import {
  asset,
  Pano,
  View,
} from 'react-vr';
import BackToMenuButton from './layouts/elements/BackToMenuButton.js'

class HallEntrancePano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('HallEntrance.jpg')}/>
        <BackToMenuButton handleMenuSelect={this.props.handleMenuSelect}/>
      </View>
    )
  }
}

module.exports = HallEntrancePano;
