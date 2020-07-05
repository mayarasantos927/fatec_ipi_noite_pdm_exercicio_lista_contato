import React from 'react';
import Colors from '../const/Colors'
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons'

const ButtonHeader = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'black' : Colors.primary}
        />
    );
}

export default ButtonHeader;