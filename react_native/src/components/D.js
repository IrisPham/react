import React from 'react';
import { Button, View, Text } from 'react-native';
class DScreen extends React.Component {
    render() {
        /* 2. Read the params from the navigation state */
        const { params } = this.props.navigation.state;
        const index = params ? params.index : null;
        const returnData = params ? params.returnData : null;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text> D {JSON.stringify(index)}</Text>
                <Button
                    title="Chuyen huong sang E"
                    onPress={() => {this.props.navigation.navigate('E', {
                        index: index,
                        returnData: returnData
                    });}}
                />
            </View>
        );
    }
}

export default DScreen;