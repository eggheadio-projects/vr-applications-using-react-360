import React from 'react';
import { AppRegistry, asset, StyleSheet, Image } from 'react-360';

export default class Flag extends React.Component {
    render() {
        const { flag } = styles;

        return <Image style={flag} source={asset(this.props.image)} />;
    }
}

const styles = StyleSheet.create({
    flag: {
        height: 400,
        width: 600,
        marginRight: 20
    }
});
