import React from 'react';
import { AppRegistry, asset, StyleSheet, Image } from 'react-360';

export default class Flag extends React.Component {
    render() {
        const { flag, active } = styles;
        const { image, activeFlag } = this.props;

        return (
            <Image
                style={[flag, activeFlag === image && active]}
                source={asset(image)}
            />
        );
    }
}

const styles = StyleSheet.create({
    flag: {
        height: 400,
        width: 600,
        marginRight: 20,
        opacity: 0.7
    },
    active: {
        opacity: 1
    }
});
