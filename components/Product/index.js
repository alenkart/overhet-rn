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

export default class Product extends React.Component {

    detail = () => {
        this.props.navigate(
            'ProductDetail',
            this.props.product
        );
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

        const product = this.props.product;

        return (
            <View style={styles.container}>
                <ProductHeader product={product} />
                <TouchableHighlight onPress={this.detail}>
                    <View>
                        <Image source={{ uri: product.image }} style={styles.image} />
                        <Text style={styles.title}>{product.title}</Text>
                    </View>
                </TouchableHighlight>
                <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
                    <ProductButton onPress={this.web} flex={1} backgroundColor={'#3498db'} />
                    <ProductButton onPress={this.comment} flex={1} backgroundColor={'#3498db'}/>
                    <ProductButton onPress={this.share} flex={1} backgroundColor={'#3498db'}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 1,
        marginBottom: 1,
        backgroundColor: '#FFF'
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        width: '100%',
        color: '#fff',
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        bottom: 0,
    }
});
