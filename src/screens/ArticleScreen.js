import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Button
} from 'react-native';

import Article from './../components/Article';

export default class ArticleScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Article'
    };

    constructor() {
        super();
        this.state = {
            articles: [],
        };

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    async componentDidMount() {

        try {

            const res = await fetch('https://www.overhet.com/api/articles');
            const articles = await res.json();

            console.log(articles);

            this.setState({ articles });

        } catch (err) {

            console.error(err);
        }
    }

    generateArticles = (navigate) => {
        return this.state.articles.map((article) => {
            return <Article
                key={article.id}
                article={article}
                navigate={navigate} />
        });
    }

    render() {

        const { navigate } = this.props.screenProps.navigation;

        return (
            <ScrollView>
                {this.generateArticles(navigate)}
            </ScrollView>
        );
    }
}