import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { useSession } from "../../context/SessionContext";



export default function profile(){

    const {SignOut}= useSession();

    const handleSignOut = async ()=>{

        await SignOut()
    }
    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold', borderColor: 'black', borderWidth: 1, padding: 20}} onPress={handleSignOut}>
                Click to Sign Out
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BackgroundColor,
        
    }
});