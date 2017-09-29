import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default class ProductHeader extends React.Component {

    render() {

        const product = this.props.product;
        
        product.backgroundColor = '#3498db';

        if (product.offer >= product.price) {

            product.price = '0.00';
            product.discount = 'FREE';
            product.backgroundColor = '#27ae60';
        } else {

            product.discount = Math.round(product.offer / product.price * 100)+"%";
        }

        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: product.sourceImage }} style={styles.image} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={[styles.sourceName, { color: this.props.fontColor }]}>{product.sourceName}</Text>
                    <Text style={[styles.date, {color: this.props.fontColor}]}>{product.date}</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={[styles.price, { color: this.props.fontColor }]}>${product.price}</Text>
                    <Text style={[styles.offer, { color: this.props.fontColor }]}>${product.offer}</Text>
                </View>
                <View style={[styles.discountContainer, {backgroundColor: product.backgroundColor}]}>
                    <Text style={styles.discount}>{product.discount}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        width: 40,
        height: 40
    },
    imageContainer: {
        marginLeft: 10,
        justifyContent: 'center',
    },
    sourceName: {
        fontWeight: 'bold'
    },
    infoContainer: {
        flex: 2,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center'
    },
    date: {
        color: '#000',
    },
    price: {
        color: '#000',
        textDecorationLine: 'line-through'
    },
    offer: {
        color: '#000',
        fontWeight: 'bold'
    },
    priceContainer: {
        marginRight: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    discount: {
        color: '#FFF',
        textAlign: 'center'
    },
    discountContainer: {
        width: 60,
        height: 60,
        justifyContent: 'center'
    }
});