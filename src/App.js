/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View
} from 'react-native';


import { Router, Stack , Scene } from "react-native-router-flux";
import HomeView from "./HomeView";
import ViewA from "./ViewA";
import ViewB from "./ViewB";

export default class App extends Component {
  render() {
    return (
      <Router>
      <Stack key="root">
        <Scene key="homeView" component={HomeView} title="Login" hideNavBar  />
        <Scene key="viewA" component={ViewA} title="View A" navBarButtonColor = {'#fff'} titleStyle = {{color:'#fff'}} hideNavBar = {false} navigationBarStyle ={{backgroundColor:'#607D8B'}}  />
        <Scene key="viewB" component={ViewB} title="View B"  navBarButtonColor = {'#fff'}  titleStyle = {{color:'#fff'}}  hideNavBar = {false} navigationBarStyle ={{backgroundColor:'#607D8B'}}  />
      </Stack>
    </Router>
    );
  }
}
