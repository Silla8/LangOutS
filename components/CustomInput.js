import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert } from "react-native";


export default function CustomInput({title, value, setter}){
    const [show, setShow]= useState(false);

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 16, fontWeight: '400'}}>{title}</Text>
            <View style={styles.inputBox}>
                <TextInput style={styles.inputField} onChangeText={(text)=>setter(text)} value={value}/>
                {(title === 'Password *' || title === 'Confirm password *') && <Feather name= {show ? "eye": "eye-off"} size={30} color="black"  onPress={()=> setShow(!show)}/>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    inputBox: {
        flexDirection: 'row', 
        alignItems: 'center', 
        borderColor: 'black', 
        borderWidth: 1, 
        borderRadius: 13, 
        paddingHorizontal: 3
    },
    inputField:{ 
        width:  335, 
        height: 54, }
})