import React from 'react';
import {
  asset,
  Pano,
  View,
} from 'react-vr';
import BackToMenuButton from './layouts/elements/BackToMenuButton.js'
import PointOfInterest from './layouts/elements/PointOfInterest.js'

class CrayPano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('Cray.JPG')}/>
        <BackToMenuButton handleMenuSelect={this.props.handleMenuSelect}/>
      </View>
    )
  }
}

module.exports = CrayPano;
