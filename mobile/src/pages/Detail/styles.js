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

  incident: {
    padding: 24,
    backgroundColor: "#353956",
    marginBottom: 16,
    borderRadius: 8,
    marginTop: 48
  },

  incidentProperty: {
    fontSize: 14,
    color: "#f5f5fd",
    fontWeight: "bold",
    marginTop: 24
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,

    color: "#f3f3dc"
  },

  contactBox: {
    padding: 24,
    backgroundColor: "#353956",
    marginBottom: 16,
    borderRadius: 8
  },

  heroTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f5f5fd",
    lineHeight: 30
  },

  heroDescription: {
    fontSize: 15,
    color: "#f3f3dc",
    marginTop: 16
  },

  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  action: {
    backgroundColor: "#e02041",
    height: 50,
    borderRadius: 8,
    width: "48%",
    justifyContent: "center",
    alignItems: "center"
  },

  actionText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#f5f5fd"
  }
});
