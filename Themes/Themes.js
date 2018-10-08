import React, { Component } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { ThemeStyle } from './ThemesStyle';
import Icon from 'react-native-vector-icons/FontAwesome';


export const ViewContainer = ({ children, ViewStyles }) => {
    return (
        <View style={[ThemeStyle.viewConatiner, ViewStyles]}>
            {children}
        </View>
    );
}

export const IconButton = ({ iconName, onBtnPress, IconStyle, iconSize, iconColor }) => {
    return (
        <TouchableOpacity onPress={onBtnPress}  >
            <Icon color={iconColor} size={iconSize} name={iconName} style={[IconStyle]} />
        </TouchableOpacity>
    )
};

export const CustomButton = ({ color, size, loading, disabled, onBtnPress, textToBeShown, buttonStyle, buttonTextStyle }) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={onBtnPress} style={[ThemeStyle.customButtonStyle, buttonStyle]}>
            <Text style={[ThemeStyle.btnTextStyle, buttonTextStyle]}>{textToBeShown}</Text>
            {loading && <ActivityIndicator color={color || "#fff"} size={size || "large"} style={ThemeStyle.buttonLoading} />}
        </TouchableOpacity>
    )
}