import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scrolView1: {
    marginBottom: 30
  },

  image1: {
    height: 500,
    width: 500,
    resizeMode: "cover",
  },

  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },

  heroContent: {
    padding: 20,
    paddingBottom: 40,
  },

  textContent: {
    color: '#fff',
    fontSize: 15,
    
    
  }
});
