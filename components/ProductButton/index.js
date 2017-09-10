import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

export default function (props) {

    return (
        <TouchableHighlight onPress={props.onPress} style={{flex: props.flex}}>
            <View style={[styles.view, {backgroundColor: props.backgroundColor}]}>
                <Image source={{ uri: 'http://www.iconsdb.com/icons/preview/white/search-3-xxl.png' }} style={styles.icon} />
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    }
});