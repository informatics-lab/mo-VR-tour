import React from 'react';
import {
  asset,
  Image,
  VrButton
} from 'react-vr';

class DataStoreMenuButton extends React.Component {
  render() {
    return (
      <VrButton
        onClick={() => this.props.handleMenuSelect(2)}>
        <Image
          source={asset('DataStoreMenuScreenshot.png')}
          style={{
            width: 1.096,
            height: 0.69,
            borderColor: 'greenyellow',
            borderWidth: 0.025
          }}
        />
      </VrButton>
    )
  }
}

module.exports = DataStoreMenuButton;
