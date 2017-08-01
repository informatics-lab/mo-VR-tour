import React from 'react';
import {
  asset,
  Image,
  VrButton
} from 'react-vr';

class TelephoneExchangeMenuButton extends React.Component {
  render() {
    return (
      <VrButton
          onClick={() => this.props.handleMenuSelect(3)}>
        <Image
          source={asset('TelephoneExchangeMenuScreenshot.png')}
          style={{
            width: 0.914,
            height: 0.608,
            borderColor: 'white',
            borderWidth: 0.025
          }}
        />
      </VrButton>
    )
  }
}

module.exports = TelephoneExchangeMenuButton;
