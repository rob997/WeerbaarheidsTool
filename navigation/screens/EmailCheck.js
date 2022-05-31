import * as React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from '../styles/styles.js'

export default function EmailCheck({ navigation }) {
    return(
        <View style={styles.mainview}>

            <View style={styles.titleview}>
                <Text
                onPress={() => alert('This is the "Email" screen.')}
                style={styles.title}>
                    Hier kunt u testen of uw e-mailadres is getroffen door een hack op een database.</Text>
            </View>

            <View style={styles.inputview}>
                <Text>Vul hier uw email in:</Text>
                <TextInput
                style={styles.input} placeholder='email@domain.com'></TextInput>
            </View>
            
            <View style={styles.resultview}>
                <Text>
                    Resultaten:
                </Text>
            </View>

        </View>
    )
}

