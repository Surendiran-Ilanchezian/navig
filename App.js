import React, { useEffect } from 'react';
import { View, ActivityIndicator, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import Notifications from './screens/Notifications';
import ProfileScreen from './screens/ProfileScreen';
import DrawerContent from './screens/DrawerContent';
import RootStackScreen from './screens/RootStackScreen';
import { AuthContext } from './components/context';
import Icon from "react-native-vector-icons/Feather";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const NotificStack = createStackNavigator();

const HomestackScreen = () => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: { backgroundColor: "#009387" },
    headerLeft: () => {
      <Icon name="lock" size={25} backgroundColor="#009187" />
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
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

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const initialLoadingState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOG_OUT':
        return {
          ...prevState,
          isLoading: false,
          userToken: null,
          userName: null,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoadingState);

  const authContext = React.useMemo(() => ({
    signIn:  (userName, Password) => {
      // setUserToken('1234');
      // setIsLoading(false);
      let userToken;
      userToken = null;
      if (userName == 'user' && Password == 'pass') {
        
          userToken = 'dean';
       
        
      }
      // console.log("user token",userToken)
      dispatch({ type: 'LOGIN', id: userName, token: userToken })
    },
    signOut:  () => {
      // setUserToken(null);
      // setIsLoading(false);
     
      dispatch({ type: 'LOG_OUT' })
    },
    signUp: () => {
      setUserToken('1234');
      setIsLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout( () => {
      //   setIsLoading(false);
      let userToken;
      userToken = 'dean';
     
      console.log('user', userToken)
      dispatch({ type: 'RETRIEVE_TOKEN', token: 'token' })
    }, 1000);

  }, [])

  if (loginState.isLoading) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator size="large" color="#009387" />
      </View>
    )
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={HomestackScreen} />
            <Drawer.Screen name="Details" component={DetailstackScreen} />
            <Drawer.Screen name="Notifications" component={NotificStackScreen} />
            <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
