import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#282A36",
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  headerText: {
    fontSize: 15,
    color: "#f5f5fd"
  },

  headerTextBold: {
    fontWeight: "bold"
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: "#f5f5fd",
    fontWeight: "bold"
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#f3f3dc"
  },

  incidentList: {
    marginTop: 32
  },

  incident: {
    padding: 24,
    backgroundColor: "#353956",
    marginBottom: 16,
    borderRadius: 8
  },

  incidentProperty: {
    fontSize: 14,
    color: "#f5f5fd",
    fontWeight: "bold"
  },
  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: "#f3f3dc"
  },

  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  detailsButtonText: {
    color: "#e02041",
    fontSize: 15,
    fontWeight: "bold"
  }
});
