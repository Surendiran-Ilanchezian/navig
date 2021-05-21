import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {navigate,toggleDrawer} from '../NavigationService';
import {  DrawerActions } from '@react-navigation/native';

export default function Footer({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.footerBlock}>
        <TouchableOpacity>
          <Image
            style={styles.footerIcon}
            source={require('../footer/settings.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.footerIcon}
            source={require('../footer/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.footerIcon}
            source={require('../footer/bookmark.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.footerIcon}
            source={require('../footer/heart.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'column',
    backgroundColor: 'gray',
  },
  footerBlock: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});

