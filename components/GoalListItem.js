import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.itemValue}</Text>
        </View>
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
