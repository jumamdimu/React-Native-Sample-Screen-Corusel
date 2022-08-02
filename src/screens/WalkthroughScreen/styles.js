import { StyleSheet } from 'react-native';

const dynamicStyles = (appStyles, colorScheme) => {
  return StyleSheet.create({
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingBottom: 25,
      color: '#18181b',
    },
    text: {
      fontSize: 18,
      textAlign: 'center',
      color: '#000e21',
      paddingLeft: 10,
      paddingRight: 10,
    },
    image: {
      width: 100,
      height: 100,
      marginBottom: 60,
      tintColor: '#000e21',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#F5F5F5",
    },
    button: {
      fontSize: 18,
      color: '#1d4ed8',
      marginTop: 10,
    },
  });
};

export default dynamicStyles;
