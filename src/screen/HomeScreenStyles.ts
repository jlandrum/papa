import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner: {
    height: 200,
  },
  header: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  headerText: {
    fontSize: 24,
    margin: 8,
  },
  headerSubText: {
    fontSize: 14,
  },
  version: {
    alignSelf: 'center',
    fontSize: 10,
    color: 'hsl(0, 0%, 50%)',
  },
});
