import { StyleSheet } from "react-native";
import colors from "./colors";
import constants from "./constants";

export default StyleSheet.create({
  input: {
    backgroundColor: colors.inputBackground,
    padding: 15,
    borderRadius: 13,
    marginBottom: 15,
    marginLeft: constants.sideMargin,
    marginRight: constants.sideMargin
  }
})