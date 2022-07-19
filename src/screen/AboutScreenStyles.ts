import {StyleSheet} from 'react-native';
import {Colors} from '../Const';

export default StyleSheet.create({
  root: {
    flexGrow: 1,
    justifyContent: 'space-around',
    backgroundColor: Colors.black,
    alignContent: 'center',
    alignItems: 'center',
  },
  effect: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    maxWidth: '100%',
    zIndex: -1,
  },
  about: {
    color: Colors.white,
  },
  header: {
    color: Colors.white,
    fontSize: 22,
  },
  version: {
    color: Colors.space,
    fontSize: 10,
  },
  center: {
    alignItems: 'center',
  },
});
