import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center'
  },

  header: {
    height: 100,
    width: '100%'
  },

  tituloContainer: {
    alignItems: 'center',
    marginTop: 60,
  },

  titulo: {
    color: '#fff',
    fontSize: 30
  },

  subTitulo: {
    width: 300,
    marginTop: 30,
    textAlign: 'center',
    marginBottom: 20
  },

  logins: {
    gap: 20,
    alignItems: 'center'
  },

  text: {
    color: 'gray',
    lineHeight: 17

  },

  footer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 55,
  },

  textFooter: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '200',
    lineHeight: 30

  }

 


})