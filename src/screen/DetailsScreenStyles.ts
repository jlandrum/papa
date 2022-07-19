import {StyleSheet} from 'react-native';
import {Colors, sizeUnit} from '../Const';

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner: {
    backgroundColor: Colors.space,
    height: 200,
  },
  label: {
    margin: sizeUnit,
    marginBottom: 0,
    fontWeight: '600',
    fontSize: 16,
  },
  value: {
    margin: sizeUnit,
    marginTop: sizeUnit / 2,
  },
  button: {
    color: Colors.button,
  },
});
