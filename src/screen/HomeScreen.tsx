import React from 'react';
import Lottie from 'lottie-react-native';
import {Button, Text, View} from 'react-native';
import Styles from './HomeScreenStyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../Navigation';

type HomeScreenProps = NativeStackScreenProps<RootStackParamsList, 'Home'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{...Styles.root, paddingBottom: insets.bottom}}>
      <View style={Styles.banner}>
        <Lottie
          source={require('../../res/80381-stars.json')}
          autoPlay
          loop
          resizeMode="cover"
        />
      </View>
      <View style={Styles.header}>
        <Text style={Styles.headerText}>SpaceX Launches</Text>
        <Text style={Styles.headerSubText}>Welcome to the app</Text>
      </View>
      <Button title="Continue" onPress={() => navigation.replace('List')} />
      <Text style={Styles.version}>Version 0.0.1</Text>
    </View>
  );
};

export default HomeScreen;
