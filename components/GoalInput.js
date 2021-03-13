import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet} from "react-native";

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');  // This state will store the goal being entered

    const handleInputText = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={"Enter Course Goal"}
                style={styles.inputField}
                onChangeText={handleInputText}
                value={enteredGoal}
            />
            <Button
                title={"ADD"}
                onPress={() => {
                    props.onAddGoal(enteredGoal);
                    setEnteredGoal('');
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default GoalInput;
