import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

type InputType = {
    onSend: any; 
}

const InputStringDefault = (props: InputType, ref: any) => {
    const { onSend } = props
    const [text, onChangeText] = React.useState('');

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                onSubmitEditing={onSend}
                value={text}
                ref={ref}
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

const InputString = React.forwardRef(InputStringDefault)

export { InputString };