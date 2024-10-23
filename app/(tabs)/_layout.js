import { FontAwesome, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import {Colors} from "../../constants/Colors";


export default function TabLayout(){


    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle:{
                backgroundColor:Colors.BackgroundColor,
                borderTopWidth: 0,
              },
        }}>
            <Tabs.Screen  
                name='Home' 
                options={{
                            title: 'Home',
                            tabBarIcon: ({ focused }) => <FontAwesome size={30} name="home" color={focused ? Colors.RedColor : "black"} />,
                        }}
            />
            <Tabs.Screen  
                name='Discovery' 
                options={{
                            title: 'Discovery',
                            tabBarIcon: ({ focused }) => <Fontisto name="map-marker-alt" size={30} color={focused ? Colors.RedColor : "black"} />,
                        }}
            />
            <Tabs.Screen  
                name='ManageFriends' 
                options={{
                            title: 'Manage Friends',
                            tabBarIcon: ({ focused }) => <FontAwesome5 name="users" size={30} color={focused ? Colors.RedColor : "black"} />,
                        }}
            />
            <Tabs.Screen  
                name='Message'  
                options={{
                            title: 'Message',
                            tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="chat-processing" size={30} color={focused ? Colors.RedColor : "black"} />,
                        }}
            />
             <Tabs.Screen  
                name='Profile' 
                options={{
                            title: 'Profile',
                            tabBarIcon: ({ focused }) => <MaterialIcons name="account-circle" size={30} color={focused ? Colors.RedColor : "black"} />,
                        }}
            />
        </Tabs>
    );
}