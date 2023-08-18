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
        alignItems: "center",
        justifyContent: "center",
        borderTopColor: '#313131',
        borderTopWidth: 1,
        paddingTop:50,
        width:327
    },
    createdText: {
        color:'#4EA8DE',
        fontWeight: "bold"
    },
    doneText: {
        color:'#8284FA',
        fontWeight: "bold"
    },
    taskCounterContainer: {
        flexDirection: "row",
        width:327,
        marginBottom: 20,
        marginTop: 20,
    },
    taskCounterNewContainer:{
        flexDirection: "row",
        flex:1
    },
    taskCounterDoneContainer:{
        flexDirection: "row",
        flex:1,
        justifyContent: "flex-end"
    },
    counter:{
        width:25,
        height:19,
        borderRadius:999,
        textAlign: "center",
        textAlignVertical: "center",
        color: '#D9D9D9',
        fontSize: 12,
        backgroundColor:'#333333',
        marginLeft: 10,
        fontWeight: "bold"
    }
});