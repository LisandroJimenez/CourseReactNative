import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

const Stack = createStackNavigator()

const MainStackNavigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="ProductDetails" component={ProductDetailsScreen}/>
                <Stack.Screen name="Cart" component={CartScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;