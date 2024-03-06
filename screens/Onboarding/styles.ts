import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  text: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  flatList: {
    flex: 1,
  },
  dotContainer: {
    position: "absolute",
    left: 300,
    top: 10,
    right: 0,
    bottom: 10,
    zIndex: 999,
    width: 100,
    height: 100,
  },
  dotStyles: {
    width: 7,
    height: 7,
    borderRadius: 5,
    marginHorizontal: 3,
    backgroundColor: "#FF6B00",
    color: "#FF6B00",
  },
  constainerStyles: {
    top: 30,
  },
  itemContainer: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    marginTop: 40,
    marginHorizontal: 40,
    borderRadius: 20,
  },
  imageContainer: {
    flex: 1,
  },
  container80: {},
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    position: "relative",
    zIndex: 1,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 80,
  },
});
