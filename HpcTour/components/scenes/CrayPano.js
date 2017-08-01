import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';
import BackToMenuButton from './layouts/elements/BackToMenuButton.js'

class CrayPano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('Cray.jpg')}/>
        <BackToMenuButton
          position={[0, 1, -3]}
          handleMenuSelect={this.props.handleMenuSelect}/>
      </View>
    )
  }
}

module.exports = CrayPano;
