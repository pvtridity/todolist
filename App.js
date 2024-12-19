import { FlatListComponent, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from "./components/header";
import ListItem from './components/list';
import { FlatList } from 'react-native-web';
import Form from './components/form';

export default function App() {
  const [listOfItems, setListOfItems] = useState ([

    
  ]);
  const deleteHander = (key) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.key != key);
    });
  };
  
  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        {text: text, key: Math.random().toString(36).substring(7)}, ...list,
      ];
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <Form addHandler={addHandler}/>
      <View style={styles.styleView}>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (<ListItem el={item} deleteHander={deleteHander} /> 
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: '320px',
    margin: 'auto',
    marginTop: '0'
  },
  styleView: {
    paddingTop: '20px'
  }
});
