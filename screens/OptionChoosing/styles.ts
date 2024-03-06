import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    margin: "auto",
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 18,
  },
  heading: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  back: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 9,
  },
  deliveryOption: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 36,
    paddingVertical: 46,
  },
  cards: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 34,
  },
});
