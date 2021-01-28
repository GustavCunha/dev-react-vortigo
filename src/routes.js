import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Feather} from '@expo/vector-icons';

import Landing from './pages/Landing';
import RegisterName from './pages/RegisterName';
import RegisterType from './pages/RegisterType';
import Home from './pages/Home';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Landing" screenOptions={{headerShown: false}}>
                <Stack.Screen 
                    name="Landing" 
                    component={Landing} 
                />
                
                <Stack.Screen 
                    name="RegisterName" 
                    component={RegisterName} 
                />
                
                <Stack.Screen 
                    name="RegisterType" 
                    component={RegisterType} 
                />

                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    // options={{
                    //     headerShown: true,
                    //     headerTitle: 'Pokemon Finder',
                    //     headerTitleAlign: 'center',
                    //     headerRight: () => {
                    //         return(
                    //             <Feather name="search" size={24} color="#000" />
                    //         )
                    //     }
                    // }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}