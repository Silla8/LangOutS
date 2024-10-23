import { Link, useRouter } from "expo-router"
import { View, Text, Pressable } from "react-native"

export default function index(){

    const router =useRouter();
    return <View style={{flex: 1, paddingTop: 50}}>
        <Pressable onPress={()=> router.replace('/Onboarding')}>
            <Text>
                Hello World
            </Text>

        </Pressable>
    </View>
}