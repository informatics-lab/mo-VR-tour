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
import styles from '../../../styles.js';

class MenuItemTitle extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.menuText}>
          {this.props.text}
        </Text>
      </View>
    )
  }
}

module.exports = MenuItemTitle;
