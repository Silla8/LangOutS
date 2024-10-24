import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontSize } from "../constants/FontSize";
import { FontWeight } from "../constants/FontWeight";
import { useRouter } from "expo-router";
import { Colors } from "../constants/Colors";


export default function CustomRedButton({title, loading, handler}){

    const router = useRouter();
    return (
        <TouchableOpacity style={[styles.container, {opacity: loading ? 0.7 : 1} ]} disabled={loading} onPress={async()=> await handler()}>
                {loading ? <ActivityIndicator color={'white'} size={30}/> : <Text style={styles.text}>{title}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.RedColor, 
        width: 340, 
        height: 54, 
        borderRadius: 13, 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop: 15, 
        borderWidth: 1,
        borderColor: 'transparent'
    },
    text: {
        color: 'white', 
        fontSize: FontSize.Medium, 
        fontWeight: FontWeight.Bold
    },
})