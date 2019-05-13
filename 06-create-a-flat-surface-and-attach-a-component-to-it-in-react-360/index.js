import React from 'react';
import { AppRegistry, asset, StyleSheet, View, Image } from 'react-360';
import Flag from './components/Flag';

export default class travelVR extends React.Component {
    render() {
        const { mainView } = styles;

        return <View style={mainView} />;
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: 4680,
        height: 600,
        opacity: 0.3,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

AppRegistry.registerComponent('travelVR', () => travelVR);
AppRegistry.registerComponent('Flag', () => Flag);
