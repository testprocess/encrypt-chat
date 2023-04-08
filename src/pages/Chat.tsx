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

import { ChatBox } from "../components/ChatBox"




const Chat = ({ navigation, route }: any) => {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>채팅</Text>
            <ScrollView style={styles.scrollContainer}>
                <ChatBox isMe={false} message="dd"> </ChatBox>
                <ChatBox isMe={false} message="Just Test"> </ChatBox>
                <ChatBox isMe={false} message="Let Do This"> </ChatBox>
                <ChatBox isMe={false} message="Yaahhhhhhhdsvgsdvsdvszdv"> </ChatBox>
                <ChatBox isMe={false} message="THIS IS THEEEEEEEEEEEEEEEEEEEE WAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY"> </ChatBox>
                <ChatBox isMe={true} message="THIS IS THEEEEEEEEEEEEEEEEEEEE WAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY"> </ChatBox>

            </ScrollView>


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
  chatBox: {
    maxWidth: 300,
    backgroundColor: "#19191c",
    padding: 8,
    paddingEnd: 14,
    paddingStart: 14,
    borderRadius: 12,
    marginTop: 10,
    alignSelf: 'flex-start'
  },
  chatText: {
    color: "#ffffff",
    fontSize: 18,
  },
    scrollContainer: {
    flex: 5, 
    paddingTop: 10,

  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold"
  }
});



export { Chat };
