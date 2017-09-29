import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Button
} from 'react-native';

import Product from './../components/Product';

export default class ProductScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Product'
    };

    constructor() {
        super();
        this.state = {
            products: [],
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    async componentDidMount() {

        try {

            const res = await fetch('https://www.overhet.com/api/posts');
            const products = await res.json();

            this.setState({ products });

        } catch (err) {

            console.error(err);
        }
    }

    generateProducts = (navigate) => {
        return this.state.products.map((product) => {
            return <Product
                key={product.id}
                product={product}
                navigate={navigate} />
        });
    }

    render() {

        const { navigate } = this.props.screenProps.navigation;

        return (
            <ScrollView>
                {this.generateProducts(navigate)}
            </ScrollView>
        );
    }
}