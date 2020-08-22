import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 24,
    fontFamily: "alata-regular",
    flex: 1,
  },
  titleText: {
    fontSize: 20,
    fontFamily: "alata-regular",
    fontWeight: "bold",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  smallPadding: {
    padding: 20,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginTop: -10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  authButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});
