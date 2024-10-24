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



export default function SignUp(){

    const [username, setUsername]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [confirmPassword, setConfirmPassword]= useState("");
    const [loading, setLoading]= useState(false);
    const {SignUp} = useSession();


    const handleSignUp= async ()=>{
        if((username==="" || email==="") || (password==="" || confirmPassword==="")){
           
            Alert.alert('Sign Up', 'All fields are required for signing up');
            return;
        }

        if(!/^\S+@\S+\.\S+$/.test(email))
        {
            Alert.alert('Sign Up', 'Please, provide a valid email address');
            return;
        }

        if(password!==confirmPassword){

            Alert.alert('Sign Up', 'Please, confirm your password for signing up');
            return;
        }

        if(password.length<6)
        {
            Alert.alert('Sign Up', 'Password should be at least 6 characters');
            return;
        }

        if(username.trim().split(' ')[0].length<2)
        {
            Alert.alert('Sign Up', 'Username (first) should be at least 2 characters');
            return;
        }

        setLoading(true);
        const response = await SignUp(email, password, username);
        setLoading(false);

        if(!response.success){
                Alert.alert('Sign Up', response.message);
        }

           
    }
    return (
        <KeyboardAvoidingView style={styles.container}> 
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.heading}>Register</Text>
                    <Text style={styles.subHeading}>Already have an account? <Text style={{fontWeight: '700'}} onPress={()=> Alert.alert('Terms and Conditions', 'Terms and conditions')}>Sign in</Text></Text>
                </View>
                <View style={{height: '40%', marginTop: 50}}>
                    <ScrollView contentContainerStyle={{rowGap: 10}}> 
                        <CustomInput title={'Username *'} value={username} setter={setUsername}/>
                        <CustomInput title={'Email *'} value={email} setter={setEmail}/>
                        <CustomInput title={'Password *'} value={password} setter={setPassword}/>
                        <CustomInput title={'Confirm password *'} value={confirmPassword} setter={setConfirmPassword}/>
                    </ScrollView>
                </View>
                <Text style={{width: 360, fontSize: 14, fontWeight: 400, marginTop: 5}}>
                    By signing up you agree to our <Text style={{fontWeight: '700'}} onPress={()=> Alert.alert('Terms and Conditions', 'Terms and conditions')}>Terms & Conditions and  Privacy Policy</Text>
                </Text>
                <CustomRedButton title={'SIGN UP'}  handler={handleSignUp} loading={loading}/>
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