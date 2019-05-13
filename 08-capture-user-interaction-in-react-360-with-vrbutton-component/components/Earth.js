import React from 'react';
import { AppRegistry, asset, View } from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';

export default class Earth extends React.Component {
    render() {
        return (
            <View>
                <AmbientLight intensity={1.0} color={'#fff'} />
                <PointLight
                    intensity={1}
                    style={{ transform: [{ translate: [0, 1, -1] }] }}
                />
                <Entity
                    source={{ gltf2: asset('earth.gltf') }}
                    style={{
                        transform: [
                            { translate: [0, 1.5, 0] },
                            { scale: 0.001 },
                            { rotateY: 180 }
                        ]
                    }}
                />
            </View>
        );
    }
}
