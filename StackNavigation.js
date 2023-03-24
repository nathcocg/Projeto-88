import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import StoryScreen from "../screens/StoryScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName = "Home"
            screenOptions={{
                headerShowm: false
            }}
        >
            <Stack.Screen name = "Tela Inicial" component = {TabNavigator}/>
            <Stack.Screen name = "Tela de Posts" component = {PostScreen}/>
        </Stack.Navigator>

    );
};

export default StackNavigator;