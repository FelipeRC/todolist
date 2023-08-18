import { useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import LOGO from "../../assets/logo.png";

import { Task, TaskState } from "../../components/Task";

export function Home() {

    const [taskList, setTaskList] = useState<Task[]>([{ name: 'dsdada', state: TaskState.NEW }, { name: 'dsdada dsajdfjasfhdas sd sdasdasdas adasd sd  asdds', state: TaskState.DONE }]);

    const [taskDescription, setTaskDescription] = useState('');

    const sortTaskList = (taskList: Task[]) => {
        return taskList.sort((task1, task2) => {
            if (task1.state === task2.state) {
                return task1.name.localeCompare(task2.name);
            } else if (task1.state === TaskState.DONE) {
                return 1;
            }
            return -1;
        });
    }

    const handleTaskAdd = () => {
        if (taskDescription) {
            setTaskList(prevState => sortTaskList([...prevState, { name: taskDescription, state: TaskState.NEW }]));
            setTaskDescription('');
        }
    }

    const handleTaskDelete = (task: Task) => {
        setTaskList(prevState => prevState.filter(item => item.name !== task.name || item.state !== task.state));
    }

    const toggleCheckTask = (task: Task) => {
        setTaskList(prevState => sortTaskList(prevState.map(item => {
            if (item.name === task.name && item.state === task.state) {
                item.state = item.state === TaskState.NEW ? TaskState.DONE : TaskState.NEW;
            }
            return item;
        })));
    }

    return (
        <LinearGradient
            colors={['#0D0D0D', '#1A1A1A']}
            start={{ x: 0.5, y: 0.199 }}
            end={{ x: 0.5, y: 0.2 }}
            style={styles.container}
        >
            <Image source={LOGO} style={styles.logoImage}></Image>
            <View style={styles.addTaskContainer} >
                <TextInput
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    style={styles.taskDescriptionInput}
                    onChangeText={setTaskDescription}
                    value={taskDescription}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleTaskAdd}>
                    <Ionicons name="add-circle-outline" size={16} color="#F2F2F2" />
                </TouchableOpacity>

            </View>
            <View style={styles.taskCounterContainer}>
                <View style={styles.taskCounterNewContainer}>
                    <Text style={styles.createdText}>Criadas</Text>
                    <Text style={styles.counter}>{taskList.filter(task => task.state == TaskState.NEW).length}</Text>
                </View>
                <View style={styles.taskCounterDoneContainer}>
                    <Text style={styles.doneText}>Concluidas</Text>
                    <Text style={styles.counter}>{taskList.filter(task => task.state == TaskState.DONE).length}</Text>
                </View>
            </View>
            <FlatList
                data={taskList}
                keyExtractor={task => task.name}
                renderItem={({ index, item }) => (
                    <Task key={index} name={item.name} state={item.state} onDelete={handleTaskDelete} onCheck={toggleCheckTask} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <View style={styles.emptyListContainer}>
                        <Ionicons name="md-clipboard-outline" size={56} color="#808080" />
                        <Text style={[styles.emptyListText, styles.boldText]}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.emptyListText}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                }
            />
        </LinearGradient>
    );
}