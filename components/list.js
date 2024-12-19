import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ListItem({ el, deleteHander }) {
    return (
        <TouchableOpacity onPress={() => deleteHander(el.key)}>
            <Text style={styles.text}>{el.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 5,
        textAlign: "center",
        borderRadius: 15,
        backgroundColor: "#8ba0a4",
        marginTop: 15,
        width: "70%",
        marginLeft: "15%",
        fontFamily: "Helvetica",
        fontSize: '16px'
    },
});