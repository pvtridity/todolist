import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View, Pressable } from "react-native";

export default function Form({ addHandler }) {
    const [text, setValue] = useState("");
    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View style={styles.inputView}>
            <TextInput style={styles.input} onChangeText={onChange} placeholder="Впишите задачу"/>
            <Pressable style={styles.task} onPress={() => addHandler(text)}><Text style={styles.text}>ДОБАВИТЬ ЗАДАЧУ</Text></Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    inputView: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center'
    },

    input: {
        marginTop: '20px',
        marginBottom: '20px',
        height: '30px',
        width: "70%",
        borderBottomWidth: 2,
        borderBottomColor: '#1b4552',
    },

    task: {
        backgroundColor: '#1b4552',
        width: '100%',
        color: '#000000',
        paddingTop: '15px',
        paddingBottom: '15px',
    },
    text: {
        fontFamily: 'Helvetica',
        fontWeight: '600',
        fontSize: '18px',
        lineHeight: '18px',
        alignSelf: 'center',
        color: '#ffffff',
    }

});