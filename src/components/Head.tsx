import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  Pressable,
  View,
  Button

} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons'

type ChatType = {
    title: string
    navigation: any
}

const Head = (props: ChatType) => {
    const { title, navigation } = props;
    const onPressBack = () => {
      navigation.goBack()
    }

    return (
      <Pressable style={styles.rowContainer} onPress={onPressBack}>
        <Icon style={styles.icon} name="chevron-back-outline" color="#ffffff" />
        <Text style={styles.title}>{title}</Text>
      </Pressable>
      
    );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingBottom: 16,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "900",
  },
  icon: {
    fontSize: 24,
    paddingTop: 5,
    flex: 0.12,
    backgroundColor: 'black',
    justifyContent: "center"
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "900",
  }
});



export { Head };
