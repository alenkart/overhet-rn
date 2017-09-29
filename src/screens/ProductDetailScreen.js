import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import ProductHeader from './../components/ProductHeader';
import ProductButton from './../components/ProductButton';

export default class ProductDetailScreen extends React.Component {

    static navigationOptions = {
        title: 'Detail',
    };

    detail() {
        console.log('d');
    }

    web() {
        console.log('w');
    }

    comment() {
        console.log('c');
    }

    share() {
        console.log('s');
    }

    render() {

        const state = this.props.navigation.state;
        const product = state.params;

        console.log(product.title);

        return (
            <View>
                <View style={background.container}>
                    <Image source={{ uri: product.image }} style={bodyStyles.image} />
                </View>
                <View style={header.container}>
                    <ProductHeader product={product} fontColor={'#FFF'} />
                    <Text style={bodyStyles.title}>{product.title}</Text>
                </View>
                <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
                    <View style={{flexDirection: 'row'}}>
                        <ProductButton onPress={this.web} flex={1} iconColor="#FFF" iconSize={24} iconName="md-share"/>
                        <ProductButton onPress={this.web} flex={1} iconColor="#FFF" iconSize={24} iconName="md-share"/>
                        <ProductButton onPress={this.web} flex={1} iconColor="#FFF" iconSize={24} iconName="md-share"/>
                    </View>
                    <View style={{padding: 10, backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
                        <Text style={{color: '#FFF', textAlign: 'center'}}>{product.description}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const background = StyleSheet.create({
    container: {
        width: '100%'
    }
});

const header = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        width: '100%'
    }
});

const bodyStyles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        width: '100%',
        color: '#fff',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        textAlign: 'center'
    }
});
