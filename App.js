import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import Notifications from './screens/Notifications';
import ProfileScreen from './screens/ProfileScreen';
import DrawerContent from './screens/DrawerContent';
import RootStackScreen from './screens/RootStackScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const NotificStack = createStackNavigator();

const HomestackScreen = () => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: { backgroundColor: "#cc421c" }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{title: 'Overview'}} />
  </HomeStack.Navigator>
)


const NotificStackScreen = () => (
  <NotificStack.Navigator screenOptions={{
    headerStyle: { backgroundColor: "#ccc" },
    headerTintColor: "#FFF",
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <NotificStack.Screen name="Details" component={Notifications} options={{ title: 'Notifications' }} />

  </NotificStack.Navigator>
)
const DetailstackScreen = () => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: { backgroundColor: "#ccc" },
    headerTintColor: "#FFF",
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailsStack.Screen name="Details" component={SettingsScreen} options={{ title: 'Settings' }} />

  </DetailsStack.Navigator>
)

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
    <RootStackScreen/>
        {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={HomestackScreen} />
        <Drawer.Screen name="Details" component={DetailstackScreen} />
        <Drawer.Screen name="Notifications" component={NotificStackScreen}/>
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
