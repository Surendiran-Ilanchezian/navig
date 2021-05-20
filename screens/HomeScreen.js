import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'


export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text style={{ color: 'red' }}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}