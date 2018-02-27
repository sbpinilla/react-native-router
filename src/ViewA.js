import React, { Component } from 'react';
import {  View, Text,StyleSheet } from 'react-native';

export default class ViewA extends Component {
  render() {
    return (
      <View style = {styles.container} > 
        <Text> ViewA </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor:'red'
    },
  });
