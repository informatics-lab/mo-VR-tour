import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';
import {VrHeadModel} from 'react-vr';

class BackToMenuButton extends React.Component {
  constructor() {
    super();
    this.state={
      rotation: VrHeadModel.rotation()
    }
  }
  render() {
    return (
      <VrButton
        style={this.props.styles.backToMenuButton}
        onClick={() => this.props.handleMenuSelect(0)}>
        <Text
          style={{
            fontSize: 0.2,
            textAlign: 'center'
          }}>
          Menu
        </Text>
      </VrButton>
    )
  }
}

module.exports = BackToMenuButton;
