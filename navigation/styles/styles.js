import { StyleSheet } from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';

export default StyleSheet.create({
    generalview:{

    },
    
    mainview:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray'
    },
    
    titleview: {
        marginTop: '5%',
        padding: '3%',
        height: '15%',
        width: '90%',
        //backgroundColor: 'blue',
        borderColor: 'black',
        borderWidth: 1,
    },

    title: {
        //backgroundColor: 'tomato',
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'space-between'
    },

    inputview:{
        marginTop: '10%',
        marginBottom: '5%',
        padding: 5,
        height: '20%',
        width: '90%',
        //backgroundColor: 'green',
        borderColor: 'black',
        borderWidth: 1,

    },

    inputtext:{

    },

    input: {
        alignItems: 'stretch',
        height: 40,
        width: '75%',
        margin: 12,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        backgroundColor: 'lightgrey',
    },

    resulttext:{

    },

    resultview: {
        flex: 1,
        marginBottom: '5%',
        padding: 5,
        height: '40%',
        width: '90%',
        //backgroundColor: 'yellow',
        borderColor: 'black',
        borderWidth: 1,
    },

});