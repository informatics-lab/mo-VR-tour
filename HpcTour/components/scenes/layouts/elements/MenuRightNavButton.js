import React from 'react';
import {
  asset,
  Image,
  VrButton
} from 'react-vr';
import styles from '../../../styles.js';

class MenuRightNavButton extends React.Component {
  render() {
    return (
      <VrButton onClick={() => this.props.handleClick()}>
        <Image source={asset('ChevronRight.png')} style={styles.navButton}/>
      </VrButton>
    )
  }
}

module.exports = MenuRightNavButton;
