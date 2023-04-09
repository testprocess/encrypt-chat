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




const CreateGroup = ({ navigation, route }: any) => {
    const ref = React.useRef()
    const [text, onChangeText] = React.useState('');

    const onPressNext = () => {
        navigation.navigate('Chat')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>그룹 생성</Text>

            <InputString value={text} onChangeText={onChangeText} onSend={onPressNext}></InputString>

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



export { CreateGroup };