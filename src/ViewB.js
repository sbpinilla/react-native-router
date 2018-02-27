import React, { Component } from 'react';
import {  View, Text,StyleSheet } from 'react-native';

export default class ViewB extends Component {
  render() {
    return (
      <View  style = {styles.container}>
        <Text> View B  </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // backgroundColor:'green'
    },
  });
