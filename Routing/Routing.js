import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Signup from '../Components/Sign Up/Signup';
import Login from '../Components/Login/Login';
import Dashboard from '../Components/Dashboard/Dashboard'
import DrawerItems from './Drawer/DrawerItems';


export const Auth = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      header: null
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null
    }
  },

}, { initialRouteName: 'Login' });


export const Drawer = DrawerNavigator({
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      header: null
    }
  }
}, {
    // contentComponent: DrawerItems,
    drawerWidth: 300
  });