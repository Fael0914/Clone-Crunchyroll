import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
card: {
    paddingVertical: 25,
    paddingHorizontal: 25,
    backgroundColor: '#1f1e20ff',
    width: 380,
    marginTop: 40,
  },

  inputContainer: {
    gap: 40,
  },

  input: {
    borderBottomWidth: 2,
    borderColor: 'gray'
  },

  descricao: {
    marginTop: 20,
    fontSize: 13,
    color: 'gray',
    width: 250
  },

  checkbox: {
    flexDirection: 'row',
    marginTop: 25,
    width: 250
  },

  textCheck: {
    color: '#fff',
    fontWeight: '300'
  }

});