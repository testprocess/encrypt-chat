import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

type InputType = {
    onSend: any; 
    value: string;
    onChangeText: any
}

const InputStringDefault = (props: InputType, ref: any) => {
    const { onSend, value, onChangeText } = props

    const handleSend = () => {
        onSend()
    }

    return (
        <SafeAreaView>
            <TextInput
                editable
                multiline
                numberOfLines={3}
                style={styles.input}
                onChangeText={onChangeText}
                onSubmitEditing={handleSend}
                value={value}
                blurOnSubmit={false}
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