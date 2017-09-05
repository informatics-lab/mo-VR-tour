import React from 'react';
import {
  asset,
  Image,
  VrButton,
  VrSoundEffects
} from 'react-vr';
import styles from '../../../styles.js';

class VoiceoverButton extends React.Component {
  componentWillMount() {
    VrSoundEffects.load(this.props.voiceover);
  }

  render() {
    return (
      <VrButton
        onClick={() => {VrSoundEffects.play(this.props.voiceover)}}
        style={[
          styles.infoButton,
          {transform: [{translate: this.props.position}]}
        ]}>
        <Image
          source={asset('question-mark.png')}
          style={styles.infoButtonImage}/>
      </VrButton>
    )
  }
}

module.exports = VoiceoverButton;
