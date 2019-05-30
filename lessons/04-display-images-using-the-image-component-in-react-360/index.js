import React from 'react';
import { AppRegistry, asset, StyleSheet, View, Image } from 'react-360';

export default class travelVR extends React.Component {
    render() {
        const { mainView, flag } = styles;

        return (
            <View style={mainView}>
                <Image
                    style={flag}
                    source={{
                        uri:
                            'https://upload.wikimedia.org/wikipedia/commons/5/5a/Flag_of_Poland.jpg'
                    }}
                />
                <Image style={flag} source={asset('flag_italy.png')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {
        width: 1000,
        height: 600,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    flag: {
        width: 400,
        height: '40%'
    }
});

AppRegistry.registerComponent('travelVR', () => travelVR);
