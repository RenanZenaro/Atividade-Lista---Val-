// screens/HomeScreen.js
import React from 'react';
import { FlatList, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

const users = [
  { id: '1', name: 'User One', email: 'userone@example.com', image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'User Two', email: 'usertwo@example.com', image: 'https://via.placeholder.com/150' },
  // Adicione mais usuários conforme necessário
];

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { user: item })}>
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
