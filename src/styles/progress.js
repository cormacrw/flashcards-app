import { StyleSheet } from "react-native";
import colors from "./colors";
import constants from "./constants";

export default StyleSheet.create({
  backgroundBar: {
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.darkGray,
    marginLeft: constants.sideMargin,
    marginRight: constants.sideMargin
  },
  foregroundBar: {
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.primaryColor,
    marginLeft: constants.sideMargin,
    marginRight: constants.sideMargin,
    marginTop: -14
  },
  label: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 3
  }
})