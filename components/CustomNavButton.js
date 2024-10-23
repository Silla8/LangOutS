import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { FontSize } from "../constants/FontSize";
import { FontWeight } from "../constants/FontWeight";
import { useRouter } from "expo-router";


export default function CustomNavButton({title, path}){

    const router = useRouter();
    return (
        <TouchableOpacity style={[styles.container, {backgroundColor: title === 'SIGN UP' ? 'transparent' : 'black', borderColor: title === 'SIGN UP' ? 'white' : 'black'}]} onPress={()=> router.navigate(`/${path}`)}>
                <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'black', 
        width: '70%', 
        height: 54, 
        borderRadius: 13, 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop: 15, 
        borderWidth: 1,
    },
    text: {
        color: 'white', 
        fontSize: FontSize.Medium, 
        fontWeight: FontWeight.Bold
    },
})