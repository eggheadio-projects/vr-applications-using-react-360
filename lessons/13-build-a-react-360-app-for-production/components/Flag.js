import React from 'react';
import { AppRegistry, asset, StyleSheet, Image } from 'react-360';

export default class Flag extends React.Component {
    render() {
        const { flag } = styles;
        const { activeFlag, image } = this.props;

        return (
            <Image
                style={[flag, activeFlag === image && styles.activeFlag]}
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
    activeFlag: {
        opacity: 1
    }
});
