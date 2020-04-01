import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function TodoItem( { item, pressHandler }) {
  
    return (
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style={styles.text}> {item.text}</Text>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    text: {
      padding: 16,
      marginTop: 16,
      borderColor: '#bbb',
      borderWidth: 1,
      borderStyle: 'dashed',
      borderRadius: 10
    },
  });
  
