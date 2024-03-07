import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 18,
    width: "100%",
  },
  cardsContainer: {
    width: "100%",
    display: "flex",
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  takeAwayCard: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 13,
  },
  takeAwayCardTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  info: {
    display: "flex",
    marginLeft: 12,
  },
  title: {
    display: "flex",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkIcon: {
    position: "absolute",
    right: -5,
    bottom: 15,
  },

  bottomTxt: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
  },
  divider: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 2,
    backgroundColor: "#C41F720F",
    marginVertical: 16,
  },
  dishExamples: {
    display: "flex",
    flexDirection: "row",
  },

  dishExampleCard: {
    backgroundColor: "#EFEFEF",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    position: "relative",
    overflow: "hidden",
    height: 49,
    maxWidth: 133,
  },
  dishImg: {
    right: 10,
    bottom: 10,
    width: 100,
    height: 100,
  },

  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "contain",
  },
});
