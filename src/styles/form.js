import { StyleSheet } from "react-native";
import baseText from "./baseText";
import colors from "./colors";
import constants from "./constants";
export default StyleSheet.create({
  baseText,
  input: {
    backgroundColor: colors.inputBackground,
    marginLeft: constants.sideMargin,
    marginRight: constants.sideMargin,
    padding: 10,
    marginTop: 0,
    borderRadius: 10
  },
  textArea: {
    backgroundColor: colors.inputBackground,
    marginLeft: constants.sideMargin,
    marginRight: constants.sideMargin,
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    textAlignVertical: 'top',
    color: 'black'
  }
})