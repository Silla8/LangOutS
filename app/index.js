import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { FontSize } from "../constants/FontSize";
import { FontWeight } from "../constants/FontWeight";


export default function index(){

    return (
        <View style={styles.container}>
            <Text style={styles.text} >
                LangOutS
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.RedColor
    },
    text: {
        fontSize: FontSize.Large,
        fontWeight: FontWeight.ExtraBold,
        color: Colors.BackgroundColor
    }
});