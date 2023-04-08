import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Alert,
  Pressable,
  View,
  LogBox

} from 'react-native';

import { ChatBox } from "../components/ChatBox"
import { InputString } from "../components/Input"




const Chat = ({ navigation, route }: any) => {
    const [chatList, updateChatList] = React.useState([
        {
            key: 2,
            name: "ss",
            message: "dvd"
        }
    ]);    

    const [userName, updateUsername] = React.useState('huh');
    const ref: any = React.useRef()


    const handleSend = () => {
        const chatMessage = ref.current._internalFiberInstanceHandleDEV.memoizedProps.value

        let chat = {
            key: Math.floor(Math.random() * (9999999 - 4 + 1) + 4),
            name: "huh",
            message: chatMessage
        }
        updateChatList(chatList.concat(chat))
    
    }

    useEffect(() => {
        updateChatList([])
    }, [])

    const ChatArray = chatList.map(chat => {
        let calcIsMe = chat.name == userName ? true : false
        return <ChatBox key={chat.key} isMe={calcIsMe} message={chat.message}> </ChatBox>                           
    })  


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.chatContainer}>
                <ScrollView style={styles.scrollContainer}>
                    <Text style={styles.title}>채팅</Text>
                    { ChatArray }
                    <ChatBox isMe={false} message="dd"> </ChatBox>
                    <ChatBox isMe={false} message="Just Test"> </ChatBox>
                    <ChatBox isMe={false} message="Let Do This"> </ChatBox>
                    <ChatBox isMe={false} message="Yaahhhhhhhdsvgsdvsdvszdv"> </ChatBox>
                    <ChatBox isMe={false} message="THIS IS THEEEEEEEEEEEEEEEEEEEE WAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY"> </ChatBox>
                    <ChatBox isMe={true} message="THIS IS THEEEEEEEEEEEEEEEEEEEE WAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY"> </ChatBox>
                    <ChatBox isMe={true} message="THIS IS THEEEEEEEEEEEEEEEEEEEE WAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY"> </ChatBox>
                    <ChatBox isMe={false} message="Yaahhhhhhhdsvgsdvsdvszdv"> </ChatBox>
                    <ChatBox isMe={false} message="Yaahhhhhhhdsvgsdvsdvszdv"> </ChatBox>

                    <View style={styles.br}></View>
                </ScrollView>
            </View>
            <View style={styles.inputContainer}>
                <InputString ref={ref} onSend={handleSend}></InputString>
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
  chatContainer: {
    flex: 10, 

  },
    scrollContainer: {
    flex: 20, 

  },
  inputContainer: {
    flex: 1, 
    flexDirection: "column-reverse"

  },
  title: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold"
  },
  br: {
    marginTop: 40
  }
});



export { Chat };
