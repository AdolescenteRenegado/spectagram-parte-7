import React, { Component } from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabNavigator } from "./tabnavigator";
import Profile from "../screens/profile";
import PostScreen from "../screens/postScreen";
const stack = createStackNavigator();

export default class stackNavigator extends Component {
  render() {
    return (
      <stack.Navigator>
        <stack.Screen name="home" component={BottomTabNavigator} />
        <stack.Screen name="PostScreen" component={PostScreen} />
      </stack.Navigator>
    );
  }
}
