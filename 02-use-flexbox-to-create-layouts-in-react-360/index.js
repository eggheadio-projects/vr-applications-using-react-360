import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-360';

export default class travelVR extends React.Component {
    render() {
        return (
            <View style={styles.mainView}>
                <Text style={styles.menuItem}>Poland</Text>
                <Text style={styles.menuItem}>Ukraine</Text>
                <Text style={styles.menuItem}>United Kingdom</Text>
                <Text style={styles.menuItem}>Spain</Text>
                <Text style={styles.menuItem}>Italy</Text>
                <Text style={styles.menuItem}>Greece</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: 600,
        padding: 10,
        backgroundColor: '#eee',
        alignItems: 'center'
    },
    menuItem: {
        fontSize: 40,
        width: '50%',
        marginTop: 5,
        backgroundColor: '#0298D0',
        color: 'white',
        textAlign: 'center'
    }
});

AppRegistry.registerComponent('travelVR', () => travelVR);
