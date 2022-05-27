import * as React from 'react';
import { View, Text } from 'react-native';

export default function PasswordCheck({ navigation }) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={() => navigation.navigate('E-mail')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Wachtwoord Scherm</Text>
        </View>
    )
}