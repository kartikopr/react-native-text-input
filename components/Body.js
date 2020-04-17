import React, {Component} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
  alignItems: 'center',
};

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <Text style={{fontSize: 45}}>Scroll me plz</Text>
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <Image source={logo} />
          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
          />
        </ScrollView>
        <Text>Ini adalah Body #1</Text>
        <Text>Ini adalah Body #2</Text>
        <Text>Ini adalah Body #3</Text>
        <Button
          onPress={() => {
            alert('You tapped the button!');
          }}
          title="Press Me"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
