import React from "react";
import { StyleSheet, Text } from "react-native";
import MaIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FaIcon from "react-native-vector-icons/FontAwesome5";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from "../Login";
import PhoneNumber from "../PhoneNumber";
import Otp from "../Otp";
import Signup from "../Signup";
import Home from "../Home";
import Orders from "../Orders";
import Profile from "../Profile";
import Wallet from "../Wallet";
import SplashScreen from "../SplashScreen";
import ProfileEdit from "../ProfileEdit";
import Schedule from "../Schedule";
import Cart from "../Cart";
import Map from "../Map";
import Notification from "../Notification";

export default function Routes({ navigation }) {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const Loginstack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="phonenumber" component={PhoneNumber} />
      <Stack.Screen name="otp" component={Otp} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
  const Tabstack = () => (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Home
            </Text>
          ),
          title: "Home",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FaIcon
                name="home"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Orders
            </Text>
          ),
          title: "Orders",
          tabBarIcon: ({ focused }) => {
            return (
              <FaIcon
                name="shopping-bag"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Wallet
            </Text>
          ),
          title: "Wallet",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <MaIcon
                name="wallet"
                size={25}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 10,
                color: focused ? "#098D73" : "#ABDDD3",
              }}
            >
              Profile
            </Text>
          ),
          title: "Profile",
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <FaIcon
                name="user-alt"
                size={23}
                color={focused ? "#098D73" : "#ABDDD3"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
  const Mainstack = () => (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="home"
        component={Tabstack}
      />
      <Stack.Screen name="editprofile" component={ProfileEdit} />
      <Stack.Screen name="schedule" component={Schedule} />
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen name="Map" component={Map} />
      <Stack.Screen name="notifications" component={Notification} />
    </Stack.Navigator>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="mainsplashscreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="mainsplashscreen" component={SplashScreen} />
        <Stack.Screen name="mainloginscreen" component={Loginstack} />
        <Stack.Screen name="maintabscreen" component={Mainstack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
