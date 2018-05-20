import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/components/Home/Home'
import LoginScreen from './src/components/Login/Login'
import AScreen from "./src/components/A";
import BScreen from "./src/components/B";
import CScreen from "./src/components/C";
import DScreen from "./src/components/D";
import EScreen from "./src/components/E";
const Left = ({ onPress }) => (
    <TouchableHighlight onPress={onPress}>
        <Image
            source={require('./img/ic_back.png')}
        />
    </TouchableHighlight>
);
const RootStack = StackNavigator(
    {
        Login:{
            screen: LoginScreen
        },
        Home: {
            screen: HomeScreen
        },
        A:{
            screen: AScreen
        },
        B:{
            screen: BScreen
        },
        C: {
            screen: CScreen
        },
        D:{
            screen: DScreen
        },
        E:{
            screen: EScreen
        }
    },
    {
        initialRouteName: 'Login',
    }
);
export const CloseButton = (props) => {
    let testButton = <TouchableHighlight onPress={() => props.navigation.goBack(null)}>
        <Icon name='close'/>
    </TouchableHighlight>
    return testButton
}

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
