import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import HomeTab from './../HomeTab';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Overhet',
    };

    render() {
        return (<HomeTab screenProps={{navigation : this.props.navigation}}/>);
    }
}