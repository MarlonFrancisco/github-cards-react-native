import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Search from "./screens/Search";
import Home from "./screens/Home";

export const routes = createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions: {
            title: "Enter"
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: "Home"
        }
    } 
},{
    headerMode: "none",
    mode: "modal",
});
