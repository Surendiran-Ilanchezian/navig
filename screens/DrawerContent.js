import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import {
  Avatar, Title, Paragraph, Caption, TouchableRipple, Drawer, Switch
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function DrawerContent(props) {

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Surendiran</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="home-outline"
              color={color}
              size={size}
            />
          )}
          label="Home"
          onPress={() => { props.navigation.navigate('Home') }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="account-outline"
              color={color}
              size={size}
            />
          )}
          label="Profile"
          onPress={() => { props.navigation.navigate('ProfileScreen') }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="bookmark-outline"
              color={color}
              size={size}
            />
          )}
          label="Bookmarks"
          onPress={() => { props.navigation.navigate('Notifications') }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="shield"
              color={color}
              size={size}
            />
          )}
          label="Settings"
          onPress={() => { props.navigation.navigate('SettingsScreen') }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="account-check-outline"
              color={color}
              size={size}
            />
          )}
          label="Support"
          onPress={() => { props.navigation.navigate('SupportScreen') }}
        />
      </Drawer.Section>
      </DrawerContentScrollView>
   
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out" />
      </Drawer.Section>
    </View>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 12,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});