import { StyleSheet } from "react-native";
import colors from "./colors";
import constants from "./constants";

export default StyleSheet.create({

  iconPicker: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.darkerOpaque,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 20
  },
  iconPickerIcon: {
    color: colors.primaryColor,
    fontSize: 34
  },
  iconOptionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: constants.sideMargin,
    paddingRight: constants.sideMargin
  },
  iconOption: {
    margin: 10,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.darkerOpaque,
    alignItems: 'center',
    justifyContent: 'center',
  },
})