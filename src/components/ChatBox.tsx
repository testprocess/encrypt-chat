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
    children: any,
    isMe: boolean,
    message: string
}

const ChatBox = (props: ChatType) => {
    const { isMe, message } = props;

    if (isMe) {
        return (
            <View style={styles.chatBoxMe}>
                <Text style={styles.chatTextMe}>{message}</Text>
            </View>
        );
    }

    return (
        <View style={styles.chatBox}>
            <Text style={styles.chatText}>{message}</Text>
        </View>
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
  chatBoxMe: {
    maxWidth: 300,
    backgroundColor: "#f2f2f5",
    padding: 8,
    paddingEnd: 14,
    paddingStart: 14,
    borderRadius: 12,
    marginTop: 10,
    alignSelf: 'flex-end'
  },
  chatText: {
    color: "#ffffff",
    fontSize: 18,
  },
  chatTextMe: {
    color: "#000000",
    fontSize: 18,
  }
});



export { ChatBox };
