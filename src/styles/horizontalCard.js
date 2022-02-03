import { StyleSheet } from "react-native";
import colors from "./colors";
import constants from "./constants";

export default StyleSheet.create({
  horizontalCard: {
    backgroundColor: colors.primaryColor,
    marginTop: 10,
    borderRadius: 10,
    height: 60,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    elevation: 12,
    marginLeft: constants.sideMargin,
    marginRight: constants.sideMargin
  },
  cardLabel: {
    fontSize: 15,
    marginTop: 10,
    marginLeft: 15,
    color: colors.secondaryColor
  },
  button: {
    // position: 'absolute',
    // right: 0,
    // marginLeft: 'auto',
    // padding: 10
    height: 44,
    width: 44,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonIcon: {
    fontSize: 24
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 20
  }
})