import React from 'react';
import { Button, View, Text } from 'react-native';
class HomeScreen extends React.Component {
    render() {
        /* 2. Read the params from the navigation state */
        const { params } = this.props.navigation.state;
        const itemId = params ? params.itemId : null;
        return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Button
                    title="das"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

export default HomeScreen;