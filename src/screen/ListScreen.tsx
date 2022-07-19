import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {SectionList, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useLaunchesQuery} from '../gql/LaunchQuery';
import Mission from '../model/Mission';
import {RootStackParamsList} from '../Navigation';
import Style from './ListScreenStyles';

type ListScreenProps = NativeStackScreenProps<RootStackParamsList, 'List'>;

// TODO: Resolve navigation to proper type
const renderListItem =
  (navigation: any) =>
  ({item}: {item: Mission}) =>
    (
      <View style={Style.listItem}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Details', {mission: item})}>
          <Text style={Style.listItemText}>{item.mission_name}</Text>
          <Text>
            {new Date(item.launch_date_unix * 1000)?.toLocaleDateString?.()}
          </Text>
        </TouchableOpacity>
      </View>
    );

interface SectionHeaderRender {
  section: {
    header: string;
  };
}

const renderSectionHeader = ({section: {header}}: SectionHeaderRender) => (
  <View>
    <Text style={Style.listHeader}>{header} Launches</Text>
    <View style={Style.listHeaderBorder} />
  </View>
);

const ListScreen = ({navigation}: ListScreenProps) => {
  const {data} = useLaunchesQuery();
  const insets = useSafeAreaInsets();

  const sortedData = [...(data?.launches || [])]
    .sort((a, b) => a.launch_date_unix - b.launch_date_unix)
    .reduce(
      (p, c) => {
        if (c.launch_date_unix < Date.now()) {
          p[1].data.push(c);
        } else {
          p[0].data.push(c);
        }
        return p;
      },
      [
        {
          header: 'Upcoming',
          data: [] as Mission[],
        },
        {
          header: 'Previous',
          data: [] as Mission[],
        },
      ],
    );

  return (
    <View style={Style.base}>
      <SectionList
        style={Style.list}
        contentInset={{bottom: insets.bottom}}
        sections={sortedData}
        stickySectionHeadersEnabled
        renderSectionHeader={renderSectionHeader}
        renderItem={renderListItem(navigation)}
      />
    </View>
  );
};

export default ListScreen;
