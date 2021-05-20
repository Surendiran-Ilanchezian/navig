import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native' 

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={{ color: 'red' }}>{`Go to Home page`}</Text>
      </TouchableOpacity>
    </View>
  );
}