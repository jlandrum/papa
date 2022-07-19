import React from 'react';
import {Text, View} from 'react-native';
import Lottie from 'lottie-react-native';
import Styles from './AboutScreenStyles';

const AboutScreen = () => {
  return (
    <View style={Styles.root}>
      <View style={Styles.center}>
        <Text style={Styles.header}>SpaceX Launches App</Text>
        <Text style={Styles.version}>0.0.1</Text>
      </View>
      <Text style={Styles.about}>Made with ❤️ By James Landrum</Text>
      <View style={Styles.center}>
        <Text style={Styles.about}>813-317-0540</Text>
        <Text style={Styles.about}>me@jameslandrum.com</Text>
      </View>
      <Lottie
        style={Styles.effect}
        source={require('../../res/95671-wave-animation.json')}
        resizeMode="contain"
        speed={0.1}
        autoSize
        autoPlay
        loop
      />
    </View>
  );
};

export default AboutScreen;
