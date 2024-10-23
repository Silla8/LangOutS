import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/Colors";
import { FontSize } from "../constants/FontSize";
import { FontWeight } from "../constants/FontWeight";
import { useRouter } from "expo-router";
import CustomNavButton from "../components/CustomNavButton";



export default function Onboarding(){

    const router = useRouter();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/onImage.png')} style={{width: 200, height: 200, borderRadius: 200}}/>
            <Text style={styles.heading}>
                Find Your Community!
            </Text>
            <Text style={styles.text}>
                Solutions for passionate people
                to find friends with same passion  
            </Text>
            <CustomNavButton title={'GET STARTED'} path={'Welcome'}/> 
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.RedColor,
        rowGap: 18
    },
    heading: {
        fontSize: FontSize.Large,
        fontWeight: FontWeight.ExtraBold,
        color: Colors.BackgroundColor,
        width: '70%',
        textAlign: 'center'
    },
    text: {
        color: Colors.BackgroundColor,
        fontSize: FontSize.Small,
        width: '60%', 
        textAlign: 'center',
        

    }
});