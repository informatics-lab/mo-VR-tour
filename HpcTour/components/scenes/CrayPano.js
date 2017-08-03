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
        <Pano source={asset('Cray.jpg')}/>
        <BackToMenuButton
          position={[0, 1, -3]}
          handleMenuSelect={this.props.handleMenuSelect}/>
        <PointOfInterest
          position={[1, 0.8, -6]}/>
      </View>
    )
  }
}

module.exports = CrayPano;
