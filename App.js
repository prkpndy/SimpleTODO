import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, FlatList} from 'react-native';

// We should always place text inside the <Text> tag. Unlike Web Dev, we cannot put text anywhere we want
// Its common to have a lot of <View> component in your app
// React Native is all about adding the right Component, Placing them at the correct position (adding Layout or Structuring) and adding styles to them
// style attribute (called prop in react) requires a JS Object which we can pass as it is or we can use the StyleSheet.create() method of the Stylesheet API
// Note that all the attributes (in General all the JS Code) need to be inside curly braces ({})

// flexDirection: sets the main and the cross-axis. For 'row' main-axis will be horizontal
// justifyContent: controls the layout of the items along the main-axis
// alignItems: controls the layout of the items along the cross-axis

/*
    We should not use inline styling when the style object is very large. Instead, we should define our styles separately using Stylesheet.create() method
    This provides the following benefits:
        It checks for errors in property name and values and if their are any, throws an error to let you know
        React Native Developers might add some optimization in this method in the future
 */

// We should always add key property to each component when making a list of components (with the same tag) inside a single parent
// This helps react in optimizing our code
// All the keys should be unique, otherwise we will get a warning when we add two elements with the same key

// We cannot scroll a view by default
// If we want to scroll a view, we should use ScrollView component

/*
    But ScrollView component renders the whole list at once (i.e. if we have a list containing thousands of elements,
    than it will render the whole list at once, which we do not want as it will severely hamper the performance). Hence,
    to overcome this shortcoming of ScrollView, we use FlatList component, which will not render the whole list at once,
    but will render only the items which are visible on the screen at the moment. If you have a list of components
    in which the length of the list is known to be small (50-100), then you can use ScrollView for a better user experience.

    FlatList uses item list which is a list of objects, each object containing a 'key' property and the value of the list (can be named anything).
    The 'key' property is used to assign a unique key to the list (which is important for performance as explained above).
    Hence 'key' property should be unique.
    If we do not wish to name the 'key' property as 'key', then we have to define the keyExtractor property of FlatList
    component which will define how to extract key from our object (item)
    Note that the renderItem property in the FlatList component needs to be assigned a function which will receive an
    object (containing index, value etc.) and should return the item value which we need to display in the list
 */


// Function to generate unique key
const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');  // This state will store the goal being entered
    const [allGoals, setGoals] = useState([]);  // This state will store all the goals of the user

    const handleInputText = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const handleButtonPress = () => {
        console.log(enteredGoal);
        setGoals((currentGoals) => [...currentGoals, {uniqueID: generateKey(enteredGoal), value: enteredGoal}]);
        setEnteredGoal('');
        /*
            Although, according to our code, allGoals will always contain the latest list of all our code, but the
            way react works, it is not 100% guaranteed that this will be the case.
            Hence we use the above method of passing the function to the updateState() function.
            This will ensure that allGoals always contain the latest list of all the goals.
         */
    }

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={"Enter Course Goal"}
                    style={styles.inputField}
                    onChangeText={handleInputText}
                    value={enteredGoal}
                />
                <Button
                    title={"ADD"}
                    onPress={handleButtonPress}
                />
            </View>
            <FlatList
                keyExtractor={(item, index) => item.uniqueID}
                data={allGoals}
                renderItem={itemData => (
                    <View style={styles.listItem}>
                        <Text>{itemData.item.value}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inputField: {
        borderColor: "black",
        borderWidth: 1,
        width: '80%',
        padding: 10
    },
    listItem: {
        padding: 10,
        marginVertical: 20,
        backgroundColor: 'pink',
        borderColor: 'black',
        borderWidth: 1
    }
});
