import React from 'react';
import { Animated, asset, View } from 'react-360';
import Entity from 'Entity';
import Easing from 'Easing';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);
const LOW_JUMP_VALUE = 1.5;
const TOP_JUMP_VALUE = 1.75;

export default class Earth extends React.Component {
    rotation = new Animated.Value(0);
    jumpValue = new Animated.Value(LOW_JUMP_VALUE);

    spin() {
        this.rotation.setValue(0);
        Animated.timing(this.rotation, {
            toValue: 360,
            duration: 4000,
            easing: Easing.linear
        }).start(() => this.spin());
    }

    jump(value) {
        let currentVal =
            value === TOP_JUMP_VALUE ? LOW_JUMP_VALUE : TOP_JUMP_VALUE;
        Animated.timing(this.jumpValue, {
            toValue: currentVal,
            duration: 500
        }).start(() => this.jump(currentVal));
    }

    componentDidMount() {
        this.spin();
        this.jump(LOW_JUMP_VALUE);
    }

    render() {
        return (
            <View>
                <AmbientLight intensity={1.0} color={'#fff'} />
                <PointLight
                    intensity={1}
                    style={{ transform: [{ translate: [0, 1, 5] }] }}
                />
                <AnimatedEntity
                    source={{ gltf2: asset('Earth.gltf') }}
                    style={{
                        transform: [
                            { translateY: this.jumpValue },
                            { scale: 0.001 },
                            { rotateY: this.rotation }
                        ]
                    }}
                />
            </View>
        );
    }
}
