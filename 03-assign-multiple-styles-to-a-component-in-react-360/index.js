import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-360';

export default class travelVR extends React.Component {
    render() {
        const {
            mainView,
            menuItem,
            poland,
            ukraine,
            uk,
            spain,
            italy,
            greece,
            redText
        } = styles;

        return (
            <View style={mainView}>
                <Text style={[menuItem, poland]}>Poland</Text>
                <Text style={[menuItem, ukraine]}>Ukraine</Text>
                <Text style={[menuItem, uk]}>United Kingdom</Text>
                <Text style={[menuItem, spain]}>Spain</Text>
                <Text style={[menuItem, italy, redText]}>Italy</Text>
                <Text style={[menuItem, greece]}>Greece</Text>
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
    },
    poland: {
        backgroundColor: '#DC143C'
    },
    ukraine: {
        backgroundColor: '#FFD500'
    },
    uk: {
        backgroundColor: '#00247D'
    },
    spain: {
        backgroundColor: '#C60D1F'
    },
    italy: {
        backgroundColor: '#029246'
    },
    greece: {
        backgroundColor: '#0D5EAF'
    },
    redText: {
        color: 'red'
    }
});

AppRegistry.registerComponent('travelVR', () => travelVR);
