import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from "./styles";
import { Option } from "../Option";


export enum TaskState {
    NEW,
    DONE
}

export interface Task {
    name: string,
    state: TaskState
};

interface TaskProps extends Task {
    onDelete: (task: Task) => void;
    onCheck: (task: Task) => void;
}

export function Task(props: TaskProps) {

    return (
        <View style={styles(props).container} onTouchEnd={()=> props.onCheck(props)}>
            <View style={styles(props).taskOptionCheck}>
                <Option enabled={props.state === TaskState.DONE} />
            </View>
            <Text style={styles(props).taskText}>{props.name}</Text>
            <TouchableOpacity style={styles(props).deleteButton} onPress={() => props.onDelete(props)}>
                <Ionicons name="trash" size={20} color="#808080" />
            </TouchableOpacity>
        </View>
    );
}