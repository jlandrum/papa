import {StyleSheet} from 'react-native';
import {sizeUnit} from '../Const';

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
    margin: sizeUnit,
  },
  headerSubText: {
    fontSize: 14,
  },
  button: {
    margin: sizeUnit,
  },
  version: {
    alignSelf: 'center',
    margin: sizeUnit,
    fontSize: 10,
    color: 'hsl(0, 0%, 50%)',
  },
});
