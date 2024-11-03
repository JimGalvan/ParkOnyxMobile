import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon, NativeBaseProvider} from 'native-base';
import {Ionicons} from '@expo/vector-icons';

import HomeScreen from '../(tabs)/index';
import ExploreScreen from '../(tabs)/explore';

const Tab = createBottomTabNavigator();

const TabLayout: React.FC = () => {
    return (
        <NativeBaseProvider>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({color, size, focused}) => {
                        let iconName: string = 'default-icon'; // Provide a default value
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Explore') {
                            iconName = focused ? 'code-slash' : 'code-slash-outline';
                        }
                        return <Icon as={Ionicons} name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: '#6366F1', // Example accent color
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Explore" component={ExploreScreen}/>
            </Tab.Navigator>
        </NativeBaseProvider>
    );
};

export default TabLayout;