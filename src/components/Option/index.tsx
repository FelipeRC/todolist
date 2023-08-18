import { StyleProp, StyleSheet, StyleSheetProperties, Text, View, ViewStyle } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { styles } from "./styles";

type OptionProps = {
    enabled: boolean;
    style?: StyleProp<ViewStyle>
}

export function Option(props: OptionProps) {

    return (
        <View style={[props.style, styles(props).container]}>
            {props.enabled && <Feather name={props.enabled ? "check" : "check"} size={8} color="#F2F2F2" />}
        </View>
    );

}