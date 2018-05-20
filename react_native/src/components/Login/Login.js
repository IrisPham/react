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

class LoginScreen extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>

                <View style={styles.avatar}>
                    <Image style={{borderRadius: 10, width: 100, height: 100,}}
                           source={require('../../../img/avt.png')}></Image>
                </View>

                <Text style={styles.text}>Enjoy companionship and fun conversation</Text>

                <TextInput
                    style={{
                        height: 40,
                        padding: 2,
                        width: 245,
                        backgroundColor: '#FFf',
                        marginBottom: 5,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10
                    }}
                    onChangeText={(text) => this.setState({text})}
                    value="Public name"
                />
                <TextInput
                    style={{height: 40, padding: 2, width: 245, backgroundColor: '#FFf', marginBottom: 5}}
                    onChangeText={(text) => this.setState({text})}
                    value="Email"
                />

                <TextInput
                    style={{height: 40, padding: 2, width: 245, backgroundColor: '#FFf', marginBottom: 5}}
                    onChangeText={(text) => this.setState({text})}
                    value="Phone"
                />

                <TextInput
                    style={{height: 40, padding: 2, width: 245, backgroundColor: '#FFf', marginBottom: 5}}
                    onChangeText={(text) => this.setState({text})}
                    value="Password"
                />

                <TextInput
                    style={{
                        height: 40,
                        padding: 2,
                        width: 245,
                        backgroundColor: '#FFf',
                        marginBottom: 5,
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10
                    }}
                    onChangeText={(text) => this.setState({text})}
                    value="Confirm Password"
                />

                <TouchableOpacity style={styles.buttonSignUp}
                                  onPress={() => {
                                      /* 1. Navigate to the Details route with params */
                                      this.props.navigation.navigate('A')}}>
                    <Text style={{color: '#ffffff'}}> Sign Up </Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    content: {
        display: 'flex',
        width: 245,
        height: 245,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: "#ff0",
        flexDirection: 'column',
        padding: 10
    },

    toolbar: {
        display: 'flex',
        backgroundColor: '#118dcd',
        alignItems: 'center',
        justifyContent: 'center',
        width: 375,
        height: 50
    },

    lableToolar: {
        fontSize: 15,
        color: '#FFF',
        backgroundColor: '#118dcd',
    },

    text: {
        marginTop: 20,
        marginBottom: 20,
        width: 130,
        height: 50,
        fontSize: 13,
        textAlign: 'center'

    },

    buttonSignUp: {
        display: 'flex',
        width: 245,
        height: 46,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: "#118dcd",
    },

    avatar: {
        width: 100,
        height: 100,
        marginTop: 36,
    },
});

export default LoginScreen;