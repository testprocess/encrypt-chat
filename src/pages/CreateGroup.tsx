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
import { Label } from "../components/Label"
import { Head } from "../components/Head"





const CreateGroup = ({ navigation, route }: any) => {
    const ref = React.useRef()
    const [text, onChangeGroupName] = React.useState('');
    const [description, onChangeGroupDescription] = React.useState('');


    const onPressNext = () => {
        navigation.navigate('Chat')
    }

    return (
        <SafeAreaView style={styles.container}>
          <Head navigation={navigation} title='그룹 만들기'></Head>
            {/* <Text style={styles.title}>그룹 만들기</Text> */}

            <View style={styles.inputContainer}>
                <Label value='그룹 이름'></Label>
                <InputString value={text} onChangeText={onChangeGroupName}></InputString>
            </View>

            <View style={styles.inputContainer}>
                <Label value='그룹 설명'></Label>
                <InputString value={description} onChangeText={onChangeGroupDescription}></InputString>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="만들기" onPress={onPressNext}></Button>
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
    flex: 3, 
    flexDirection: "column-reverse"
  },
  inputContainer: {
    marginTop: 16,
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
