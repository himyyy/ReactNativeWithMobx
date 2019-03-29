/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Text, Image, View, Button} from 'react-native';
import Greeting from "./greeting";
import {inject, observer} from "mobx-react";

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
//         <Text>Hello, World!</Text>
//       </View>
//     );
//   }
// }

// export default class App extends React.Component {
//   render () {
//     let pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };
//     return (
//       <Image source={pic} style={{width: 193, height: 110}} />
//     )
//   }
// }

@inject("indexStore") @observer
export default class Greet extends React.Component {
  render () {
    const { indexStore } = this.props;
    return (
      <View style={{ alignContent: "center" }}>
        <Greeting name="Jake" />
        <Greeting name="Rose" />
        <Greeting name="Tom" />
        <Greeting name="Demo" />
        <Greeting name="Test" />
        <Text>{ indexStore.test }</Text>
        <Button onPress={() => indexStore.setTest()}  title="点我！" />
      </View>
    )
  }
}