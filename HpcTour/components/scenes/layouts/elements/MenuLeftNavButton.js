import React from 'react';
import {
  asset,
  Image,
  VrButton
} from 'react-vr';
import styles from '../../../styles.js';

class MenuLeftNavButton extends React.Component {
  render() {
    return (
      <VrButton onClick={() => this.props.handleClick()}>
        <Image source={asset('ChevronLeft.png')} style={styles.navButton}/>
      </VrButton>
    )
  }
}

module.exports = MenuLeftNavButton;
