import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Footer from './Footer';

export default function Notifications() {
  return (
    <>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Notifications Screen</Text>
    </View>
    <Footer/>
    </>
  );
} 