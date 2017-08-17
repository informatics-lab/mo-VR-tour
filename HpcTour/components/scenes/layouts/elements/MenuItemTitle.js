import React from 'react';
import {
  Text,
  View
} from 'react-vr';
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
