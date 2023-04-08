import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  Pressable,
  View

} from 'react-native';

type ChatType = {
    title: string
}

const Head = (props: ChatType) => {
    const { title } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'black',
    padding: 10,
    alignItems: "center",

  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    alignItems: "center",
    fontWeight: "900",
  }
});



export { Head };
