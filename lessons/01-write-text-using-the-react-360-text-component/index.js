import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-360';

export default class travelVR extends React.Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Text style={styles.greeting}>Hello Egghead!</Text>
                <Text style={styles.greeting}>Hello again!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: 600,
        height: 600,
        padding: 10,
        backgroundColor: '#eee'
    },
    greeting: {
        fontSize: 40,
        width: '50%',
        marginTop: 5,
        backgroundColor: '#0298D0',
        color: 'white'
    }
});

AppRegistry.registerComponent('travelVR', () => travelVR);
