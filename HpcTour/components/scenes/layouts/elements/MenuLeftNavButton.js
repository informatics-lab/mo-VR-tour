import React from 'react';
import {
  asset,
  Image,
  VrButton
} from 'react-vr';

class MenuLeftNavButton extends React.Component {
  render() {
    return (
      <VrButton
        onClick={() => this.props.handleClick()}>
        <Image source={asset('ChevronLeft.png')}
          style={{
            width: 0.3,
            height: 0.3,
          }}/>
      </VrButton>
    )
  }
}

module.exports = MenuLeftNavButton;
