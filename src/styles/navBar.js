import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  navBar: {
    backgroundColor: colors.secondaryColor,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },
  plusButton: {
    elevation: 12,
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: -20,
    backgroundColor: colors.primaryLighterColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  plusIcon: {
    color: colors.secondaryColor,
    fontSize: 40
  },
  navItem: {

  },
  navIcon: {
    fontSize: 32,
    color: colors.inactiveColor,
    marginTop: 20
  },
  navIconActive: {
    color: colors.primaryLighterColor
  }
})