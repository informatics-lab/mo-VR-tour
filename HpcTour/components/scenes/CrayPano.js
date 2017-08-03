import React from 'react';
import {
  asset,
  Pano,
  View,
} from 'react-vr';
import BackToMenuButton from './layouts/elements/BackToMenuButton.js'

class CrayPano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('Cray.jpg')}/>
        <BackToMenuButton
          handleMenuSelect={this.props.handleMenuSelect}
          styles={this.props.styles}/>
      </View>
    )
  }
}

module.exports = CrayPano;
