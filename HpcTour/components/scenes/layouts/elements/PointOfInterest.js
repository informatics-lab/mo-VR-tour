import React from 'react';
import {
  VrButton,
  asset,
  Image
} from 'react-vr'

class PointOfInterest extends React.Component {
  render() {
    return (
        <VrButton
        style={{
          layoutOrigin: [0.5, 0.5],
          transform: [{
            translate: this.props.position,}]
            }}>
          <Image
            source={asset('point.png')}
            style={{
              width: 1,
              height: 1
            }}/>
        </VrButton>
    )
  }
}

module.exports = PointOfInterest;
