import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";



export default function profile(){

    return (
        <View style={styles.container}>
            <Text>
                Profile Page of Langouts!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BackgroundColor
    }
});