import { StyleSheet } from "react-native";

type OptionStylesProps = {
    enabled:boolean
}

export const styles =  (props:OptionStylesProps) => StyleSheet.create({
    container: {
        height: 17,
        width: 17,
        maxWidth:17,
        backgroundColor: props.enabled ? '#5E60CE' : 'transparent',
        borderColor: props.enabled ? '#5E60CE' : '#4EA8DE',
        borderWidth: 2,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    }
});