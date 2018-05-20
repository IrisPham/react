import React from 'react';
import { Button, View, Text } from 'react-native';
import EventEmitter from "react-native-eventemitter";
import { BackHandler } from 'react-native'
class EScreen extends React.Component {
    // static navigationOptions = {
    //     headerLeft:
    //         (<TouchableHighlight onPress={this.alertMe.bind(this)} >
    //             <Text>asd</Text>
    //         </TouchableHighlight>)
    //
    // };
    constructor() {
        super()
        this.state = {index: null};
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    handleBackButtonClick() {
        this.props.navigation.goBack(this.state.index);
        return true;
    }

    getIndex(){
        return this.state.index
    }
    sendMessage(){
        //Su kien kich hoat 1
        EventEmitter.emit("foo", "Hello ........");
    }
    render() {
        /* 2. Read the params from the navigation state */
        const { params } = this.props.navigation.state;
        const index = params ? params.index : null;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> E {JSON.stringify(index)}</Text>
                <Button
                    title="Chuyen huong sang A"
                    onPress={() => {
                        this.state.index = index
                        //this.props.navigation.state.params.returnData('Data from E Screen');
                        this.sendMessage()
                        this.props.navigation.goBack(this.state.index);
                    }}
                />
            </View>
        );
    }
}

export default EScreen;