/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Provider} from "mobx-react";
import * as stores from "./store";
import Greet from "./component/Greeting";


export default class App extends React.Component {
  render () {
    return (
      <Provider {...stores}>
        <Greet />
      </Provider>
    )
  }
}