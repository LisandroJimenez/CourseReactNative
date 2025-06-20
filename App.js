import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons'
import { useState } from "react";

import Task from "./components/Task";

export default function App() {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([])

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, { text: task, completed: false }])
            setTask("");
        }
    }

    const completeTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    }

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }
    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>To Do List App</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="add new Task"
                    value={task}
                    onChangeText={setTask}
                />
                <TouchableOpacity style={styles.button} onPress={addTask}>
                    <Text style={styles.add}>Add</Text>
                </TouchableOpacity>
            </View>

            {
                tasks.map((task, index) => (
                    <Task
                        key={index}
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        deleteTask={deleteTask}
                    />
                ))
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        justifyContent: 'center'
    },
    button: {
        backgroundColor: "#1e90ff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,

    },
    add: {
        color: '#fff',
        fontSize: 16
    }
})
