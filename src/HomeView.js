/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,TouchableOpacity
} from 'react-native';

import { Actions } from "react-native-router-flux";

export default class HomeView extends Component {


irViewA(){
    Actions.viewA();
}

irViewB(){
    Actions.viewB();
}

  render() {
    return (
    
        <View style={styles.container}>
      
            <TouchableOpacity style = { styles.txtButtom }  onPress={this.irViewA}>
                <Text style = { styles.txt } >
                    Ir a la vista A
                </Text>
            </TouchableOpacity>
        
            <TouchableOpacity style = { styles.txtButtom }  onPress={this.irViewB}>
                <Text style = { styles.txt } >
                    Ir a la vista B
                </Text>
            </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtButtom:{
    flex:1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#607D8B' ,
    borderRadius: 10,
    elevation:8,
  },
  txt:{
    fontSize:25,
    color: '#fff',
  }
});
