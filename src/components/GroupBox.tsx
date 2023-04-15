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
    name: string
    description: string
    personnel: number
    tag: any

}


const GroupBox = (props: ChatType) => {
    const { name, description,personnel } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.personnel}>{personnel}명</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#0f0f0f',
    padding: 10,
    marginBottom: 12,
    borderRadius: 12

  },
  title: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "900",
  },
  description: {
    color: "#ced3d6",
    fontSize: 12,
    marginTop: 4,
  },
  personnel: {
    fontSize: 12,
    color: "#ffffff",
    marginTop: 8,

  }
});



export { GroupBox };
