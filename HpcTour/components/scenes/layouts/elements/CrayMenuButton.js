import React from 'react';
import {
  asset,
  Image,
  VrButton
} from 'react-vr';

class CrayMenuButton extends React.Component {
  render() {
    return (
      <VrButton
        onClick={() => this.props.handleMenuSelect(1)}>
        <Image
          source={asset('CrayMenuScreenshot.png')}
          style={{
            width: 1.0502,
            height: 0.722,
            borderColor: 'white',
            borderWidth: 0.025
          }}
        />
      </VrButton>
    )
  }
}

module.exports = CrayMenuButton;
