import { StyleSheet } from "react-native";
import colors from "./colors";
import constants from "./constants";

export default StyleSheet.create({
  verticalCard: {
    width: 120,
    padding: 15,
    elevation: 12,
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 10,
    marginLeft: constants.sideMargin,
    alignItems: 'center'
  },
  cardLabel: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12
  },
  wideButton: {
    width: 100,
    padding: 5,
    borderRadius: 4
  },
  wideButtonText: {
    fontWeight: "bold",
    textAlign: 'center'
  },
  icon: {
    fontSize: 32
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center'
  }
})