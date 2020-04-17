import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('kartiko');
  const [age, setAge] = useState(24);
  // const clickHandler = () => {
  //   setName('Pramudito');
  //   setPerson({name: 'Andrian', age: 20});
  // };

  return (
    <View style={styles.container}>
      <Text>Enter Name :</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={val => setName(val)}
      />
      <Text>Enter Age :</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="Age"
        onChangeText={val => setAge(val)}
      />
      <Text>My Name is {name} </Text>
      <Text>his age {age} years old</Text>
      <View style={styles.buttonContainer}>
        {/* <Button title="update state" onPress={clickHandler} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 20,
    width: 200,
  },
});
