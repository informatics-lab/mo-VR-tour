import React from 'react';
import {
  Text,
  VrButton
} from 'react-vr';
import CylindricalPanel from 'CylindricalPanel';

class BackToMenuButton extends React.Component {
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
