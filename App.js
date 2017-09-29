import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/HomeScreen';
import ProductDetailScreen from './src/screens/ProductDetailScreen';

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  ProductDetail: { screen: ProductDetailScreen },
},
{
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  
});

export default class App extends React.Component {

  render() {
    return (<Navigator onNavigationStateChange={null}/>);
  }
}
