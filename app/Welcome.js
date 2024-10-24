import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { FontSize } from "../constants/FontSize";
import { FontWeight } from "../constants/FontWeight";
import CustomNavButton from "../components/CustomNavButton";



export default function Welcome(){

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Welcome
            </Text>
            <View style={{position: 'absolute', bottom: 90, }}>
                <CustomNavButton title={'SIGN IN'} path={'SignIn'}/>
                <CustomNavButton title={'SIGN UP'} path={'SignUp'}/>
            </View>
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
    heading: {
        fontSize: FontSize.Large,
        fontWeight: FontWeight.Bold,
        color: Colors.BackgroundColor,
        marginTop: -90,
        
    }
});