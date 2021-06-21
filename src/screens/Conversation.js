import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity, 
  TextInput
} from 'react-native';
import FIcon from 'react-native-vector-icons/dist/FontAwesome';

const { height, width } = Dimensions.get('window')

const Conversation = (props) => {
    const [newMessage, setNewMessage] = useState('');
    const chatData = props.route.params.messages
    const topic = props.route.params.contactName

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.topleft}>
                    <TouchableOpacity onPress={()=> props.navigation.push('Chat')}><FIcon name="chevron-left" size={20} color="#FFFFFF"/></TouchableOpacity>
                    <Text style={styles.pagetitle}>{topic}<Text style={styles.username}>{props.route.params.username}</Text></Text>
                </View>
            </View>
        <View style={styles.conversationBox}>
        <ScrollView>
            {chatData && chatData.map((message, id) =>
                <View key={`m_${id}`}>
                    <View style={message.from == "Ram" ? styles.userMessage : styles.otherMessage}>
                        <Text>{message.message}</Text>
                        <Text style={styles.time}>{message.time.slice(11).slice(0,5)}</Text>
                    </View>
                </View>
            )}
        </ScrollView>
        <View style={styles.addMessage}>
                    <View style={styles.textBox}>
                        <TextInput
                            multiline
                            editable
                            numberOfLines={1}
                            textAlignVertical='top'
                            placeholder={`Type a message`}
                            placeholderTextColor='#242B2E'
                            value={newMessage}
                            style={styles.textInput}
                            onChangeText={(text) => setNewMessage(text)}
                        />
                    </View>
                    <TouchableOpacity style={styles.sendBtn}>
                        <Text style={styles.buttonText}>Send</Text>
                    </TouchableOpacity>
                </View>
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
        backgroundColor: '#ec3e71'
    },
    topleft: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    pagetitle: {
        fontSize: 18,
        color: '#fff',
        marginLeft: 10
    },
    conversationBox: {
        flex: 1,
        backgroundColor: '#eeeeee',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    },
    otherMessage: {
        backgroundColor: '#CAD5E2',
        alignSelf: 'flex-start',
        padding: 15,
        maxWidth: width - 180,
        marginTop: 10,
        borderRadius: 10
    },
    userMessage: {
        backgroundColor: 'pink',
        alignSelf: 'flex-end',
        padding: 15,
        maxWidth: width - 180,
        marginTop: 20,
        borderRadius: 10,    
    },
    time: {
        alignSelf: 'flex-end',
        color: 'gray',
        marginTop: 10
    },
    addMessage: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#eeeeee',
        alignItems: 'center',
        padding: 5,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginTop: 7
    },
    textBox: {
        width: "75%",
        maxHeight: 70,
        alignSelf: 'center',
    },
    textInput: {
        color: 'black'
    },
    sendBtn: {
        width: 80,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#ec3e71",
    },
    buttonText: {
        color: 'white'
    }
})
export default Conversation;