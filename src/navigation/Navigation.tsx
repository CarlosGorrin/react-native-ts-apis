import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import PokedexScreen from '../screens/Pokedex'
import AccountScreen from '../screens/Account'
import FavoriteScreen from '../screens/Favorite'

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Pokedex" component={PokedexScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
        </Tab.Navigator>
    )
}