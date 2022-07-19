import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Styles from './DetailsScreenStyles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../Navigation';
import Lottie from 'lottie-react-native';

type Props = NativeStackScreenProps<RootStackParamsList, 'Details'>;

interface WeightMapping {
  multiplier: number;
  label: string;
  prefix?: string;
}

const WeightMap: WeightMapping[] = [
  {multiplier: 1, label: 'kg'},
  {multiplier: 2.20462, label: 'lbs'},
  {multiplier: 0.157473, label: 'stone'},
  {multiplier: 35.274, label: 'oz'},
  {multiplier: 0.00015748031, label: 'African Elephants', prefix: 'approx.'},
  {multiplier: 7.69230769231, label: 'Cups of Flour (US)', prefix: 'approx.'},
  {multiplier: 7000, label: 'Marshmallows', prefix: 'approx.'},
];

const WeightCalc = (kg: number, mapping: WeightMapping): string => {
  return `${mapping.prefix || ''} ${Math.ceil(
    kg * mapping.multiplier,
  ).toLocaleString()} ${mapping.label}`.trim();
};

const DetailsScreen = ({route}: Props) => {
  const [weightMode, setWeightMode] = React.useState(0);

  const insets = useSafeAreaInsets();
  const mission = route.params.mission;

  return (
    <View style={{...Styles.root, paddingBottom: insets.bottom}}>
      <View style={Styles.banner}>
        <Lottie
          source={require('../../res/71683-rocketship.json')}
          autoPlay
          loop
          resizeMode="contain"
        />
      </View>
      <ScrollView>
        <Text style={Styles.label}>Mission Name</Text>
        <Text style={Styles.value}>{mission.mission_name}</Text>
        <Text style={Styles.label}>Mission ID</Text>
        <Text style={Styles.value}>{mission.mission_id || 'No ID'}</Text>
        <Text style={Styles.label}>Rocket</Text>
        <Text style={Styles.value}>{mission.rocket.rocket_name}</Text>
        <Text style={Styles.label}>Company</Text>
        <Text style={Styles.value}>{mission.rocket.rocket.company}</Text>
        <TouchableOpacity
          onPress={() => setWeightMode((weightMode + 1) % WeightMap.length)}>
          <Text style={{...Styles.label, ...Styles.button}}>Mass</Text>
          <Text style={{...Styles.value, ...Styles.button}}>
            {WeightCalc(mission.rocket.rocket.mass.kg, WeightMap[weightMode])}
          </Text>
        </TouchableOpacity>
        <Text style={Styles.label}>Launch Site Name</Text>
        <Text style={Styles.value}>{mission.launch_site.site_name}</Text>
        <Text style={Styles.label}>Launch Date</Text>
        <Text style={Styles.value}>
          {new Date(mission.launch_date_unix * 1000).toLocaleString()}
        </Text>
      </ScrollView>
    </View>
  );
};

export default DetailsScreen;
