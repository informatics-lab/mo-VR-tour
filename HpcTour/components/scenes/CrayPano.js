import React from 'react';
import {
  asset,
  Image,
  Pano,
  Sound,
  View,
  VrButton,
  VrSoundEffects
} from 'react-vr';
import styles from '../styles.js';

const cray_voiceover=asset('ZOOM0009_Tr1.wav');

class CrayPano extends React.Component {

  componentWillMount() {
    VrSoundEffects.load(cray_voiceover);
  }


  render() {
    return (
      <View>
        <Pano source={asset('Cray_nadir.jpg')}/>
        <VrButton
          onClick={() => {VrSoundEffects.play(cray_voiceover)}}
          style={styles.infoButton}
        >
          <Image
            source={asset('question-mark.png')}
            style={styles.infoButtonImage}/>
        </VrButton>
      </View>
    )
  }
}

module.exports = CrayPano;
