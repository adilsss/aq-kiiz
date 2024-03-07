import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  categoryItem: {
    alignItems: "center",
  },
  circle: {
    width: 82,
    height: 82,
    backgroundColor: "white",
    borderRadius: "50%",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 82,
    height: 58,
    position: "absolute",
    top: 20,
    left: 17,
    zIndex: 9,
  },
});
