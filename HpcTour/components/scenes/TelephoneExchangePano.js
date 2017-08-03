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
          handleMenuSelect={this.props.handleMenuSelect}
          styles={this.props.styles}/>
      </View>
    )
  }
}

module.exports = TelephoneExchangePano;
