import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from "expo-linear-gradient";

import { styles } from "./styles";
import LOGO from "../../assets/logo.png";
import { useState } from "react";

export function Home() {

    enum TaskState {
        NEW,
        DONE
    }

    interface Task {
        name: string,
        state: TaskState
    };

    const [taskList, setTaskList] = useState<Task[]>([]);

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
                />
                <TouchableOpacity style={styles.addButton}>
                    <Ionicons name="add-circle-outline" size={16} color="#F2F2F2" />
                </TouchableOpacity>

            </View>

            <FlatList
                data={taskList}
                keyExtractor={task => task.name}
                renderItem={({ index, item }) => (
                    <Text key={index}>{item.name}</Text>
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