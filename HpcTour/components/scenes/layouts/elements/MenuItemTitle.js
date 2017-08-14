import React from 'react';
import {
  Text,
  View
} from 'react-vr';

const MAX_TEXTURE_WIDTH = 4096;
const MAX_TEXTURE_HEIGHT = 720;
const degreesToPixels = degrees => -(degrees / 360) * MAX_TEXTURE_WIDTH;
const PPM = 1 / (2 * Math.PI * 3) * MAX_TEXTURE_WIDTH;

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
