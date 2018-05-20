import React from 'react';
import { Button, View, Text } from 'react-native';
import EventEmitter from "react-native-eventemitter";
class AScreen extends React.Component {

    returnData(data) {
        //this.setState({id: id, name: name});
        alert(data)
    }
    componentWillMount() {
        // let callback = (v)=>{
        //     console.log("Main:", v);
        // };
        //Lang nghe
        EventEmitter.on("foo", (value)=>{
           // console.log("foo", value);
            alert(value)
        })
    }
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>A</Text>
                <Button
                    title="Chuyen huong sang B"
                    onPress={() => {this.props.navigation.navigate('B', {
                        index: this.props.navigation.state.key,
                        returnData: this.returnData.bind(this)
                    });
                    }}
                />
            </View>
        );
    }
}

export default AScreen;