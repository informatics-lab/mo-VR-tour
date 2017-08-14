import React from 'react';
import {
  Text,
  View,
  VrButton
} from 'react-vr';
import {VrHeadModel} from 'react-vr';
import CylindricalPanel from 'CylindricalPanel';

const MAX_TEXTURE_WIDTH = 4096;
const MAX_TEXTURE_HEIGHT = 720;
const degreesToPixels = degrees => -(degrees / 360) * MAX_TEXTURE_WIDTH;
const PPM = 1 / (2 * Math.PI * 3) * MAX_TEXTURE_WIDTH;

class BackToMenuButton extends React.Component {
  constructor() {
    super();
    this.state={
      rotation: VrHeadModel.rotation()
    }
  }
  render() {
    return (
      <CylindricalPanel
        layer={{
          height: MAX_TEXTURE_HEIGHT,
          width: MAX_TEXTURE_WIDTH,
          density: MAX_TEXTURE_WIDTH
        }}
        style={{
          position: 'absolute'
        }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          height: MAX_TEXTURE_HEIGHT,
          width: MAX_TEXTURE_WIDTH
        }}>
        <VrButton
          style={this.props.styles.backToMenuButton}
          onClick={() => this.props.handleMenuSelect(0)}>
          <Text
            style={{
              fontSize: 0.2 * PPM,
              textAlign: 'center'
            }}>
            Menu
          </Text>
        </VrButton>
      </View>
      </CylindricalPanel>
    )
  }
}

module.exports = BackToMenuButton;
