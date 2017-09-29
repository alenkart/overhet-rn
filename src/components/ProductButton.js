import React, {Component} from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default class ProductButton extends Component {

    render() {

        console.log(this.props);
        
        return (
            <TouchableHighlight onPress={this.props.onPress} style={{flex: this.props.flex}}>
                <View style={[styles.view, {backgroundColor: this.props.backgroundColor}]}>
                    <Ionicons 
                        name={this.props.iconName} 
                        size={this.props.iconSize} 
                        color={this.props.iconColor}/> 
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
});