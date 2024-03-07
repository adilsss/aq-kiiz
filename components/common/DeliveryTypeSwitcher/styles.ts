import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "white",
  },
  buttonActive: {
    backgroundColor: "#FB631D",
    paddingHorizontal: 43,
    paddingVertical: 13,
    borderRadius: 15,
  },
  buttonInactive: {
    backgroundColor: "white",
    paddingHorizontal: 43,
    paddingVertical: 13,
    borderRadius: 15,
  },
});
