import React from 'react';
import {
    AppRegistry,
    asset,
    StyleSheet,
    View,
    Image,
    VrButton
} from 'react-360';
import Flag from './components/Flag';
import Earth from './components/Earth';

const FLAGS_IMAGES = [
    'flag_nasa.png',
    'flag_spain.png',
    'flag_italy.png',
    'flag_ukraine.jpg'
];

export default class travelVR extends React.Component {
    state = {
        activeFlag: ''
    };

    renderFlags() {
        return FLAGS_IMAGES.map(image => (
            <VrButton
                key={image}
                onClick={() => console.log('Click')}
                onEnter={() => this.setState({ activeFlag: image })}
                onExit={() => this.setState({ activeFlag: '' })}
            >
                <Flag image={image} activeFlag={this.state.activeFlag} />
            </VrButton>
        ));
    }

    render() {
        const { flagContainer } = styles;

        return <View style={flagContainer}>{this.renderFlags()}</View>;
    }
}

const styles = StyleSheet.create({
    flagContainer: {
        height: 600,
        width: 4680,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

AppRegistry.registerComponent('travelVR', () => travelVR);
AppRegistry.registerComponent('Flag', () => Flag);
AppRegistry.registerComponent('Earth', () => Earth);
