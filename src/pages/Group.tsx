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
import { GroupBox } from "../components/GroupBox"



const Group = ({ navigation, route }: any) => {
    const ref = React.useRef()
    const [groups, onChangeGroup] = React.useState([
        {
            key: 1,
            name: "Test Group",
            description: "Test Group",
            personnel: 87,
            tag: ["Test Group", "Test Group"]
        },
        {
            key: 2,
            name: "Test Group",
            description: "Test Group",
            personnel: 32,
            tag: ["Test Group", "Test Group"]
        },
        {
            key: 3,
            name: "Test Group",
            description: "Test Group",
            personnel: 7,
            tag: ["Test Group", "Test Group"]
        },
        {
            key: 4,
            name: "Test Group",
            description: "Test Group",
            personnel: 7,
            tag: ["Test Group", "Test Group"]
        },
        {
            key: 5,
            name: "Test Group",
            description: "Test Group",
            personnel: 7,
            tag: ["Test Group", "Test Group"]
        },
        {
            key: 6,
            name: "Test Group",
            description: "Test Group",
            personnel: 7,
            tag: ["Test Group", "Test Group"]
        },
        {
            key: 7,
            name: "Test Group",
            description: "Test Group",
            personnel: 7,
            tag: ["Test Group", "Test Group"]
        },
    ]);

    const GroupList = groups.map(group => {
        return <GroupBox name={group.name} description={group.description} personnel={group.personnel} tag={group.tag}></GroupBox>
    })  

    const onPressNext = () => {
        navigation.navigate('CreateGroup')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>그룹</Text>


            <View style={styles.scrollContainer}>
                <ScrollView>  
                    { GroupList }

                </ScrollView>
            </View>

            <View style={styles.buttonContainer}>
                <Button title="그룹 만들기" onPress={onPressNext}></Button>
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
  scrollContainer: {
    flex:10,
    paddingTop: 20,

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



export { Group };
