import { StyleSheet } from "react-native";
import baseText from "./baseText";
import colors from "./colors";
import constants from "./constants";

export default StyleSheet.create({
  baseText,
  card: {
    height: 170,
    marginLeft: constants.sideMargin,
    marginRight: constants.sideMargin,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
    elevation: 11,
    padding: 15,
    alignItems: 'center'
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 18
  },
  cardText: {
    fontSize: 18,
    marginTop: 25
  },
  editInput: {
    marginTop: 5,
    textAlign: 'center'
  },
  addCardButtonContainer: {
    backgroundColor: colors.darkerOpaque,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addCardButtonIcon: {
    color: colors.primaryColor,
    fontSize: 20
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20
  },
  viewerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.darkerOpaque,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewerButtonDisabled: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.disabledBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewerButtonIconDisabled: {
    fontSize: 30,
    color: colors.disabledTextColor
  },
  viewerButtonIcon: {
    color: colors.primaryColor,
    fontSize: 30
  }
})