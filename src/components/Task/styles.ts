import { StyleSheet } from "react-native";
import { TaskState } from ".";

type TaskStylesProps = {
    state: TaskState
}

export const styles = (props: TaskStylesProps) => StyleSheet.create({
    container: {
        height: 62,
        width: 327,
        backgroundColor: '#262626',
        marginBottom: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderColor: props && props.state === TaskState.NEW ? '#333333' : '#262626',
        borderWidth: 1,
        borderRadius: 8
    },
    taskText: {
        height: 40,
        width: 235,
        fontSize: 14,
        color: props && props.state === TaskState.NEW ? '#F2F2F2' : '#808080',
        textDecorationLine: props.state === TaskState.NEW ? 'none' : "line-through",
        textAlignVertical: "center"

    },
    deleteButton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    taskOptionCheck: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});