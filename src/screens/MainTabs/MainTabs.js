import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FindPlaceScreen from '../FindPlace/FindPlace';
import SharePlaceScreen from '../SharePlace/SharePlace';

const gettabBarIcon = ({ navigation, focused, tintColor }) => {
    const { routeName } = navigation.state;
    const IconComponent = MaterialIcons;
    let iconName;
    if (routeName === 'FindPlace') {
        iconName = `map${focused ? '' : '-outline'}`;
    } else if (routeName === 'SharePlace') {
        iconName = `share${focused ? '' : '-outline'}`;
    }
    return <IconComponent name={iconName} size={24} color={tintColor} />;
};

const MainTabs = createBottomTabNavigator(
    {
        FindPlace: FindPlaceScreen,
        SharePlace: SharePlaceScreen 
    },
    {
        initialRouteName: 'FindPlace',
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                gettabBarIcon(navigation, focused, tintColor);
            }
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'grey',
            style: {
                backgroundColor: '#fff',
              }
        }
    }
);

export default MainTabs;
