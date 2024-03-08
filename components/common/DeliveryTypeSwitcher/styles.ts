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
    height: 50,
  },
  buttonActive: {
    backgroundColor: "#FB631D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    width: "50%",
    height: 48,
  },
  buttonInactive: {
    backgroundColor: "white",
    paddingHorizontal: 28,
    paddingVertical: 13,
    borderRadius: 15,
    width: "50%",
  },
});
