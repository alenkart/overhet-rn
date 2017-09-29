import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class Article extends React.Component {

    web = () => {
        console.log(this.props.url);
    }

    render() {

        const article = this.props.article;

        return (
            <TouchableHighlight style={styles.container} onPress={this.web}>
                <View>
                    <Image style={styles.background} source={{ uri: article.image }} />
                    <View style={styles.innerContainer}>
                        <View>
                            <Image style={styles.image} source={{ uri: article.sourceImage }} />
                        </View>
                        <View>
                            <View>
                                <Text style={styles.text}>{article.title}</Text>
                                <Text style={styles.text}>{article.date}</Text>
                            </View>
                            <Text style={styles.text}>{article.description}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 1,
        marginBottom: 1,
        height: 120,
    },
    innerContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50
    },
    text: {
        color: '#FFF'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    }
}); 