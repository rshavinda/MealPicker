import React from "react";
import { Text } from "react-native";

export const AppHeader = () => (
    <Text style = {{
        fontFamily: 'Satisfy-Regular',
        textDecorationLine: 'underline',
        textDecorationColor: '#41b6e6',
        color: '#db3eb1',
        fontSize: 30
    }}>
        Meal Picker
    </Text>
)