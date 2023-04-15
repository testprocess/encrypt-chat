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
import { io } from "socket.io-client";

import { ChatBox } from "../components/ChatBox"
import { InputString } from "../components/Input"
import { ButtonSmall } from "../components/Button"
import { Head } from "../components/Head"




const Chat = ({ navigation, route }: any) => {
    const [chatList, updateChatList] = React.useState([
      {
        key: 2,
        name: "ss",
        message: "dvd"
      }
    ]);

    const [userName, updateUsername] = React.useState('huh');
    const [text, onChangeText] = React.useState('');

    const ref: any = React.useRef()
    const ws: any = React.useRef(null);


    const handleSend = () => {
        ref.current.focus()
        const chatMessage = ref.current._internalFiberInstanceHandleDEV.memoizedProps.value

        let chat = {
            key: Math.floor(Math.random() * (9999999 - 4 + 1) + 4),
            name: "huh",
            message: chatMessage
        }
        updateChatList(chatList.concat(chat))
        onChangeText('')
        ws.current.emit("send", {message: chatMessage})
    }

    useEffect(() => {
        ref.current.focus()
        ws.current = io("http://10.0.2.2:8000/chat");
        console.log("sdd", ws.current)

        ws.current.on("connection", () => {
        });

        ws.current.on("receive", (data: any) => {
          console.log("sdd", data)

        });
        
        ws.current.on("disconnect", () => {
            console.log(ws.current.id);
        });
        updateChatList([])
    }, [])

    const ChatArray = chatList.map(chat => {
        let calcIsMe = chat.name == userName ? true : false
        return <ChatBox key={chat.key} isMe={calcIsMe} message={chat.message}> </ChatBox>                           
    })  


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.chatContainer}>
              <Text style={styles.title}>{route.params.group.name}</Text>
                <ScrollView style={styles.scrollContainer}>
                    { ChatArray }


                    <View style={styles.br}></View>
                </ScrollView>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.rowContainer}>
                    <View style={{flex: 0.8}}>
                        <InputString value={text} onChangeText={onChangeText} ref={ref} onSend={handleSend}></InputString>
                    </View>
                    <View style={{flex: 0.2, justifyContent: "center", alignItems: 'flex-end'}}>
                        <ButtonSmall title='>' onPress={handleSend}></ButtonSmall>
                    </View>


                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
    paddingTop: 10,
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
    flexDirection: "column-reverse",
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: 'black'
    

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
