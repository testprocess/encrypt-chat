import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

type ButtonType = { 
    onPress: any; 
    title: string; 
}

function Button(props: ButtonType) {
  const { onPress, title } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

function ButtonSmall(props: ButtonType) {
    const { onPress, title } = props;
    return (
      <Pressable style={stylesSmall.button} onPress={onPress}>
        <Text style={stylesSmall.text}>{title}</Text>
      </Pressable>
    );
  }

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
});


const stylesSmall = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,

      borderRadius: 6,
      elevation: 3,
      backgroundColor: 'white',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },
  });

export { Button, ButtonSmall }