import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import FIcon from 'react-native-vector-icons/dist/FontAwesome';

const { height, width } = Dimensions.get('window')

const Chat = (props) => {
    const [conversation, setConversation] = useState([{}])
    const [user, setUser] = useState('')

    useEffect(()=>{
         getConversations()
    }, [])

    const getConversations = async () => {
        try {
            await fetch(`http://143.110.247.144/chat/`).then(response => response.json()).then((result) => {
                setConversation(result.chats)
                setUser(result.user)
            })
        } catch (e) {
            console.log(e)
        }
    }
    
    const goToConversation=(contact, messages)=> {
        props.navigation.push('Conversation', { contactName: contact, messages: messages, user: "Ram"})

    }

   
    return(
        <View style={styles.container}>
              <View style={styles.top}>
                <View style={styles.topleft}>
                    <Text style={styles.pagetitle}>Chat</Text>
                </View>
                <View><FIcon name="edit" size={25} color="#FFFFFF" /></View>
            </View>
           <View style={styles.chatBox}>
                <ScrollView>
                    {conversation.map((chat, id) =>
                        <View key={`ch_${id}`} style={styles.chatRow}>
                            <FIcon name="user-circle" color='#1975e5' size={35} />
                            <TouchableOpacity style={styles.chatInfo} onPress={()=> goToConversation(chat.topic, chat.messages)}>
                                <Text style={styles.contactName}>{chat.topic}</Text>
                                <Text style={styles.message}>{chat.messages && chat.messages[chat.messages.length - 1].message}</Text>
                            </TouchableOpacity>
                        </View>)} 
                </ScrollView>
            </View>
        </View>   
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#ec3e71'
    },
    top: {
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    topleft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    pagetitle: {
        fontSize: 24,
        color: '#fff',
        marginLeft: 10
    },
    chatBox: {
        flex: 1,
        backgroundColor: '#CAD5E2',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    chatRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 15,
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    chatInfo: {
        display: 'flex',
        width: width - 100,
        paddingHorizontal: 15,
        justifyContent: 'center'
    },
    contactName: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold'
    },
    senderNameUnread: {
        color: '#ec3e71',
        fontSize: 18,
        fontWeight: 'bold'
    },
    message: {
        color: '#000',
        fontSize: 16
    }

});
export default Chat;

