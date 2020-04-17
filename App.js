import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';

export default function App() {
  // const [name, setName] = useState('kartiko');
  // const [age, setAge] = useState(24);
  const [people, setPeople] = useState([
    {name: 'kartiko', id: 1},
    {name: 'pramudito', id: 2},
    {name: 'joko', id: 3},
    {name: 'widodo', id: 4},
    {name: 'john', id: 5},
    {name: 'wick', id: 6},
    {name: 'neymar', id: 7},
    {name: 'junior', id: 8},
  ]);
  // const clickHandler = () => {
  //   setName('Pramudito');
  //   setPerson({name: 'Andrian', age: 20});
  // };

  const pressHandler = id => {
    console.log(id);
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
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
  item: {
    color: '#ffffff',
    marginTop: 24,
    padding: 30,
    fontSize: 24,
    backgroundColor: 'green',
  },
});
