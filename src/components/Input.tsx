import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const InputString = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: "#0f0f0f",
    borderRadius: 6,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,

    color: "#ffffff"
  },
});

export { InputString };