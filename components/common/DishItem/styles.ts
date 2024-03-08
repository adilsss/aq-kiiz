import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    borderRadius: 20,
    height: 137,
    width: "100%",
    overflow: "hidden",
  },
  imgBlock: {
    position: "relative",
  },
  img: {
    width: 137,
    height: 137,
  },
  infoCard: {
    width: "100%",
    height: 137,
    backgroundColor: "white",
    borderRadius: 10,
    zIndex: 9,
    right: 10,
    paddingTop: 15,
    paddingLeft: 15,
  },
  like: {
    backgroundColor: "white",
    borderRadius: "50%",
    width: 31,
    height: 31,
    zIndex: 9,
    top: 6,
    left: 6,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
