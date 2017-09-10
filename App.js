import React from 'react';
import { Platform, StatusBar } from 'react-native';
import HomeScreen from './components/HomeScreen';
import ProductDetail from './components/ProductDetail';
import { StackNavigator } from 'react-navigation';

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  ProductDetail: { screen: ProductDetail },
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
