import { Stack, Tabs } from "expo-router";

export default function AppLayout(){

    return (
        <Stack>
            <Stack.Screen  name= 'index' options={{ headerShown: false}}/>
            <Stack.Screen  name= 'Flash' options={{ headerShown: false}}/>
            <Stack.Screen  name= 'Onboarding' options={{ headerShown: false}}/>
            <Stack.Screen  name= 'Welcome' options={{ headerShown: false}}/>
            <Stack.Screen name= '(tabs)' options={{ headerShown: false}}/>
        </Stack>
    );
}