import React from 'react';
import { TabNavigator } from 'react-navigation';

import ProductScreen from './../screens/ProductScreen';
import ArticleScreen from './../screens/ArticleScreen';

export default TabNavigator({
    Main: { screen: ProductScreen },
    Article: { screen: ArticleScreen },
});