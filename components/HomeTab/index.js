import { TabNavigator } from 'react-navigation';
import ProductScreen from './../ProductScreen';
import ArticleScreen from './../ArticleScreen';

export default TabNavigator({
    Main: { screen: ProductScreen },
    Article: { screen: ArticleScreen },
});