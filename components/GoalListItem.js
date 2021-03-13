import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

/*
    We can wrap our code around Touchable components if we want to generate some events on Touch.
    We can also register Touch events in View component, but Touchable component is built specifically for this purpose
    and hence is better.
    Their are various kind of effects that you can generate using different kind of Touchable (like TouchableHighlight,
    TouchableOpacity, TouchableWithoutFeedback, etc.)
    TouchableNativeFeedback component works only on Android
 */

const GoalListItem = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={props.onDelete}>
            <View style={styles.listItem}>
                <Text>{props.itemValue}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 20,
        backgroundColor: 'pink',
        borderColor: 'black',
        borderWidth: 1
    },
});

export default GoalListItem;
