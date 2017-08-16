import React from 'react';
import {
  asset,
  Image,
  VrButton
} from 'react-vr';
import {
  MAX_TEXTURE_HEIGHT,
  MAX_TEXTURE_WIDTH,
  degreesToPixels,
  PPM
} from '../../../constants.js';

class MenuLeftNavButton extends React.Component {
  render() {
    return (
      <VrButton
        onClick={() => this.props.handleClick()}>
        <Image source={asset('ChevronLeft.png')}
          style={{
            width: 0.3 * PPM,
            height: 0.3 * PPM,
          }}/>
      </VrButton>
    )
  }
}

module.exports = MenuLeftNavButton;
