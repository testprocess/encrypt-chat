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


import { Button } from "../components/Button"
import { InputString } from "../components/Input"




const Login = ({ navigation, route }: any) => {
    const ref = React.useRef()

    const onPressNext = () => {
        navigation.navigate('Chat')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>이름을 입력해주세요</Text>

            <View style={styles.subContainer}>
                <InputString onSend={onPressNext}></InputString>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="다음" onPress={onPressNext}></Button>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    paddingTop: 40,

  },
  subContainer: {
    flex: 5, 
    paddingTop: 10,

  },
  buttonContainer: {
    flex: 1, 
    flexDirection: "column-reverse"
  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold"
  },
  subtitle: {
    paddingTop: 10,
    color: "#d9dcde",
    fontSize: 16,
    fontWeight: "normal"
  }
});



export { Login };
