import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');  // This state will store the goal being entered

    const handleInputText = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
        <Modal visible={props.isModalVisible} animationType={'slide'}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder={"Enter Goal"}
                    style={styles.inputField}
                    onChangeText={handleInputText}
                    value={enteredGoal}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button
                            title={"CANCEL"}
                            color={'red'}
                            onPress={props.onCancel}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title={"ADD"}
                            onPress={() => {
                                props.onAddGoal(enteredGoal);
                                setEnteredGoal('');
                            }}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputField: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        padding: 10,
        marginBottom: 10
    },
    buttonsContainer: {
        width: '60%',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button: {
        width: '35%'  // We cannot add styles to a Button component. We have to use View Component.
    },
})

export default GoalInput;
