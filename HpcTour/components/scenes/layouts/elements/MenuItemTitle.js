import React from 'react';
import {
  Text,
  View
} from 'react-vr';

class MenuItemTitle extends React.Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontSize: 0.2,
          }}>
          {this.props.text}
        </Text>
      </View>
    )
  }
}

module.exports = MenuItemTitle;
