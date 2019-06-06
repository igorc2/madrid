import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    button: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 36,
        color: '#fff',
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#384459',
        textAlign: 'center',
        borderWidth: 0.5,
        borderColor: '#242424'
    },
    operationButton: {
        backgroundColor: '#175451'
    },
    buttonDouble: {
        width: Dimensions.get('window').width / 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
});

export default props => {
    const stylesButton = [styles.button] 
    if(props.double)
        stylesButton.push(styles.buttonDouble);
    if(props.triple)
        stylesButton.push(styles.buttonTriple);
    if(props.operation)
        stylesButton.push(styles.operationButton);
    return  (
        <TouchableHighlight onPress={() => props.onClick(props.label)} >
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}