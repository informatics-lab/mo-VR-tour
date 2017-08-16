import React from 'react';
import {
  Text,
  View
} from 'react-vr';
import {
  MAX_TEXTURE_HEIGHT,
  MAX_TEXTURE_WIDTH,
  degreesToPixels,
  PPM
} from '../../../constants.js';

class MenuItemTitle extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 0.15 * PPM,
            fontWeight: "500",
            textAlign: 'center'
          }}>
          {this.props.text}
        </Text>
      </View>
    )
  }
}

module.exports = MenuItemTitle;
