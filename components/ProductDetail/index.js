import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import ProductHeader from './../ProductHeader';
import ProductButton from './../ProductButton';

export default class ProductDetail extends React.Component {

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
                <View style={{ position: 'absolute', bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <View style={{flexDirection: 'row'}}>
                        <ProductButton onPress={this.web} flex={0} />
                        <ProductButton onPress={this.comment} flex={0} />
                        <ProductButton onPress={this.share} flex={0} />
                    </View>
                    <View style={{padding: 10, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
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
