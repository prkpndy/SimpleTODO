import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

// We should always place text inside the <Text> tag. Unlike Web Dev, we cannot put text anywhere we want
// Its common to have a lot of <View> component in your app
// React Native is all about adding the right Component, Placing them at the correct position (adding Layout or Structuring) and adding styles to them
// style attribute (called prop in react) requires a JS Object which we can pass as it is or we can use the StyleSheet.create() method of the Stylesheet API
// Note that all the attributes (in General all the JS Code) need to be inside curly braces ({})

// flexDirection: sets the main and the cross-axis. For 'row' main-axis will be horizontal
// justifyContent: controls the layout of the items along the main-axis
// alignItems: controls the layout of the items along the cross-axis

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput
            placeholder={"Enter Course Goal"}
            style={{borderColor: "black", borderWidth: 1, width: '80%', padding: 10}}/>
        <Button title={"ADD"} />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
