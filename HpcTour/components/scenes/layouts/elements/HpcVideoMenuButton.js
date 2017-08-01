import React from 'react';
import {
  asset,
  Image,
  View,
  VrButton
} from 'react-vr';

class HpcVideoMenuButton extends React.Component {
  render() {
    return (
      <VrButton
        onClick={() => this.props.handleMenuSelect(4)}>
        <View
          style={{
            width: 0.914,
            height: 0.608,
            borderColor: 'greenyellow',
            borderWidth: 0.025,
            backgroundColor: 'black'
          }}
        />
      </VrButton>
    )
  }
}

module.exports = HpcVideoMenuButton;
