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
            fontSize: 0.15,
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
