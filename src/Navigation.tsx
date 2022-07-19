import Mission from './model/Mission';

export type RootStackParamsList = {
  Home: undefined;
  List: undefined;
  Details: {mission: Mission};
  About: undefined;
};
