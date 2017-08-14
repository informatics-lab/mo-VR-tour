import React from 'react';
import {
  asset,
  Image,
  VrButton
} from 'react-vr';

const MAX_TEXTURE_WIDTH = 4096;
const MAX_TEXTURE_HEIGHT = 720;
const degreesToPixels = degrees => -(degrees / 360) * MAX_TEXTURE_WIDTH;
const PPM = 1 / (2 * Math.PI * 3) * MAX_TEXTURE_WIDTH;

class MenuRightNavButton extends React.Component {
  render() {
    return (
      <VrButton
        onClick={() => this.props.handleClick()}>
        <Image source={asset('ChevronRight.png')}
          style={{
            width: 0.3 * PPM,
            height: 0.3 * PPM,
          }}/>
      </VrButton>
    )
  }
}

module.exports = MenuRightNavButton;
