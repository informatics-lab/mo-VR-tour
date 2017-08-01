import React from 'react';
import {
  asset,
  Pano,
  View
} from 'react-vr';
import BackToMenuButton from './layouts/elements/BackToMenuButton.js'

class TelephoneExchangePano extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('TelephoneExchange.jpg')}/>
        <BackToMenuButton
          position={[0, 1, -3]}
          handleMenuSelect={this.props.handleMenuSelect}/>
      </View>
    )
  }
}

module.exports = TelephoneExchangePano;
