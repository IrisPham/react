/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

import {
    StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
});

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
const DEFAULT_PADDING = { top: 200, right: 40, bottom: 40, left: 40 };
const MARKERS = {
    latitude: 10.788709,
    longitude: 106.675926
};
const MARKERS2 = {
    latitude: 21.029806,
    longitude: 105.836448
};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Useless Placeholder',
            markers: [{
                title: 'Hello HCM',
                coordinates: {
                    latitude: 10.788709,
                    longitude: 106.675926
                },
                description: 'HCM'
            },
                {
                    title: 'Hello Ha Noi',
                    coordinates: {
                        latitude: 21.029806,
                        longitude: 105.836448
                    },
                    description: 'Ha Noi'
                }],
            cor:[{
                latitude: 10.788709,
                longitude: 106.675926
            },{
                latitude: 10.788709,
                longitude: 106.675926
            }]
        };
        this.mapRef = null;
    }

    fitAllMarkers() {
        this.mapRef.fitToCoordinates([MARKERS,MARKERS2], {
            edgePadding: DEFAULT_PADDING,
            animated: true,
        });
    }



    render() {

        return (
            <View style={styles.container}>
                <MapView
                    ref={(ref) => { this.mapRef = ref }}
                    style={styles.map}
                    showsMyLocationButton={true}>
                    {this.state.markers.map(marker => (
                        <Marker
                            coordinate={marker.coordinates}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))}
                </MapView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => this.fitAllMarkers()}
                        style={[styles.bubble, styles.button]}
                    >
                        <Text>Fit All Markers</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        height: 600,
        width: 450,
    }
    ,
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    button: {
        marginTop: 12,
        paddingHorizontal: 12,
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'column',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});
