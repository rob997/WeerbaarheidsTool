import * as React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-web';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function EmailCheck({ navigation }) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
                onPress={() => alert('This is the "Email" screen.')}
                style={{ backgroundColor: 'tomato', fontSize: 18, fontWeight: 'bold', justifyContent: 'space-between'}}>Hier kunt u testen of uw e-mailadres is getroffen door een hack op een database.</Text>
            <View>
                
            </View>
            <View>
                <Text
                style={{ fontSize: 20, fontWeight: 'bold', paddingTop: 50 }}>View inside a view!</Text>
            </View>
        </View>
    )
}