import React from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class ArticleScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Articles'
    };

    render() {
        return (
            <View>
                <Text>Article</Text>
            </View>
        );
    }
}
