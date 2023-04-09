import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

type LabelType = {
    value: string;
}

const Label = (props: LabelType) => {
    const { value } = props

    return (
        <Text style={styles.label}>{value}</Text>
    );
};

const styles = StyleSheet.create({
  label: {
    color: "#ced3d6",
    fontSize: 16,
  },
});

export { Label };