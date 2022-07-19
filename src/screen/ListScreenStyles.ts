import {StyleSheet} from 'react-native';
import {Colors, sizeUnit} from '../Const';

export default StyleSheet.create({
  base: {
    backgroundColor: Colors.silver,
  },
  list: {
    backgroundColor: Colors.silver,
  },
  listHeader: {
    padding: sizeUnit,
    backgroundColor: Colors.white,
  },
  listHeaderBorder: {
    height: sizeUnit / 4,
    backgroundColor: Colors.blue,
  },
  listItem: {
    margin: sizeUnit,
    marginBottom: 0,
    padding: sizeUnit,
    borderRadius: sizeUnit / 2,
    backgroundColor: Colors.white,
  },
  listItemText: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: sizeUnit / 2,
  }
});
