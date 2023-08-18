import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    addTaskContainer: {
        flexDirection: "row"
    },
    logoImage: {
        width: 110,
        height: 32,
        margin: 45
    },
    taskDescriptionInput: {
        height: 54,
        width: 271,
        backgroundColor: '#262626',
        color: '#F2F2F2',
        borderRadius: 6,
        borderColor: '#0D0D0D',
        borderWidth: 1,
        padding: 16
    },
    addButton: {
        height: 52,
        width: 52,
        backgroundColor: '#1E6F9F',
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
        borderRadius: 6
    },
    addButtonText: {
        color: '#fff'
    },
    emptyListText: {
        fontSize: 14,
        color: '#808080'
    },
    boldText: {
        fontWeight: "bold"
    },
    emptyListContainer: {
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center"
    }
});