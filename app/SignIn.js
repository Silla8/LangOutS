import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { FontWeight } from "../constants/FontWeight";
import { FontSize } from "../constants/FontSize";
import CustomInput from "../components/CustomInput";
import CustomRedButton from "../components/CustomRedButton";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { useSession } from "../context/SessionContext";
import { useRouter } from "expo-router";



export default function SignIn(){
    const [loading, setLoading] = useState(false);
    const [password, setPassword]= useState("");
    const [email, setEmail]= useState("");
    const {SignIn} = useSession();

    const handleSignIn= async ()=>{
        if(email==="" || password==="" ){
           
            Alert.alert('Sign In', 'All fields are required for signing in');
            return;
        }

        if(!/^\S+@\S+\.\S+$/.test(email))
        {
            Alert.alert('Sign In', 'Please, provide a valid email address');
            return;
        }


        if(password.length<6)
        {
            Alert.alert('Sign In', 'Password should be at least 6 characters');
            return;
        }


        setLoading(true);
        const response = await SignIn(email, password);
        setLoading(false);

        if(!response.success){
                Alert.alert('Sign In', response.message);
        }

           
    }

    return (
        <KeyboardAvoidingView style={styles.container}> 
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.heading}>Welcome back</Text>
                    <Text style={styles.subHeading}>Don’t have an account? <Text style={{fontWeight: '700'}} onPress={()=> Alert.alert('Terms and Conditions', 'Terms and conditions')}>Sign Up</Text></Text>
                </View>
                <View style={{marginTop: 40, rowGap: 10, marginBottom: 20}}>
                    
                        <CustomInput title={'Email'} value={email} setter={setEmail}/>
                        <CustomInput title={'Password'} value={password} setter={setPassword}/>
                   
                </View>
                <View style={{ width: 340}}>
                    <Text style={{fontWeight: '700'}} onPress={()=> Alert.alert('Forgot password', 'recover password')}>Forgot Password?</Text>
                </View>
                
                <CustomRedButton title={'SIGN IN'} handler={handleSignIn} loading={loading}/>
                <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 10, rowGap: 10}}>
                    <Text style={{fontWeight: 'bold'}}>OR</Text>
                    <AntDesign name="google" size={24} color="white" style={{backgroundColor: Colors.RedColor, padding: 5, borderRadius: 3}}/>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({

    heading:{
        color: Colors.RedColor,
        fontWeight: '700',
        fontSize: 20,
        textAlign: 'center'
    },
    subHeading:{
        color: 'black',
        fontWeight: '400',
        fontSize: 16,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BackgroundColor
    },
    text: {
        fontSize: FontSize.Large,
        fontWeight: FontWeight.ExtraBold,
        color: Colors.BackgroundColor
    },
    header: {
        
       
    },
});