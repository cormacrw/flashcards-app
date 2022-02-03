import {StyleSheet} from 'react-native'
import baseText from './baseText'
import constants from './constants'


export default StyleSheet.create({
  baseText,
  screenContainer: {
  },
  lgHeader: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  smHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: constants.sideMargin
  },
  screenHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 8,
    marginBottom: 10
  }
})